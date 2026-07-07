# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Bun is the package manager and task runner (see `bun.lockb`).

- `bun install` installs dependencies
- `bun run dev` starts the dev server (Next.js with Turbopack)
- `bun run build` creates a production build
- `bun run lint` runs ESLint (flat config in `eslint.config.mjs`, extends next/core-web-vitals + next/typescript)
- `bun run prettier` checks and writes formatting across the repo

There are no tests. A husky pre-commit hook runs lint-staged (`prettier --write` + `eslint --fix` on staged `*.{ts,tsx,js,jsx}`). The user does not run builds themselves; run `bun run lint` and `bun run build` after changes and report any errors.

## Architecture

A personal portfolio site styled as a VS Code editor clone. Next.js 16 App Router, React 19, Tailwind CSS 4, TypeScript (strict), Zustand. Deployed on Vercel.

### The IDE shell

`src/app/layout.tsx` wraps every page in `MainLayout` (`src/components/main-layout.tsx`), which renders the entire IDE chrome around the routed page content: `TopBar` (menu bar), `PersistentSidebar` (activity bar), `Explorer` (file tree = site navigation), `EditorTabs`, `Terminal`, `BottomBar`, and `MobileFloatingBar`. Panels are resizable/collapsible via `react-resizable-panels`; layout sizes persist through `autoSaveId`.

### Routes as "files"

Each App Router route (`/`, `/about-me`, `/projects`, `/blogs`, `/work-experience`, `/contact-me`) is presented as a file open in an editor tab. The mapping lives in `sidebarLinks` in `src/constants/index.ts` (label, icon, color, href). **To add a page:** create the route under `src/app/` and add an entry to `sidebarLinks`; Explorer and the tab system are driven entirely by that array. Tabs are matched by `href`.

### State

Single Zustand store at `src/store/index.ts`, composed from slices in `src/store/slices/`:

- `editor-slice.ts` holds open tabs (`activeEditors`) and the active tab; `handleNewEditor` focuses an existing tab or opens a new one.
- `terminal-slice.tsx` holds fake terminal log lines (JSX elements, capped at 50). `MainLayout` appends a fake `GET <path> 200` log on every route change.
- `theme-slice.ts` holds the active color theme (persisted to localStorage) and the theme quick pick's open state.

### Theming

Custom Tailwind color tokens (`bg-editor`, `bg-panel`, `bg-sidebar`, `border-border`, `text-muted`, `bg-token-*`, `bg-list-active`) map to CSS variables registered in `src/app/globals.css`. Each color theme is a `[data-theme='<id>']` variable block in `src/app/themes/dark.css` or `src/app/themes/light.css`, registered in `src/constants/themes.ts`. `:root` in light.css holds the Light+ values and doubles as the no-theme fallback; a `prefers-color-scheme` block in dark.css mirrors Dark+ for no-JS visitors. An inline script in `src/app/layout.tsx` (generated from the registry) applies the saved theme before hydration. To add a theme: add a variable block in the matching themes CSS file plus an entry in themes.ts.

### Content

All portfolio content (social links, projects, blogs) is hardcoded in `src/constants/self.tsx`; pages render from these constants. There is no CMS or API. Shared types are in `src/types/index.ts`. Page-specific components are colocated under `src/app/<route>/components/`.

## Code style

- Prefer `switch` over if/else ladders when branching on a single value.
- Use guard-clause early returns instead of nested/chained ifs.
- Keep files under ~200 lines; when one grows past that, split it up.
- Extract self-contained JSX into components rather than inline render helpers. Page-specific components go under `src/app/<route>/components/`, shared ones in `src/components/`.
- No code comments; write self-explanatory code. Comment only truly exceptional cases.
- Never use em dashes anywhere (code, copy, prose, commit messages).

## Conventions

- `@/*` path alias maps to `./src/*`.
- Prettier: single quotes, print width 90, enforced import ordering (`@ianvs/prettier-plugin-sort-imports`) and Tailwind class sorting. Don't hand-order imports or classes; run prettier.
- Git commits: never include a `Co-Authored-By: Claude` trailer.
- Icons come from `react-icons` (mostly `react-icons/vsc` to match the VS Code look).
- Remote images are only allowed from `media2.dev.to` (`next.config.ts`).
