# Jeremy McKinney — Portfolio

Single-page personal portfolio: hero, about, skills, experience, projects, education, and contact. Built as a static React app with a dark, gold-accent UI and smooth section animations.

## Stack

- **React 18** + **TypeScript**
- **Vite 5** (dev, build, preview)
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Framer Motion** for motion
- **Wouter** for routing (`/` and 404)
- **Radix UI–style primitives** under `src/components/ui` (subset used by the page)

## Requirements

- Node.js 18+ (20 LTS recommended)
- npm (or compatible package manager)

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `npm run dev`  | Start dev server (host `0.0.0.0`)    |
| `npm run build`| Production build to `dist/`          |
| `npm run preview` | Serve `dist/` locally             |
| `npm run typecheck` | `tsc --noEmit` (no emit)       |

## Project layout

- `src/main.tsx` — entry, error boundary
- `src/App.tsx` — router shell, dark mode class on `<html>`
- `src/pages/` — `Home`, `not-found`
- `src/components/portfolio/` — page sections and layout
- `public/` — static assets (`logo.png`, `favicon.svg`, etc.)

## Deployment

Output is static: run `npm run build` and deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

If the site is served from a **subpath** (e.g. `https://user.github.io/repo/`), set `base` in `vite.config.ts` to that path (e.g. `base: "/repo/"`) and rebuild.

## License

Private project; all rights reserved unless otherwise noted by the author.
