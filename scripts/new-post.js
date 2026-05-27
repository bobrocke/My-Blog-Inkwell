// Run with: node scripts/new-post.js "Post Title" [-c "cat1" "cat2"] [-t "tag1" "tag2"]
import { writeFileSync } from "node:fs";
import { join } from "node:path";

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

function main() {
  const { title, categories, tags } = parseArgs();

  if (!title) {
    console.error(
      "Usage: node scripts/new-post.js <title> [--categories cat1 cat2] [--tags tag1 tag2]"
    );
    process.exit(1);
  }

  const slug = slugify(title);
  const filename = `${slug}.md`;
  const filepath = join(CONTENT_DIR, filename);

  const catEntry = `categories: [${formatList(categories)}]`;
  const tagEntry = `tags: [${formatList(tags)}]`;

  const frontmatter = [
    "---",
    `title: ${title}`,
    `date: ${now()}`,
    catEntry,
    tagEntry,
    `draft: true`,
    "---",
    "",
    "<!--more-->",
    "",
  ].join("\n");

  writeFileSync(filepath, frontmatter, "utf-8");
  console.log(`Created ${filepath}`);
}

main();
