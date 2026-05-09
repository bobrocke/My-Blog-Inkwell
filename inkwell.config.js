/** @type {import('inkwell-ssg').InkwellConfig} */
export default {
  title: "My Blog Inkwell",
  siteUrl: "https://example.com",
  description: "A site built with inkwell-ssg.",

  taxonomies: [
    { name: "tags", pageSize: 5 },
    { name: "categories", pageSize: 5 },
  ],

  collections: [
    {
      name: "posts",
      pageSize: 5,
    },
  ],

  rss: {
    enabled: true,
    limit: 20,
  },

  // Default Shiki languages: javascript, typescript, php, html, erb, go, json, liquid, markdown, ruby, css
  // Add more languages as needed:
  shiki: {
    langs: ["python", "rust", "bash", "twig", "jinja", "diff"],
  },
};
