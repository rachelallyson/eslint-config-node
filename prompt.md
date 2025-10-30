# Documentation Generation Prompt

You are an expert DX writer + repo librarian. Your job: generate LLM-friendly, in-repo documentation for this package so AI code editors (Cursor) and humans can understand and use it with minimal friction. You will also set up a Nextra-based GitHub Pages site.

## READ FIRST (do not guess until you read these files if present)

- package.json
- tsconfig.json
- src/index.ts (public exports) and src/**
- prisma/schema.prisma (if exists)
- .env.example (if exists)
- README.md (existing)
- CHANGELOG.md (existing)
- any existing content/ or docs/

Summarize what you found (modules, public API surface, config, CLI, examples) and then create or update the following structure and files. Keep prose concise, explicit, copy-pasteable; keep line lengths natural. Use .mdx files in docs/content/ directory (Nextra reads them directly via contentDirBasePath config). Add stable anchors (### headings).

## FILE/TREE TO CREATE OR REFINE

docs/                            # All documentation site infrastructure (self-contained)
  content/                       # Source of truth for documentation content (committed, human-editable)
    index.mdx                    # Entry point + table of contents (use .mdx for Nextra)
    concepts.mdx                 # Core mental models, invariants, lifecycle, data model
    guides/                      # Task-oriented how-tos (at least 3)
      quickstart.mdx             # 5-minute setup using package's real API
      pagination.mdx             # If applicable; otherwise pick a critical task
      error-handling.mdx         # Typed errors, retries, edge cases
    reference/
      config.mdx                 # All env vars & config keys, defaults, precedence
      cli.mdx                    # CLI usage & flags (omit if no CLI)
      http.mdx                   # HTTP endpoints (if any) and auth patterns
    api/
      README.mdx                 # Index of generated API docs (link-per-symbol)
    recipes/
      examples.mdx               # 6–10 copy-paste snippets with "input → output"
    troubleshooting.mdx          # Common errors with exact fixes
    llm-context.mdx              # SHORT map for AI (<= 2–3k tokens; see spec below)
    _meta.json                   # Optional: sidebar navigation structure
  app/                           # Next.js App Router files for Nextra
    layout.jsx                   # Nextra theme layout (Navbar, Footer, Layout)
    [[...mdxPath]]/
      page.jsx                   # Catch-all route for content directory
    not-found.tsx                # Custom 404 page
  next.config.mjs                # Next.js config with Nextra (configured to use content/)
  mdx-components.js              # MDX components config

CONTRIBUTING.md                  # How to dev, test, lint, release
CHANGELOG.md                     # If missing, create Keep a Changelog-compatible stub
.cursor/
  rules/01-repo.md               # Cursor rules: where truth lives, style, guardrails
typedoc.json                     # Generate Markdown into docs/content/api/ (if TS project)
docs/content/reference/config.schema.json  # JSON Schema for config if config exists

.github/workflows/
  docs.yml                       # GitHub Actions: build and deploy to GitHub Pages

.gitignore                       # Include .next/, out/, node_modules/, etc.

## STRUCTURE PRINCIPLES

- **docs/content/** is the source of truth for documentation (committed, human-editable, uses .mdx files for Nextra)
- All documentation content lives in docs/content/ directory - no sync needed
- All documentation site infrastructure lives in docs/ directory (app/, next.config.mjs, mdx-components.js)
- This keeps everything documentation-related in one place - docs/ is self-contained
- Just edit .mdx files directly in docs/content/ - no conversion needed

## NEXTRA SETUP

### package.json scripts

Add these scripts (they run from the docs/ directory):

```json
{
  "scripts": {
    "dev:docs": "cd docs && next dev",
    "build:docs": "cd docs && next build",
    "start:docs": "cd docs && next start"
  }
}
```

### package.json devDependencies

Add:

```json
{
  "devDependencies": {
    "next": ">=16",
    "nextra": "^4.6.0",
    "nextra-theme-docs": "^4.6.0",
    "react": "^19",
    "react-dom": "^19",
    "@types/react": "^19"
  }
}
```

### docs/next.config.mjs

```javascript
import nextra from 'nextra'

const withNextra = nextra({
  search: { codeblocks: false },
  contentDirBasePath: '/content' // Configure Nextra to use content/ directory (relative to this config file)
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/REPO_NAME' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/REPO_NAME' : '',
  trailingSlash: true
}

export default withNextra(nextConfig)
```

**Note:**

- The `contentDirBasePath: '/content'` option configures Nextra to use the `content/` directory relative to where this config file lives
- Since this config is in `docs/next.config.mjs`, it reads from `docs/content/`
- All documentation should be in `docs/content/` with `.mdx` files - no symlinks or sync needed

**Replace `REPO_NAME` with your repository name (lowercase, matches GitHub URL).**

### docs/app/layout.jsx

```javascript
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'Package Name',
  description: 'Package description',
}

const navbar = <Navbar logo={<b>Package Name</b>} />
const footer = <Footer>License © {new Date().getFullYear()} Your Name.</Footer>

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/USERNAME/REPO/blob/main/docs/content"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
```

**Replace `USERNAME` and `REPO` with your GitHub username and repository name.**

### docs/app/[[...mdxPath]]/page.jsx

```javascript
import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params?.mdxPath)
  return metadata
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props) {
  const params = await props.params
  const path = params?.mdxPath?.length ? params.mdxPath : undefined
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode
  } = await importPage(path)
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
```

### docs/app/not-found.tsx

```javascript
export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  )
}
```

### docs/mdx-components.js

```javascript
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'

const themeComponents = getThemeComponents()

export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components
  }
}
```

### .github/workflows/docs.yml

```yaml
name: Deploy Docs

on:
  push:
    branches: [main]
    paths:
      - 'docs/**'
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - uses: actions/configure-pages@v4
      - run: npm ci
      - run: npm run build:docs
      - uses: actions/upload-pages-artifact@v3
        with:
          path: './docs/out'
      - uses: actions/deploy-pages@v4
        id: deployment
```

**Note:** Configure Nextra with `contentDirBasePath: '/content'` in `docs/next.config.mjs` to use the `docs/content/` directory. All documentation should be in `docs/content/` with `.mdx` files.

### .gitignore additions

```
# Next.js build outputs (documentation site)
docs/.next/
docs/out/
```

## CONTENT RULES

- Source of truth for the public API = src/index.ts (or main export file). Link deep types but discourage deep imports.
- State all invariants explicitly (e.g., timestamps UTC ISO 8601, idempotency keys, transaction requirements).
- Put config truth in ONE place: docs/content/reference/config.mdx (+ config.schema.json). Elsewhere link back.
- Examples must be runnable and version-accurate (use real imports from package.json "name").
- If Prisma exists, document the minimal required schema relations and how the package expects to interact (read/write/transactions).
- If HTTP features exist, include auth flow, error surfaces, and retry/backoff policy with numeric defaults.
- Troubleshooting entries must be "Symptom → Cause → Fix (shell/TS snippet)".
- Keep headings predictable: "Why", "What", "How", "Edge cases", "FAQ".

## llm-context.md (AI map) — required sections & style

- Purpose: Help AI answer correctly with minimal files.
- Start Here: links to docs/content/index.mdx, docs/content/concepts.mdx, docs/content/reference/config.mdx, docs/content/api/, src/index.ts
- Invariants: bullet list of must-always-be-true rules
- Public Surface: bullet list of exported modules/functions/types
- Common Tasks: links to the 2–3 most important guides
- Don'ts: e.g., "Don't invent env vars; don't deep import; use createClient() not new Client()"
- Max 2–3k tokens. Use tight bullets. No fluff.

## .cursor/rules/01-repo.md — required content

- "Always read docs/content/llm-context.mdx, docs/content/index.mdx, docs/content/reference/config.mdx, and src/index.ts before generating code."
- "Prefer public exports from src/index.ts; avoid deep imports."
- "Never invent configuration keys; only those in docs/content/reference/config.mdx or config.schema.json."
- "When uncertain, propose tests first in **tests**/ and then implement."
- "If touching DB code, follow invariants in docs/content/concepts.mdx#data-invariants."
- "Documentation source is in docs/content/ directory (committed to git, use .mdx files for Nextra)."
- "Documentation site infrastructure is in docs/ directory (docs/app/, docs/next.config.mjs, docs/mdx-components.js)."

