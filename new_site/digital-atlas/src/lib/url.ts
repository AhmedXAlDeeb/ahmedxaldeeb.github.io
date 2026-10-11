/** Base-aware URL helper. Respects astro base in production builds. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (!cleanBase || cleanBase === '/') return cleanPath;
  return `${cleanBase}${cleanPath}`;
}

/** Slug helper for content-layer entries (glob loader). */
export function slugOf(entry: { slug?: string; id: string }): string {
  return entry.slug ?? String(entry.id).replace(/\.mdx?$/, '').split('/').pop() ?? '';
}

/** Language from content path: `articles/en/foo.md` -> 'en'. Defaults to 'en'. */
export function langOf(entry: { id: string }): 'en' | 'ar' {
  const first = String(entry.id).replace(/\.mdx?$/, '').split('/')[0];
  return first === 'ar' ? 'ar' : 'en';
}

/** Predicate: published (not draft) entries in the given language. */
export function live(lang: 'en' | 'ar' = 'en') {
  return (e: { id: string; data: { draft?: boolean } }) => !e.data.draft && langOf(e) === lang;
}
