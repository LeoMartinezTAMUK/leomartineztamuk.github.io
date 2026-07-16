/**
 * Prefix a public-folder path with the configured base path, so links keep
 * working if the site is deployed as a GitHub Pages *project* site
 * (BASE = '/portfolio') instead of at a domain root.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const clean = path.replace(/^\//, '');
  return base.endsWith('/') ? base + clean : `${base}/${clean}`;
}
