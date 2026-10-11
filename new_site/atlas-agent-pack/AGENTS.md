# AGENTS.md — The Digital Atlas (v2: Earth Walker)

You are building **The Digital Atlas**, the personal site of **Ahmed Soliman**: his story and background, a paid **personal mentorship** that helps CS and Engineering students win **fully funded MSc/PhD positions in Canada** (other countries later), plus articles and sessions on the same topics. Static site on GitHub Pages.

**v2 change:** the old glass-globe/orbital-objects concept is replaced by a minimalist **Earth-horizon scene with an illustrated figure walking on its surface**. The story and the mentorship offer are now the primary focus; the project portfolio is supporting evidence.

## Read order
1. `context/01-project-overview.md` — goals, audience, priorities
2. `context/02-design-system.md` — palette, tokens, minimalist rules
3. `context/03-site-structure-and-content.md` — pages and sections
4. `context/04-earth-walker-experience.md` — the signature scene, scroll behavior, fallbacks
5. `context/05-tech-and-deployment.md` — stack, GitHub Pages, quality bar
6. `context/06-mentorship-offer-and-copy.md` — offer, pricing, persuasive copy rules and drafts
7. `tasks/00-README.md` — ordered phases
8. `assets/ASSETS.md` — everything needed

## Non-negotiable rules
- **Stack:** Astro + TypeScript + Markdown/MDX + CSS custom properties + GitHub Actions. The Earth scene is lightweight SVG/CSS (+ small TS). **No Three.js** unless Ahmed asks.
- **Static-first:** all content is real HTML. The scene is an enhancement; the site works without JS/animation.
- **Minimalist:** generous whitespace, one idea per section, restrained color (palette only), no clutter, no decorative effects without purpose.
- **Palette:** Black & white only (Ink/Charcoal/Graphite/Ash/Paper/Mist/Slate, see `context/02`). No accent hue, no purple/cobalt galaxy colors from the reference screenshots.
- **References are mood only.** The two reference images (a galaxy portfolio template with an astronaut on a planet; a black/white illustration portfolio template) must **not** be copied or traced. Create original artwork.
- **Honesty (critical for the paid offer):** never guarantee admission, funding, or visas; never invent testimonials, statistics, acceptances, or credentials; never present immigration/funding/IELTS rules as current without an official source link and a "last verified" date. Use `TODO(ahmed)` placeholders and log them in `PLACEHOLDERS.md`.
- **Accessibility:** WCAG 2.2 AA, `prefers-reduced-motion`, visible focus, no information only in the illustration.
- **No contact form** without a configured third-party endpoint. Booking and payment go through external hosted links.
- No secrets in the repo; no hotlinked images.

## Working style
- One task file at a time; tick boxes; `npm run build` and commit after each phase.
- Ambiguity: choose the simplest option, log it in `DECISIONS.md`, continue.
- Ask Ahmed only for what cannot be guessed (real story, links, booking/payment links, proof).
