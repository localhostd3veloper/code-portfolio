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
- `search-slice.ts` holds the search palette's open state.

### Search palette

`SearchPalette` (`src/components/search-palette.tsx`, mounted by `MainLayout`) owns the shortcuts (`Ctrl+K`, `Ctrl+P`, `Ctrl+Shift+F`) and renders `SearchQuickPick`. The index is built in `src/constants/search.ts` from `sidebarLinks` plus everything in `src/constants/self.tsx`, so new content in self.tsx becomes searchable with no other change. Results either open an external URL or navigate to `<route>#<anchor>`; anchor ids come from `projectAnchorId`/`experienceAnchorId`, which the project and experience cards use for their `id`. Because `Ctrl+K` opens the palette, the theme quick pick chord is `Ctrl+K Ctrl+T`.

### Motion

Tokens and variants live in `src/constants/motion.ts` (`motion` v12, imported as `motion/react`): `EASE`/`DURATION`/`SPRING` are the raw values, `fadeIn`/`fadeRise`/`fadeSoft` are entrance variants (opacity-led; `fadeRise` adds at most 4px of `y`, `fadeSoft` adds a blur), and `staggerContainer`/`withStagger` build `delayChildren: stagger(...)` transitions. `overlayFade`/`quickPickPanel`/`dropdownPanel` are plain `initial`/`animate`/`exit` prop objects for overlay UI, kept separate from the variant tokens because they animate independently of any cascade.

Two orchestration components wrap that system: `Stagger` (`src/components/motion/stagger.tsx`) is a cascade root (`initial="hidden" animate="show"`), and `Reveal` (`src/components/motion/reveal.tsx`) is a cascade participant (`variants` only, no `initial`/`animate`). Passing `interval` to `Reveal` turns it into a nested container, so nested cascades still fire in one continuous sequence.

Two cascades exist. The shell cascade lives in `MainLayout` and fires once on first load, since `MainLayout` does not remount on navigation; each chrome component (`TopBar`, `PersistentSidebar`, `Explorer`, `EditorTabs`, `Terminal`, `MobileFloatingBar`, `BottomBar`) participates by giving its root element `variants={fadeIn}` with no `initial`/`animate` of its own. The page cascade is per-route: each page wraps its content in `<Stagger startDelay={0.12}>` so it replays on every navigation, offset just behind the shell on first load.

Two rules keep this from breaking: a cascade participant gets `variants` only, never `initial`/`animate`/`whileInView` (any of those makes it "controlling" and detaches it from the parent's stagger); and a child's variant `transition` must never set its own `delay` (it silently overrides the computed stagger delay). There is no route-level `AnimatePresence` crossfade. `next.config.ts` sets `cacheComponents: true`, which makes the App Router's `{children}` come from context rather than props, so an exit animation on the route container would render the _new_ page while appearing to fade out the old one.

### Theming

Custom Tailwind color tokens (`bg-editor`, `bg-panel`, `bg-sidebar`, `border-border`, `text-muted`, `bg-token-*`, `bg-list-active`) map to CSS variables registered in `src/app/globals.css`. Each color theme is a `[data-theme='<id>']` variable block in `src/app/themes/dark.css` or `src/app/themes/light.css`, registered in `src/constants/themes.ts`. `:root` in light.css holds the Light+ values and doubles as the no-theme fallback; a `prefers-color-scheme` block in dark.css mirrors Dark+ for no-JS visitors. An inline script in `src/app/layout.tsx` (generated from the registry) applies the saved theme before hydration. To add a theme: add a variable block in the matching themes CSS file plus an entry in themes.ts.

### Content

Projects, experience, blogs, and repos live in `src/data/*.json` (`projects.json`, `experience.json`, `blogs.json`, `repos.json`); `src/constants/self.tsx` imports each and derives the typed export pages consume (`projectsData`, `experienceItems`, `blogs`, `homepageRepos`), computing project `imageURLs` from `imageCount` via `projectImages`. Social links and the typewriter strings stay hardcoded in `self.tsx` since they're rarely-changed and (for socials) tied to `react-icons` component references that don't serialize to JSON. Shared types, including the `*Record` JSON shapes, are in `src/types/index.ts`. Page-specific components are colocated under `src/app/<route>/components/`.

Project gallery images live at `public/projects/<slug>/1.png, 2.png, ...`, where `<slug>` is `slugify(project.name)` (`src/utils/slugify.ts`) — the same slug the search index uses for anchor ids. To add a project by hand: add an entry to `projects.json` and drop numbered PNGs in the matching folder.

### Admin panel

`/admin` (plus `/admin/experience`, `/admin/blogs`, `/admin/repos`) is a local-only CRUD UI over the JSON files, guarded by `isDev()` (`src/utils/dev-guard.ts`) in `src/app/admin/layout.tsx` — it 404s in production, so it never ships live on Vercel. Each section is a thin wrapper (`src/app/admin/components/admin-*.tsx`) around the shared `useEntityCrud` hook (`src/app/admin/hooks/use-entity-crud.ts`) and a generic `EntityList` sidebar; the API routes under `src/app/api/admin/*/route.ts` are built from the `createCrudRoute` factory (`src/utils/crud-route.ts`), which reads/writes the JSON file directly via `src/utils/json-store.ts`. Projects additionally get `/api/admin/projects/images` for uploading gallery images (converted to numbered PNGs with `sharp`, matching the `public/projects/<slug>/` convention) and a slug-uniqueness check on save.

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
