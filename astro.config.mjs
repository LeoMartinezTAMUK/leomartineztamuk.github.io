// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Deployment configuration.
 *
 * SITE is the final public URL of the deployed site. It is used for the
 * sitemap, canonical URLs, Open Graph tags, and JSON-LD.
 *
 * BASE matters only for GitHub Pages *project* sites:
 *   - User site  (repo named LeoMartinezTAMUK.github.io) -> BASE = '/'
 *   - Project site (repo named e.g. "portfolio")          -> BASE = '/portfolio'
 * Vercel/Netlify/custom domain -> BASE = '/'
 */
const SITE = 'https://leomartineztamuk.github.io';
const BASE = '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [sitemap()],
  build: {
    // Inline all CSS into the HTML: the total is small, and this removes
    // every render-blocking stylesheet request.
    inlineStylesheets: 'always',
  },
});
