# Documentation Site Setup

This project uses [Nextra](https://nextra.site) to generate documentation hosted on GitHub Pages.

## Development

Run the development server:

```bash
npm run dev:docs
```

Visit `http://localhost:3000` to see the docs.

## Building

Build the static site:

```bash
npm run build:docs
```

The output will be in the `out/` directory.

## Deployment

Documentation is automatically deployed to GitHub Pages via GitHub Actions when:

- Changes are pushed to `main` branch
- Changes affect files in `docs/`, `content/`, or Next.js config files

The site will be available at:
`https://rachelallyson.github.io/eslint-config-node/`

## File Structure

- `docs/` - **Source of truth** - All documentation in Markdown
- `content/` - Generated from `docs/` (auto-synced, gitignored)
- `app/layout.jsx` - Nextra theme layout
- `app/[[...mdxPath]]/page.jsx` - Catch-all route for content directory
- `next.config.mjs` - Next.js configuration

## Updating Documentation

1. **Edit files in `docs/`** - This is the only directory you edit
2. **Preview locally**: `npm run dev:docs` (auto-syncs docs → content)
3. **Commit and push** - GitHub Actions auto-syncs and deploys

**Note**: The `content/` directory is generated automatically and should never be edited directly. All changes go in `docs/`.
