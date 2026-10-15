# Decisions

## Theme: black & white (Ink/Charcoal/Graphite/Ash/Paper/Mist/Slate)
- Switched palette from Glass Lagoon to black & white (Ink/Charcoal/Graphite/Ash/Paper/Mist/Slate); no accent hue; inverted sections via `.section--invert`.
- Semantic token names kept, so no component needed logic edits; old core names (`--color-deep-ocean`, `--color-lagoon-*`, etc.) removed. `.lagoon-glow` (unused) deleted.
- Inverted rhythm applied to: Story timeline, Mentorship tiers + FAQ, article/guide/session reading blocks. Work case studies and hub pages stay dark.
- Pins: SVG text labels omitted (decorative layer is aria-hidden; step names live as HTML headings); active pin instead scales 1.45× plus full opacity — state by size, not color alone. Noted as deviation from the task's "plus label" wording.
- Shiki theme `github-dark` → `min-dark` (monochrome). Portrait gets `filter: grayscale(1)`; evidence images untouched.
- Project-wide old-color search: zero matches in `src`/`public` (only git history retains them).
- Measured contrast ratios (relative-luminance calc):
  - Paper #FFFFFF on Ink #0A0A0A: 19.80:1 ✓ (body, links, focus, primary button)
  - Ash #A3A3A3 on Ink: 7.85:1 ✓; on Charcoal #161616: 7.17:1 ✓ (muted)
  - Secondary #D4D4D4 on Ink: 13.36:1 ✓
  - Ink on Paper: 19.80:1 ✓ (inverted body, inverted primary button)
  - Slate #525252 on Paper: 7.81:1 ✓; on Mist #F2F2F2: 6.98:1 ✓ (inverted muted)
  - Secondary #2B2B2B on Paper: 14.16:1 ✓
  - Strong border (white 45%) on Ink ≈ 4.18:1 ✓ (3:1 UI: inputs, focus-adjacent). Default card border (white 18%) is decorative only; hover/key controls use strong.
- Contact form select/checkbox controls inherit the monochrome tokens; status messages use ✓/✕ + border style, never color alone.

## Arabic version (ar/)
- URL scheme: English at `/…`, Arabic mirrors at `/ar/…` (`lang`/`dir` on `<html>`, `dir="rtl"`). Astro `i18n` config declared (default `en`, locales `en+ar`, no prefix for default).
- Content split by path: `content/<type>/en/*.md` + `content/<type>/ar/*.md` with the **same slug**; `langOf()`/`live(lang)` helpers scope every query. No content duplication in code.
- Translated now: full UI chrome (nav, header, footer, form, badges), home, story, mentorship (stages/tiers/policies/FAQs), Learn hub + filters, contact, 3 articles + 2 guides with Arabic MSc-abroad keyword taxonomy. Sessions: none in Arabic yet (honest empty state).
- Workaround scope: case-study bodies stay English; AR cards use `titleAr`/`summaryAr` and link to EN pages with a printed note. No machine-translated prose anywhere.
- RTL: physical CSS converted to logical properties; Earth walker drift mirrors via `[dir="rtl"]`; Arabic font self-hosted (`Noto Sans Arabic` in the font stack).
- Header language switcher links the true mirror when it exists (build-time slug set) and falls back to `/ar/` or `/ar/work/` etc. — verified zero dead `/ar/…` links in output.
- `npm install @fontsource/noto-sans-arabic` briefly downgraded `@astrojs/markdown-remark` 7→6 (npm peer resolution) and broke the build; pinned `@astrojs/markdown-remark@^7.3.0` to fix. `package-lock.json` now records the good tree.
- Scope prune: deleted off-topic technical articles (neuroimaging, diffusion); demo article/session set to `draft: true` (kept as unpublished authoring examples); EN/AR keyword taxonomy limited to MSc-abroad terms.
- Article typography: new `.prose` system (start-aligned, paragraph/heading rhythm, list grid, blockquote accent bar, centered figures + captions, bordered tables with x-scroll, KaTeX display x-scroll, word-break) — fixes the reported alignment/spacing issues in both directions.
- Authoring: `docs/article-template.md` is the copy-paste skeleton (frontmatter + section structure + figures/code/math/tables + guides/sessions extras); bilingual mirror rule documented in `docs/authoring.md`.

