// Run with: node scripts/new-post.js                (interactive mode)
//       or: node scripts/new-post.js "Post Title" [-c "cat1" "cat2"] [-t "tag1" "tag2"]
import { existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createInterface } from "node:readline/promises";

const CONTENT_DIR = "content/blog";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function now() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function parseArgs() {
  const args = process.argv.slice(2);
  const title = [];
  const categories = [];
  const tags = [];
  let mode = "title";

  for (const arg of args) {
    if (arg === "--categories" || arg === "-c") {
      mode = "categories";
    } else if (arg === "--tags" || arg === "-t") {
      mode = "tags";
    } else if (mode === "title") {
      title.push(arg);
    } else if (mode === "categories") {
      categories.push(arg);
    } else {
      tags.push(arg);
    }
  }

  return { title: title.join(" "), categories, tags };
}

function formatList(items) {
  return items.map((c) => `"${c}"`).join(", ");
}

async function prompt(rl, question) {
  return (await rl.question(question + " ")).trim();
}

async function promptRequired(rl, question, warning) {
  while (true) {
    const answer = await prompt(rl, question);
    if (answer) return answer;
    console.error(warning);
  }
}

async function promptOverwrite(rl, filepath) {
  while (true) {
    const answer = await prompt(rl, `File already exists: ${filepath}. Overwrite? [y/N]`);
    const lower = answer.toLowerCase();
    if (lower === "y" || lower === "yes") return true;
    if (lower === "" || lower === "n" || lower === "no") return false;
  }
}

function parseCsv(input) {
  if (!input) return [];
  return input.split(",").map((s) => s.trim()).filter(Boolean);
}

async function resolveTitle(rl) {
  const title = await promptRequired(
    rl,
    "Title:",
    "Title is required. Please enter a title.",
  );

  const filepath = join(CONTENT_DIR, `${slugify(title)}.md`);
  if (existsSync(filepath)) {
    const overwrite = await promptOverwrite(rl, filepath);
    if (!overwrite) {
      console.log("Aborted.");
      process.exit(0);
    }
  }

  return title;
}

async function interactiveMode() {
  const rl = createInterface({ input: process.stdin, output: process.stdout });

  try {
    const title = await resolveTitle(rl);

    const catString = await prompt(rl, "Categories (comma-separated, optional):");
    const tagString = await prompt(rl, "Tags (comma-separated, optional):");

    rl.close();
    return { title, categories: parseCsv(catString), tags: parseCsv(tagString) };
  } catch {
    rl.close();
    process.exit(0);
  }
}

function createPost(title, categories, tags) {
  const slug = slugify(title);
  const filepath = join(CONTENT_DIR, `${slug}.md`);

  const frontmatter = [
    "---",
    `title: ${title}`,
    `date: ${now()}`,
    `lastmod: `,
    `categories: [${formatList(categories)}]`,
    `tags: [${formatList(tags)}]`,
    `draft: true`,
    "---",
    "",
    "<!--more-->",
    "",
  ].join("\n");

  writeFileSync(filepath, frontmatter, "utf-8");
  console.log(`Created ${filepath}`);
}

async function main() {
  let title, categories, tags;

  if (process.argv.length > 2) {
    ({ title, categories, tags } = parseArgs());

    if (!title) {
      console.error(
        "Usage: node scripts/new-post.js <title> [--categories cat1 cat2] [--tags tag1 tag2]",
      );
      process.exit(1);
    }

    const filepath = join(CONTENT_DIR, `${slugify(title)}.md`);
    if (existsSync(filepath)) {
      const rl = createInterface({ input: process.stdin, output: process.stdout });
      const overwrite = await promptOverwrite(rl, filepath);
      rl.close();
      if (!overwrite) {
        console.log("Aborted.");
        process.exit(0);
      }
    }
  } else {
    ({ title, categories, tags } = await interactiveMode());
  }

  createPost(title, categories, tags);
}

main();
