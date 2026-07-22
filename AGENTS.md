# AGENTS.md

## Project

Interactive portfolio styled as a code editor/IDE. Deployed to **Vercel** via `@astrojs/vercel`.

- **Stack**: Astro 6 (SSR) + React islands + Tailwind CSS v4 + Nano Stores
- **Package manager**: npm (lockfile present)
- **Site**: `https://neider.dev`

## Commands

```bash
npm run dev      # start dev server
npm run build    # production build (Vercel adapter)
npm run preview  # preview production build
```

No test, typecheck, or lint scripts are defined. ESLint config exists (`eslint.config.js`) but is not wired to a script.

## Architecture

### Two source trees

| Directory | Purpose |
|---|---|
| `src/components-landing/` | **Active** code — the IDE-themed portfolio |
| `src/legacy/` | **Old** portfolio code — still imported via `@/*` path aliases |

When editing, prefer `src/components-landing/`. Legacy code is kept for reference; new features should not go in `src/legacy/`.

### Entry point

`src/pages/index.astro` — single page. Assembles the IDE layout from components in `src/components-landing/`.

### Layout system

`src/layouts/LayoutLanding.astro` defines a CSS Grid with named areas (header, bar-left, explorer, content, bar-right, terminal, footer). Slots map to these areas. Responsive breakpoints collapse the grid on tablet/mobile — explorer becomes a slide-out overlay.

### State

Nano Stores in `src/components-landing/store/tabsStore.js` manage open tabs and active tab. Components use `@nanostores/react` for reactive bindings.

### Data

Project/experience/skill data lives in `src/lib/infoLanding.ts` (not fetched from an API).

### Supabase

Used for form submission. Client initialized in `src/components-landing/lib/supabaseClient.js` and `src/legacy/supabase/index.ts`.

Required env vars:
- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY`

### React islands

React components use `client:load` directive. Found in `src/components-landing/react/` and `src/components-landing/tabs/Tabs.jsx`.

## Path aliases

Defined in `tsconfig.json`:

| Alias | Resolves to |
|---|---|
| `@/*` | `src/*` |
| `@/components` | `src/legacy/components/*` |
| `@/icons` | `src/icons/*` |
| `@/components-landing` | `src/components-landing/*` |

Note: `@/components` points to **legacy**, not the active components directory.

## Tailwind CSS

v4 via Vite plugin (`@tailwindcss/vite`), not PostCSS. Custom fonts defined in `src/styles/global.css` as `--font-code` (Fira Code) and `--font-jetbrains` (JetBrains Mono).

## Conventions

- Astro components use `.astro` extension; React islands use `.jsx`/`.tsx`
- Content is in Spanish (UI text, data, comments)
- `.env` is gitignored; `.env.production` is also ignored
- `changes.md` and `notes-agents.md` are gitignored
