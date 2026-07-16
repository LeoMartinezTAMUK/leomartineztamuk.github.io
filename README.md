# Leo Martinez III · Portfolio

The source for my personal portfolio: [leomartineztamuk.github.io](https://leomartineztamuk.github.io)

I'm an AI/LLM Security Engineer. I build AI agents and break the ones that
can't be trusted: adversarial LLM evaluation, autonomous coding agents, and
ML-based cyber threat detection.

## Design

The concept is **"dual spectrum"**, the builder/breaker identity turned into a
design system. The page is mostly monochrome graphite; blue marks *build*
(engineering) work, red marks *break* (adversarial/security) work, and violet
marks work that is both. That motif runs through the hero, the project tags,
and the experience timeline.

Dark-first with a light toggle, fully responsive, keyboard accessible, and
scored 100/100/100/100 on Lighthouse (performance, accessibility, best
practices, SEO).

## Tech

- [Astro](https://astro.build) with static output, so the deployed site is
  plain HTML/CSS with almost no client-side JavaScript (just the theme toggle
  and two small scroll scripts).
- Self-hosted variable fonts (Schibsted Grotesk, Inter, JetBrains Mono) via
  Fontsource, with metric-matched fallbacks so text doesn't shift as they load.
- No UI framework and no runtime dependencies.

## Run locally

Requires Node 22.12+ (tested on Node 22, WSL Ubuntu 22.04).

```sh
npm install
npm run dev        # dev server at http://localhost:4321
npm run build      # static production build -> dist/
npm run preview    # serve the production build locally
npm run check      # type-check .astro and .ts files
```

## Editing content

All copy and data live in `src/data/` as typed files; no markup changes needed:

| File                     | Controls                                          |
| ------------------------ | ------------------------------------------------- |
| `src/data/site.ts`       | Name, role, hero statement, links, meta/SEO text  |
| `src/data/projects.ts`   | Project cards and the compact "more projects" row |
| `src/data/experience.ts` | Timeline entries                                  |
| `src/data/education.ts`  | Degrees, thesis, publications (with DOI links)    |
| `src/data/skills.ts`     | Skill groups, certification badges, awards        |

Each entry is typed in `src/data/types.ts`, so a typo becomes a build error
instead of a broken layout. The `spectrum` field
(`'build' | 'break' | 'both'`) drives the accent color for a project tag or a
timeline marker.

## Social card and icons

`public/og.png` (the 1200x630 link-preview card) and
`public/apple-touch-icon.png` are generated from inline SVG:

```sh
npm run og
```

Edit the palette constants at the top of `scripts/generate-og.mjs` and re-run.

## Deploy

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every
push to `main`. One-time setup: in the repo, go to
**Settings -> Pages -> Source: GitHub Actions**.

For a root URL, the repo must be named `<username>.github.io` and
`BASE` in `astro.config.mjs` stays `'/'`. For a project-path URL, set `BASE`
to `'/<repo-name>'`. To move to a custom domain, update `SITE` in
`astro.config.mjs` (canonical URLs, sitemap, robots.txt, and OG tags all
follow it automatically).

## Structure

```
src/
├── data/          # all content (see table above)
├── styles/        # global.css: design tokens + base styles
├── layouts/       # Base.astro: head/SEO/JSON-LD, nav, footer, scripts
├── components/    # Section, ProjectCard, TimelineItem, Tag, Icon, ...
├── lib/           # withBase() helper for subpath deploys
└── pages/         # index.astro, 404.astro, robots.txt.ts
scripts/           # generate-og.mjs + fonts for it
public/            # favicon, og.png, apple-touch-icon.png, resume.pdf
```

## License

Code is free to reference. The written content, resume, and personal branding
are © Leo Martinez III.
