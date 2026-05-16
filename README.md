# Morgen

Personal site for **Morgen** — technologist profile, core primitives, and proof of merit. Built with [Astro](https://astro.build) and Tailwind CSS.

**Live site:** [https://helm-team.github.io/Morgen/](https://helm-team.github.io/Morgen/)

## Develop

Requires Node.js 24.x.

```bash
git clone https://github.com/Helm-Team/Morgen.git
cd Morgen
npm install
npm run dev
```

| Command        | Action                          |
| :------------- | :------------------------------ |
| `npm install`  | Install dependencies            |
| `npm run dev`  | Dev server at `localhost:4321`  |
| `npm run build`| Production build to `./dist/`   |
| `npm run preview` | Preview the production build |

## Deploy

Pushes to `main` deploy via GitHub Actions (`.github/workflows/deploy.yml`) to GitHub Pages.

## Structure

- `src/config/` — site copy and navigation
- `src/content/primitives/` — long-form primitive articles
- `src/components/` — page sections and layout UI
- `public/` — static assets (avatar, favicon, images)