## TypeDoc configuration (if TypeScript)

- Create typedoc.json that outputs Markdown to docs/content/api/, one file per public symbol.
- Include only public exports resolved from src/index.ts.
- Add docs/content/api/README.mdx as an index with links.

## GUIDES TO AUTHOR (tailor to this repo; replace if not relevant)

- quickstart.md: install → minimal code sample → expected output.
- pagination.md: how to paginate list endpoints or data sources; include return shapes.
- error-handling.md: typed errors, status codes (if HTTP), retry strategy with numeric defaults; example wrapping with try/catch and backoff.

## RECIPES (examples.md)

- 6–10 short, copy-paste blocks that solve real tasks found in the code (e.g., create/read/update common entities, hook into webhooks, run a Prisma transaction safely, etc.). Each recipe: Context → Code → Expected result.

## CONTRIBUTING.md

- Node/PNPM/NPM version
- Setup (install, env, dev DB if needed)
- Test/lint commands
- Release process (conventional commits or scripts)
- Code style, commit message format, PR checklist
- Documentation workflow: edit .mdx files in docs/content/, run `npm run dev:docs` to preview (runs from docs/ directory)

## QUALITY GATES

- No TODOs or "tbd".
- No placeholder APIs. Everything must compile if copied.
- Link tests where relevant (e.g., "See **tests**/client.retry.test.ts").
- Use stable anchors and relative links (./reference/config.md).
- Keep paragraphs short; prefer lists and tables.
- Documentation site builds successfully (`npm run build:docs` - runs from docs/ directory)
- docs/ directory is self-contained and contains all documentation infrastructure
- Use .mdx files in docs/content/ (Nextra reads them directly, no conversion needed)

## NOW: Perform the work

1) Inspect the repo files listed above and infer the real API/config.
2) Print a brief summary of what you found (1–2 paragraphs).
3) Propose the final file tree (only paths), including Nextra infrastructure.
4) Generate the contents for each new/updated file in order, starting with:
   - docs/content/index.mdx
   - docs/content/llm-context.mdx
   - docs/content/concepts.mdx
   - docs/content/guides/quickstart.mdx
   - docs/content/guides/error-handling.mdx
   - docs/content/reference/config.mdx (+ config.schema.json if applicable)
   - docs/content/recipes/examples.mdx
   - docs/content/troubleshooting.mdx
   - .cursor/rules/01-repo.md
   - typedoc.json (if TypeScript)
   - CONTRIBUTING.md
   - docs/app/layout.jsx
   - docs/app/[[...mdxPath]]/page.jsx
   - docs/app/not-found.tsx
   - docs/next.config.mjs
   - docs/mdx-components.js
   - .github/workflows/docs.yml
5) If something is not applicable (e.g., no CLI), explicitly say "Skipped <file> — not applicable".

Work within this chat; include file contents in fenced code blocks with the path as the title (e.g., "# docs/index.mdx"). Keep it cohesive and accurate to THIS repo.
