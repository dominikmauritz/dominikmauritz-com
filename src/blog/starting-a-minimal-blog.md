---
layout: layouts/post.njk
title: Starting a minimal blog
description: Why this site now uses Eleventy for a very small static blog.
excerpt: A first post explaining why a tiny static-site generator is enough for this website.
date: 2026-05-14
tags:
  - blog
---
This site stayed deliberately small for a long time: one page, a few links, and no real need for application code.

Adding a blog changed that a little, but not enough to justify a full framework. A static site generator is a better fit because it keeps authoring simple while still producing plain HTML.

## Why Eleventy

Eleventy is a good middle ground for a site like this:

- posts can live as Markdown files in the repository
- the output is still just static files
- the templates stay lightweight and easy to understand
- GitHub Pages can publish it through a small build workflow

## What writing a post looks like

Each post is just a Markdown file with a little front matter for the title, date, and excerpt. That means writing stays close to plain text and the design stays consistent automatically.

## What comes next

From here, new posts only need a new Markdown file in `src/blog/`. The homepage stays simple, and the blog can grow without changing the character of the site.

