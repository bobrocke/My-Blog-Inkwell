# My Blog Inkwell

## Templates

Templates live in the `templates/` directory and use the `.vto` (Vento) extension.

### How a page finds its template

For a regular content page or blog post, Inkwell resolves the template in this order:

1. **`layout` front matter** — if the post's front matter includes a `layout` key, that template is used (e.g. `layout: post` → `templates/post.vto`).
2. **Collection name** — if the post belongs to a collection (e.g. `posts`), Inkwell looks for `templates/posts.vto`.
3. **Fallback** — `templates/page.vto`.

To explicitly set the template for a post, add `layout` to its front matter:

```markdown
---
title: My Post
date: 2024-01-01
layout: post
---
```

Listing pages (collection indexes, taxonomy pages) follow a similar but separate resolution order, falling back to `listing.vto`.
