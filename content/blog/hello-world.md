---
title: Hello, World!
date: 2026-01-01
lastmod: 2026-05-09
tags: [hello, inkwell]
categories: [General, stuff]
draft: true
---

# Hello, World!

Welcome to your new **Inkwell** site. Edit this post in `content/posts/hello-world.md`
or run `inkwell serve` to start the development server.

## Syntax highlighting

inkwell-ssg uses [Shiki](https://shiki.style/) to highlight code at build time — no JavaScript shipped to the browser.

```js
// inkwell.config.js
export default {
  title: "My Site",
  siteUrl: "https://example.com",
  collections: [
    { name: "posts", pattern: "posts/**", pageSize: 10 },
  ],
  taxonomies: [
    { name: "tags", pageSize: 10 },
    { name: "categories", pageSize: 10 },
  ],
};
```
