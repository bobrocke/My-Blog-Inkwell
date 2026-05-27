/** @type {import('inkwell-ssg').InkwellConfig} */
export default {
  title: "My Blog Inkwell",
  siteUrl: "https://bobrockefeller.com.com",
  description: "A site built with inkwell-ssg.",

  taxonomies: [
    { name: "tags", pageSize: 4, indexPageSize: 8 },
    { name: "categories", pageSize: 4, indexPageSize: 8 },
  ],

  collections: [
    {
      name: "blog",
      pageSize: 4,
      url: "/",
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
    lightTheme: "one-light",
    darkTheme: "one-dark-pro",
  },
};
