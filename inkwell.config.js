/** @type {import('inkwell-ssg').InkwellConfig} */
export default {
  title: "My Blog Inkwell",
  siteUrl: "https://bobrockefeller.com",
  description: "A site built with inkwell-ssg.",
  language: "en-US",

  taxonomies: [
    { name: "tags", pageSize: 4, indexPageSize: 8 },
    { name: "categories", pageSize: 4, indexPageSize: 8 },
  ],

  collections: [
    {
      name: "Blog",
      pageSize: 4,
      url: "/",
    },
  ],

  rss: {
    enabled: true,
    limit: 20,
  },

  // Default Shiki languages: javascript, typescript, python, php, html, erb, go, json, liquid, markdown, ruby, css, vento
  // Add more languages as needed:
  shiki: {
    langs: ["rust", "bash", "twig", "jinja", "diff"],
    lightTheme: "one-light",
    darkTheme: "one-dark-pro",
  },
};
