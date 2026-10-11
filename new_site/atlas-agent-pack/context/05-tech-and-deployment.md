# 05 — Tech and Deployment

## Stack
- **Astro** (static output, content collections, layouts)
- **TypeScript** (strict)
- **SVG + CSS (scroll-driven animations) + small TypeScript** for the Earth-walker scene (no Three.js; optional Lottie only if justified)
- **Markdown/MDX** with remark/rehype: syntax highlighting (Shiki, built into Astro), KaTeX math (`remark-math` + `rehype-katex`), heading anchors, TOC
- **CSS custom properties** (plain CSS or scoped Astro styles; no Tailwind unless asked)
- **GitHub Actions** → GitHub Pages
- Search: Pagefind (post-build index)
- Integrations: `@astrojs/sitemap`, `@astrojs/mdx`, RSS (`@astrojs/rss`)

## Suggested structure
```
/
├─ AGENTS.md  PLACEHOLDERS.md  DECISIONS.md  README.md
├─ astro.config.mjs  tsconfig.json  package.json  package-lock.json
├─ .github/workflows/deploy.yml
├─ public/        (favicon, og images, fonts, static fallbacks, robots.txt, CV pdf)
└─ src/
   ├─ assets/     (optimized images)
   ├─ components/ (ui/, layout/, scene/  ← EarthScene, Walker, HorizonStrip)
   ├─ content/    (work/, articles/, guides/, sessions/, config.ts)
   ├─ layouts/
   ├─ pages/
   ├─ scripts/
   └─ styles/     (tokens.css, global.css)
```

## GitHub Pages configuration
Ask Ahmed (or read from repo) which applies, and set in `astro.config.mjs`:
- **User site** (`username.github.io`): `site: 'https://username.github.io'`, `base: '/'`
- **Project site** (`username.github.io/repo/`): `site: 'https://username.github.io'`, `base: '/repo'`
- Custom domain: `site` = domain, `base: '/'`, add `public/CNAME`

Rules: every internal link/asset must respect `base` (use a helper like `url('path')` built on `import.meta.env.BASE_URL`). Verify asset and nav URLs in the production build and via direct navigation to deep URLs.

## Deployment checklist
- [ ] `npm run build` succeeds locally
- [ ] Lockfile committed (`npm ci` in CI)
- [ ] `.github/workflows/deploy.yml` using `actions/checkout`, `actions/setup-node`, `withastro/action` (or manual build + `actions/upload-pages-artifact` + `actions/deploy-pages`), permissions `pages: write`, `id-token: write`, `contents: read`
- [ ] Repo Settings → Pages → Source = GitHub Actions
- [ ] Canonical URLs + sitemap + `robots.txt`
- [ ] Custom `404.astro`
- [ ] README: local dev, authoring content, deployment, updating tokens
- [ ] No secrets in repo; `.env*` gitignored

## Quality bar
- WCAG 2.2 AA; semantic landmarks; skip link; descriptive link text; alt text; visible focus; reduced motion; WebGL fallback
- Per-page `<title>`, meta description, canonical, Open Graph/Twitter cards; structured data (`Person`, `Article`) only when accurate
- Lighthouse targets (mobile): Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95, Best Practices ≥ 95
- Optimized images (`astro:assets`), lazy loading below the fold, minimal JS on non-home pages (inner pages get only the static horizon strip)
- Pre-launch tests: responsive layouts, keyboard nav, screen reader pass, link integrity, deep URLs, asset paths, production build, live Pages deploy
