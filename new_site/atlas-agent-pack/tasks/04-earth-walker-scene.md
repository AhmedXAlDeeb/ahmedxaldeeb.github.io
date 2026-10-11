# Phase 4 — Earth Walker Scene

Follow `context/04-earth-walker-experience.md`.

- [ ] `EarthScene.astro`: fixed background layer, Earth SVG, stars, atmosphere rim, pins
- [ ] `Walker` component: original monoline SVG character with idle + walk cycle (and optional poses)
- [ ] Scroll progress driver: CSS scroll-driven animations with rAF fallback; Earth rotation, walker walk/idle, pin highlights tied to home sections
- [ ] Pins generated from the Story timeline + Canada destination marker; labels exist as real HTML text too
- [ ] Optional pointer tilt (desktop only) and optional "click to open" bio disclosure (real button)
- [ ] `HorizonStrip` for inner pages (static, tiny)
- [ ] Reduced motion: static idle walker, no rotation; no-JS static fallback
- [ ] Mobile layout: smaller arc/walker, hero text + CTA visible without scroll; scene never blocks taps/scroll
- [ ] Verify contrast of any text near the scene; use panels if needed
- [ ] Performance: SVGs optimized, scene ≤ ~100 KB gz, only transform/opacity animated, pause when tab hidden
- [ ] Test: 360px, throttled CPU, reduced motion, JS disabled, keyboard-only

**Done when:** the journey feels smooth and minimal, content is always readable, fallbacks work.