## Work removal + walker arc + layering + content mirror (this round)
- Removed the entire Work section: `src/content/work/`, `/work/` index + case-study pages, `/ar/work/`, nav entries (EN+AR), home showcase sections, mentorship proof links (now story-only), `ProjectCard.astro`, and the `work` content collection. Proof of credibility now rests on the story timeline + open profiles.
- Walker rides the circle: feet anchored via `translate(-50%,-100%)` at JS-computed arc points (circle center/radius derived from the wrap box, feet clamped above the fold, subtle tangent lean, RTL mirrored). Bonus fix: journey pins were previously computed off the visible cap (invisible below the fold) — frontmatter now seeds them on the cap and JS refines them; active-pin scale uses the independent `scale` property so it no longer wipes the `translate` attribute.
- Layering: `.site-header, main, .site-footer` all sit at `var(--z-content)` above the fixed scene — footer and headers consistently in front, scene strictly background.
- `SITE-CONTENT.md`: central mirror of every page's copy (EN+AR); page components remain the live source. `TODOS.md`: all `TODO(ahmed)` items grouped by launch-blocker/story/articles/guides/sessions/nice-to-have; `PLACEHOLDERS.md` points at it.

## v2 copy applied from SITE-CONTENT.md (user-written)
- Offer model replaced: three tiers + 3-month minimum deleted; `mentorship.ts` now has `seatsPerMonth: 10`, `seatsAvailable: null` (hidden until set — never a fake countdown), monthly billing, 1-month minimum, and `pricing` (600 EGP Egypt / $50 international). No payment link anywhere; payment details go out after the intro call.
- Seats badge (`10 seats a month`) on home hero, mentorship hero (+ conditional available-count), contact page, and mobile menu; pricing duplicated in a new contact "Pricing & payment" box.
- New "Why one to one?" section (5 reason cards + closer) on mentorship with `#why-one-to-one` anchor; one-line teaser links from both home pages.
- New stage descriptions, weekly/how-it-works wording, mentor bio (AI engineer, graduate), 11 FAQs, honest-expectations addition, proof rewrite ("no wall of testimonials yet"), pricing/policies rewrite (refund = TODO confirm).
- Story rewritten: graduate + AI engineer framing, turning-point/process narrative, offers-before-graduation claim, friends-mentoring origin, promise section; timeline now 7 entries with TODO(ahmed) graduate year, company/role, offer number/places.
- Learn experience blocks filled from §5 (brackets + TODO markers kept so specifics stay visible); demo article deleted.
- `TierCard.astro` deleted (unused after pricing rework). Contact form topic list gains "Mentorship intro call" first option (both languages).

## Article packs + structured authoring (user request)
- Imported `new_site/ielts-articles/` (2 articles × EN/AR) unchanged into `src/content/articles/`; extended the articles schema to accept the pack shape natively: `summary|description` (either required, build errors clearly otherwise), quoted or unquoted YAML dates (normalized to YYYY-MM-DD), optional `lang/translationKey/translationStatus/series/seriesOrder/sources[{title,url}]`.
- Article templates (EN+AR) now render series prev/next nav ("Part N of M", per language, ordered by `seriesOrder`) and a Sources list when present.
- `npm run new:article` scaffolder (`scripts/new-article.mjs`) generates canonical stubs (`draft:true`, validated slug/date/tags, series wiring); `docs/article-template.md` + `docs/authoring.md` document the shape, series/translation conventions, and keyword taxonomy (extended with `english-test/listening/reading/writing/speaking`).
- Agent skill `opportunity-post` (`.opencode/skills/opportunity-post/SKILL.md` + `intake-template.md`): turn filled intake YAML into validated EN+AR posting files with build verification; `docs/authoring.md` points authors at it. Rule change per user: funding is recommended, not blocking — genuinely unstated funding ships with an explicit ask-the-supervisor line, never an invented figure.
- Opportunities section modeled on Learn: `opportunities` collection (org/location/funding/deadline-or-rolling/posted/applyUrl/open-closed/tags/lastVerified/sources), EN+AR hub (`/opportunities/`) with search + topic chips + All/Open/Closed filter, detail pages with status/funding/deadline/verified badges, expired + stale auto-banners, external apply CTA, EN+AR nav entries, Learn↔Opportunities cross-links. Ships with draft stubs only and an honest empty state — first real posting still needed.

