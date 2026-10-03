# T2T Technologies — Company Website

The central home for **T2T Technologies** projects, experiments, research, and future products.

Built with **React + Vite (JavaScript)**, regular CSS, React Router, and lucide-react icons.
No TypeScript, no Tailwind, no UI frameworks — intentionally lightweight (~97 kB gzipped JS).

## Quick start

```bash
npm install
npm run dev        # → http://localhost:5173
```

| Command             | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Dev server with hot reload                    |
| `npm run build`     | Production build into `dist/`                 |
| `npm run preview`   | Preview the production build locally          |

## Pages

| Route                 | Page                                              |
| --------------------- | ------------------------------------------------- |
| `/`                   | Home — hero, philosophy, projects, tech, lab      |
| `/projects`           | All projects with status filter                   |
| `/projects/:slug`     | Project detail (t2t, ghost, reactsure, zenith, nft-marketplace) |
| `/technology`         | Technology map + area definitions                 |
| `/research`           | T2T Lab — experiments and research                |
| `/about`              | Company story + founder                           |
| `/contact`            | Contact links (static, no form backend)           |

## Adding a new project

Edit **`src/data/projects.js`** — copy any existing object, change the fields, save.
It automatically appears on the Projects page, gets its own detail page at
`/projects/<slug>`, and becomes filterable by status. No component changes needed.

```js
{
  slug: "new-project",
  name: "New Project",
  tagline: "One-line hook",
  category: "AI",
  description: "Short description",
  longDescription: "Longer version for the detail page",
  problem: "…", idea: "…",
  howItWorks: [{ title: "Step", text: "…" }],
  architectureNote: "TODO …",
  technology: ["React", "AI"],
  concepts: ["…"],
  status: "Prototype",       // Building · Prototype · Research · Experimental · Completed · Coming Soon
  featured: false,
  github: "", demo: "",
  future: ["…"],
}
```

Other editable data: `src/data/technologies.js` (tech areas + map), `src/data/lab.js`
(lab entries), `src/data/site.js` (contact links, founder info).

## Deploying to Vercel

The repo is deployed on **Vercel** and redeploys automatically on every push to `main`.

### First-time setup

1. Push this project to GitHub with the **repo root = this folder** (i.e. `package.json`
   sits at the repository root, not inside a subfolder).
2. Go to [vercel.com/new](https://vercel.com/new) → import the GitHub repo.
3. Vercel auto-detects Vite — leave the framework preset as-is:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm ci`
4. Click **Deploy**. That's it — no environment variables are required (the site is
   fully static).

### What `vercel.json` does

- **SPA rewrites** — all routes fall back to `index.html`, so deep links like
  `/projects/ghost` work on refresh (required for React Router).
- **Security headers** — `Content-Security-Policy`, `X-Content-Type-Options`,
  `X-Frame-Options`, `Referrer-Policy`, and `Permissions-Policy` on every response.
- **Asset caching** — hashed files under `/assets/` are cached for one year.

## Project structure

```
src/
├── assets/
├── components/
│   ├── Navbar.jsx          # router nav + mobile hamburger
│   ├── Footer.jsx
│   ├── Hero.jsx            # headline + SVG network visual
│   ├── ProjectCard.jsx
│   ├── StatusBadge.jsx
│   ├── SectionTitle.jsx
│   ├── Reveal.jsx          # scroll fade-in (IntersectionObserver)
│   ├── TechMap.jsx         # technology graph
│   └── ContactCta.jsx
├── data/
│   ├── projects.js         # ← add new projects here
│   ├── technologies.js
│   ├── lab.js
│   └── site.js             # ← contact/founder links
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── ProjectDetails.jsx
│   ├── Technology.jsx
│   ├── Research.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── App.jsx                 # routes
├── main.jsx
└── index.css               # full design system (tokens at the top)
```

## Content honesty

All project statuses reflect reality (no finished project is claimed). Contact links
live in `src/data/site.js` — keep them pointing at real profiles.
