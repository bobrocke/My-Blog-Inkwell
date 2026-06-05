---
title: Inkwell
date: 2026-05-31
lastmod: 
categories: [Web Development]
tags: [Inkwell]
draft: true
---

The coming together of my frustrations with 11ty and Zola just when I discovered coding AI for myself, made it feasible to create a Static Site Generator (SSG) of my own. As they say, there are many SSGs, but this one is mine.

<!--more-->

11ty lets you do most anything if you want to write the code to do it: double-pagination, categories, tags, and so on. Going the other way, Zola comes with everything in the box -- if it's not in the box, too bad. For example, I wanted to paginate my tags listing page and extract EXIF data from an image. Too bad with Zola, and bunch of code for 11ty.

Hence Inkwell: A batteries-included static site generator for content-heavy sites written in TypeScript, running on Node,  with pagination, prev/next navigation, markdown parsing, taxonomies, EXIF, and syntax highlighting out of the box. No plugin hunting for the essentials. Or coding your own. Or doing without.

AI (Claude Code Sonnet 4.6 via GitHub Copilot) is not very new. But I got interested, used it for some simple fixes and debugging, and figured it would be fun to use to create an entire SSG. So after about 90% of the coding by AI, I had Inkwell up and running.
