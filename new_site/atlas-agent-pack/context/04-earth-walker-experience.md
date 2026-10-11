# 04 — Earth Walker Experience

## Concept
A large minimalist Earth curves across the bottom of the viewport. A small monoline traveler walks on its surface. As the visitor scrolls, the planet slowly rotates and the traveler keeps walking, so the page feels like a **journey from where the student is to funded study in Canada**. Sections appear as stops; small pins on the Earth mark journey milestones.

Keep it **simple, light, and optional**. Content is always real HTML on top.

## Visual spec
- **Earth:** circular SVG, diameter ≈ 120vw, positioned so only the top arc is visible (`--horizon-offset`). Fill `--earth-fill`; continent outlines `--earth-outline` at ~1.5px/60% opacity (simplified, original shapes); soft atmosphere rim using `--earth-rim` + blur glow.
- **Space:** Deep Ocean background, 40–80 tiny stars (SVG or CSS), very low contrast.
- **Traveler:** original monoline illustration (inspired by clean illustration-template style, not copied): Mist White strokes, Deep Ocean fill, one Turquoise accent (backpack/scarf). Small relative to Earth (≈ 8–12vh tall). Poses: walk cycle (6–8 frames), idle/standing, reading a map, waving, with laptop (story/mentorship sections).
- **Pins:** small Sea Glass dots with labels for timeline milestones and the final **Canada** marker (maple-leaf glyph optional).
- **Brackets/prompts:** thin corner-bracket "Scroll" / "Book a call" affordances (reference A nod); keep minimal.
- **Inner pages:** a compact "horizon strip" header (short Earth arc + tiny walker) for brand continuity at near-zero cost.

## Motion model
- Scroll progress `p ∈ [0,1]` for the home journey sets: Earth rotation (`rotate(p * N deg)` around its center), walker frame advance (walk cycle plays while scrolling, idles when stopped), subtle star parallax, active pin highlight.
- Use CSS scroll-driven animations (`animation-timeline: scroll()` / `view()`) where supported; otherwise a single passive scroll listener with `requestAnimationFrame` and `IntersectionObserver` for section stops. No scroll-jacking: native scrolling only.
- Walk animation: SVG `<use>` frame swapping, CSS sprite steps, or a small Lottie JSON. Prefer the lightest option that looks smooth (≤ 60 KB total).
- Optional hero micro-interaction: pointer-move subtle tilt of the Earth (≤ 2deg), disabled on touch and reduced motion.
- Optional "Click to open" style interaction (reference A): disclosure that reveals a short bio panel; must be a real button, keyboard accessible, and not required to read the content.

## Layout rules
- Text lives **above** the Earth in normal flow; the Earth is a fixed/sticky background layer (`position: fixed; inset: 0; z-index: var(--z-orbit-scene); pointer-events: none`).
- Never place body text directly over bright parts of the scene without a verified-contrast panel.
- Mobile: Earth arc smaller/cropped, fewer stars, smaller walker, same journey logic; hero headline + CTA visible without scrolling; scene never blocks scrolling or taps (`pointer-events: none`).
- Desktop: Earth wider, walker slightly larger, optional side social icons (reference A) as plain links.

## Accessibility and fallbacks
- Scene container `aria-hidden="true"`; every fact in the scene (milestones, steps, Canada destination) also exists as visible HTML text.
- `prefers-reduced-motion: reduce`: no rotation, no walk cycle; walker shown in a static idle pose; sections behave as a normal page.
- No JS / failed load: static SVG (Earth + standing walker) rendered by CSS only.
- Pause animations when the tab is hidden; avoid layout shift (reserve scene space).
- Never use flashing or fast motion.

## Performance
- Pure SVG/CSS + small TS; total scene payload target ≤ 100 KB gzipped (SVGs optimized with SVGO).
- Only on Home (full) and as a tiny static strip on inner pages. No animation libraries unless justified in `DECISIONS.md`.
- 60 fps on mid-range phones; animate only `transform`/`opacity`.
