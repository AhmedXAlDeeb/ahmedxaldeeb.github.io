# 02 — Design System: Minimal Glass Lagoon (v2)

**Direction:** minimalist, calm, editorial. Merge of two references (mood only, do not copy):
- Reference A — a space/Earth scene with a small astronaut on the planet's curved horizon, section-by-section storytelling, side social icons, outlined frames and corner brackets.
- Reference B — a clean illustration-based portfolio: bold monoline character, big readable type, tidy skill grid, clear "Hello, I'm …" intro, simple timeline cards.

**Result:** dark Earth-from-space atmosphere (A) + clean monoline illustration, generous whitespace, and tidy cards (B). Keep the five Glass Lagoon colors; they suit an Earth-at-night look (ocean = Earth, turquoise = atmosphere glow).

## Palette (black & white theme — replaced Glass Lagoon per theme pass)
| Name | Hex | v2 role |
|---|---|---|
| Ink | `#0A0A0A` | Space / page background |
| Charcoal | `#161616` | Cards, panels, elevated surfaces |
| Graphite | `#2B2B2B` | Strong borders, disabled fills |
| Ash | `#A3A3A3` | Muted text on dark |
| Paper | `#FFFFFF` | Text, primary buttons, links, scene lines |
| Mist | `#F2F2F2` | Light surfaces in inverted sections |
| Slate | `#525252` | Muted text on light sections |

## Minimalist rules
- One idea per section; max ~2 type sizes per section; lots of empty space.
- Illustration is **monoline, two-tone** (Paper strokes + Ink fills) with **one solid white-filled shape** as the single focal detail (e.g. backpack patch, laptop screen). No gradients on the character.
- Earth is a large circle cropped at the bottom of the viewport: Ink fill, thin white outline, simplified white continent outlines at ~60% opacity, soft white atmosphere rim. No textures, no photorealism.
- Stars: sparse white dots at 20–60% opacity; never animated flashing (slow twinkle optional, off with reduced motion).
- Frames/brackets: thin white corner brackets may mark the "click/scroll" prompts, used sparingly.
- Cards: simple Charcoal rectangles with thin borders, not heavy glass stacks. Blur only where text contrast is verified.
- Primary buttons: Paper with Ink text (inverted on light sections). Secondary: outlined.
- Never rely on color alone; visible focus; clear hover/active/disabled states; glow never reduces readability.
- Type: Inter (self-hosted). Large clean headings, comfortable body (`--reading-width`). Optional single display accent for the hero eyebrow only.

## Contrast pairs (verify; target WCAG AA)
| Use | Foreground | Background |
|---|---|---|
| Body text | `#F0FAF8` | `#071B26` |
| Text on cards | `#F0FAF8` | `#103B46` |
| Primary button | `#071B26` | `#36D6C5` |
| Links | `#36D6C5` | `#071B26` |
| Muted text | `#A8C7C9` | `#071B26` / `#103B46` (verify) |
| Text over the Earth scene | `#F0FAF8` | rendered background (must be verified; put copy above the Earth or on a `--color-bg-glass-strong` panel) |

## v2 additional tokens (add to `tokens.css`)
```css
:root {
  --earth-fill: var(--color-lagoon-depth);
  --earth-outline: var(--color-sea-glass);
  --earth-rim: var(--color-lagoon-turquoise);
  --earth-rim-glow: rgb(54 214 197 / 35%);
  --star-color: var(--color-mist-white);
  --character-stroke: var(--color-mist-white);
  --character-fill: var(--color-deep-ocean);
  --character-accent: var(--color-lagoon-turquoise);
  --earth-size: clamp(90vw, 120vw, 160rem);   /* diameter; cropped by viewport bottom */
  --horizon-offset: 28vh;                      /* how much of Earth shows */
  --scene-parallax: 0;                          /* 0–1, set by scroll script */
}
```

## Tokens — single source of truth
> Superseded by the black & white theme pass: the implemented `src/styles/tokens.css` (Ink/Charcoal/Graphite/Ash/Paper/Mist/Slate + `.section--invert`) is authoritative. The block below is kept for history.

