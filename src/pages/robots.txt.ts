import type { APIRoute } from 'astro';
import { withBase } from '../lib/url';

/**
 * Generates robots.txt at build time, so the sitemap URL always follows the
 * SITE and BASE configured in astro.config.mjs instead of drifting.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(withBase('sitemap-index.xml'), site);
  const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${sitemap}`, ''].join(
    '\n'
  );
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
