# Phase 1 — Setup and Deploy

- [ ] Scaffold Astro (TypeScript strict); commit `package-lock.json`
- [ ] Add `@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/rss`, `@fontsource/inter`, `remark-math`, `rehype-katex` (no Three.js)
- [ ] `astro.config.mjs` with correct `site` and `base`; base-aware `url()` helper
- [ ] Folder structure per `context/05` (content collections: `work`, `articles`, `guides`, `sessions`)
- [ ] `.gitignore`, `PLACEHOLDERS.md`, `DECISIONS.md`, minimal `README.md`
- [ ] `.github/workflows/deploy.yml` (`npm ci`, build, Pages deploy); Settings → Pages → GitHub Actions
- [ ] `robots.txt`, sitemap
- [ ] Verify live: hello page, nested route, static asset

**Done when:** live URL works with correct base paths.