```css
:root {
  /* core palette */
  --color-deep-ocean: #071B26;
  --color-lagoon-depth: #103B46;
  --color-lagoon-turquoise: #36D6C5;
  --color-sea-glass: #B6F5E9;
  --color-mist-white: #F0FAF8;

  /* semantic backgrounds */
  --color-bg: var(--color-deep-ocean);
  --color-bg-elevated: var(--color-lagoon-depth);
  --color-bg-muted: #0B2934;
  --color-bg-glass: rgb(16 59 70 / 62%);
  --color-bg-glass-strong: rgb(7 27 38 / 88%);

  /* text */
  --color-text: var(--color-mist-white);
  --color-text-secondary: var(--color-sea-glass);
  --color-text-muted: #A8C7C9;
  --color-text-on-accent: var(--color-deep-ocean);

  /* accents / interaction */
  --color-accent: var(--color-lagoon-turquoise);
  --color-accent-soft: var(--color-sea-glass);
  --color-accent-hover: var(--color-sea-glass);
  --color-focus: var(--color-lagoon-turquoise);
  --color-link: var(--color-lagoon-turquoise);
  --color-link-hover: var(--color-sea-glass);

  /* borders / depth */
  --color-border: rgb(182 245 233 / 18%);
  --color-border-strong: rgb(182 245 233 / 38%);
  --color-divider: rgb(182 245 233 / 14%);
  --color-shadow: rgb(0 0 0 / 28%);
  --color-glow: rgb(54 214 197 / 18%);

  /* typography */
  --font-body: Inter, "Segoe UI", sans-serif;
  --font-heading: Inter, "Segoe UI", sans-serif;
  --font-mono: "SFMono-Regular", Consolas, monospace;
  --text-xs: 0.75rem;  --text-sm: 0.875rem; --text-base: 1rem;
  --text-lg: 1.125rem; --text-xl: 1.375rem;
  --text-2xl: clamp(1.75rem, 4vw, 2.75rem);
  --text-hero: clamp(2.75rem, 7vw, 6rem);
  --line-height-body: 1.7;
  --line-height-heading: 1.08;
  --content-width: 72rem;
  --reading-width: 70ch;

  /* spacing */
  --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem; --space-4: 1rem;
  --space-6: 1.5rem;  --space-8: 2rem;   --space-12: 3rem;   --space-16: 4rem; --space-24: 6rem;

  /* shape */
  --radius-sm: 0.5rem; --radius-md: 0.875rem; --radius-lg: 1.25rem;
  --radius-xl: 1.75rem; --radius-pill: 999px;

  /* glass */
  --glass-blur: 18px;
  --glass-border: 1px solid var(--color-border);
  --glass-shadow: 0 16px 48px var(--color-shadow), inset 0 1px 0 rgb(240 250 248 / 7%);

  /* motion */
  --motion-fast: 160ms; --motion-standard: 280ms; --motion-slow: 650ms;
  --ease-standard: cubic-bezier(0.2, 0.7, 0.2, 1);

  /* layout */
  --header-height: 4.75rem;
  --page-gutter: clamp(1.25rem, 5vw, 5rem);
  --z-orbit-scene: 0; --z-content: 1; --z-header: 20; --z-overlay: 40;
}
```

## Base and component styles to implement (`src/styles/global.css`)
- `html`: `color-scheme: dark; scroll-behavior: smooth; background: var(--color-bg)`
- `body`: margin 0, bg/text tokens, body font, `line-height: var(--line-height-body)`
- `::selection`: dark text on Sea Glass
- `a`: link token, `text-underline-offset: 0.2em`; hover uses link-hover
- `:focus-visible`: `outline: 3px solid var(--color-focus); outline-offset: 4px`
- `.button-primary`: pill, min-height 2.75rem, turquoise bg, dark text, weight 650, hover → Sea Glass + `translateY(-1px)`
- `.button-secondary`: pill, transparent, strong border, hover → turquoise border + glass bg
- `.glass-panel`: glass border, radius-lg, glass bg, glass shadow, `backdrop-filter: blur(var(--glass-blur))` (+ `-webkit-` prefix)
- `.lagoon-glow`: `box-shadow: 0 0 48px var(--color-glow)` (decorative only)
- `.hero`: `position: relative; isolation: isolate; overflow: clip;` radial gradient `ellipse at 72% 42%, rgb(16 59 70 / 55%), transparent 55%` over bg
- `.hero__scene`: absolute, inset 0, `z-index: var(--z-orbit-scene)`, `pointer-events: none`
- `.hero__content`: relative, `z-index: var(--z-content)`, max-width 44rem
- `@media (max-width: 48rem)`: `--header-height: 4rem; --glass-blur: 12px; .hero__scene { opacity: .65 }`
- `@media (prefers-reduced-motion: reduce)`: disable smooth scroll; clamp animation/transition durations to ~0.01ms

## Typography
Inter, self-hosted (`@fontsource/inter` or woff2 in `public/fonts`; no runtime Google Fonts request). Mono for code. Comfortable line length (`--reading-width`), generous paragraph spacing.
