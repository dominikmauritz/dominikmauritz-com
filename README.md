# dominikmauritz.com

Minimal personal site and blog powered by Eleventy.

## Local development

1. `npm install`
2. `npm run dev`

## Build

`npm run build`

## Writing a post

Add a new Markdown file in `src/blog/` with front matter for:

- `title`
- `date`
- `excerpt`
- `description`
- `tags: [blog]`

GitHub Pages is deployed through the workflow in `.github/workflows/deploy.yml`.
