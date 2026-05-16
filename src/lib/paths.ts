/** Prefix a root-relative path with Astro `base` (e.g. /Morgen/ on GitHub Pages). */
export function withBase(path: string): string {
  if (!path || path.startsWith("http")) return path;

  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") {
    return path.startsWith("/") ? path : `/${path}`;
  }

  const baseWithSlash = base.endsWith("/") ? base : `${base}/`;
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${baseWithSlash}${normalized}`;
}