## Mentorship redesign (this page only)
- Rebuilt `/mentorship/` + `/ar/mentorship/` into 9 sections (D/L rhythm) from the new data model; facts/prices/seats/honesty unchanged in meaning. Removed/merged per diagnosis: standalone Promise + Proof + Each-week sections, 6 duplicate FAQs, repeated included-list, per-card included bullets, payment button.
- Repetition (rendered EN): seats 2 (strip+policies), 90-min 2, 48h 2, line-by-line 2 (Stage 5 + table; Will list stays generic), guarantee/ghost-writing/legal-advice 1 (Will/Won't; visa FAQ trimmed to "guidance only"), CTA buttons 3 + header + mobile-only sticky bar, month-to-month/no-contract 3 (strip fact + pricing title + pricing note — title is spec-verbatim, flagged).
- Body copy: EN 738 rendered words vs 700 target — all copy is spec-verbatim (hero lede, pains, roadmap, table, timeline/loop, pricing, mentor, FAQ, CTA), so the gap needs Ahmed's cut approval; AR 630. Max real paragraph 23 words; card texts ≤16.
- New components: `Icon`, `Roadmap` (ordered list, walker/Canada markers, draw-in disabled under reduced motion), `CompareTable` (real table → stacked cards ≤40rem); `Faq` +`id`, `CtaBand` +`invert` props. Sticky mobile CTA (IO-gated, safe-area aware, hidden at final CTA/footer, desktop-off). Roadmap/pain anchors `#stage-*`; AR mirrors direction with logical properties (`:global([dir=rtl])` for the loop arrow; check/cross/maple never mirrored; prices LTR-isolated by markup order).
- Out of scope, noticed only: footer nav lists Mentorship twice (pre-existing) — untouched.

## TODO visibility (user request)
- No `TODO(ahmed)` renders anywhere on the site (verified: zero matches in rendered output).
- Story timeline uses final neutral text (no years/companies claimed); refund policy reads "Details shared on the intro call"; timezone FAQ ends cleanly; contact/learn/session templates use plain "coming soon" wording without markers.
- Remaining content TODOs live as invisible `<!-- TODO(ahmed) -->` HTML comments in article/guide sources (view-source only) and as code comments in `site.ts`/`mentorship.ts`; drafts keep theirs (never built). All tracked in `TODOS.md` + `PLACEHOLDERS.md`.

## v2 rebuild (this session)
- Previous v1 (glass globe + Three.js) was uncommitted staging and is gone from disk; rebuilt fresh as **v2 Earth Walker** per the updated pack — no migration needed.
- User site (`AhmedXAlDeeb.github.io`): `site: https://ahmedxaldeeb.github.io`, `base: '/'`. Deploy workflow at repo-root `.github/workflows/deploy.yml` (survived) still points at `new_site/digital-atlas`.
- Old-site content reused 1:1 where real: 6 work projects (lean per spec; dropped LucidumLab/Spectrum/DeepSee from v1 set — all real, can re-add), experience timeline, education, awards, 2 technical articles. Nothing invented.
- **Story page**: only verified facts (Cairo Univ, Nile, internships, awards) + explicit `TODO(ahmed)` for origin/turning-point/journey specifics. No claim of Canadian study.
- **Mentorship copy**: pack draft copy used verbatim; `[ ]` facts → `TODO(ahmed)`. Proof section shows "first cohort" (no testimonials invented). Pricing from pack table, flagged for confirmation.
- **Contact form**: user explicitly requested an inline form that emails him. No backend exists on static Pages, and pack forbids forms without a configured endpoint. Implemented endpoint-or-mailto: POSTs JSON to `contactFormEndpoint` when set (Formspree/Web3Forms), else composes a mailto with the form contents. Visible success/error states in both paths; explanatory note shown while unconfigured. Endpoint logged in PLACEHOLDERS.
- Earth scene: pure SVG + one rAF scroll listener + CSS animations (no Lottie lib — justified: keeps scene < 100 KB and dependency-free). Walker is original monoline art.
- Contrast: muted `#A8C7C9` on `#071B26` ≈ 7.2:1, on `#103B46` ≈ 4.9:1 (AA). Text over scene lives in normal flow above the fixed layer; hero copy has text-shadow-free solid bg behind (scene is decorative, content z-index above).
- Sessions: collection + 1 draft stub; index shows honest empty state. Guides keep lastVerified/stale machinery.
- Design-system page kept dev-only with noindex (also in sitemap — accepted per "exclude or noindex").
