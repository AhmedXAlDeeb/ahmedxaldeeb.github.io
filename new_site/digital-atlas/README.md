# The Digital Atlas v2 — Earth Walker

Astro + TypeScript static site (no Three.js). Source: `new_site/digital-atlas/`.

## Local dev

```sh
cd new_site/digital-atlas
npm ci
npm run dev
```

## Build

```sh
npm run build
```

## Authoring

See `docs/authoring.md`. One Markdown file under `src/content/work|articles|guides|sessions/` adds a page to lists, sitemap, RSS, and search.

## Contact form

`src/data/site.ts` → `contactFormEndpoint`. Paste a Formspree/Web3Forms endpoint for direct-to-inbox delivery. While empty, the form composes a mailto email instead — never silently fails.

## Deployment

`.github/workflows/deploy.yml` builds `new_site/digital-atlas` → Pages. Settings → Pages → Source = GitHub Actions. User site, `base: '/'`.

## Editing offer/prices

`src/data/mentorship.ts` (tiers, policies, FAQs, stages). Tokens: `src/styles/tokens.css` only.
