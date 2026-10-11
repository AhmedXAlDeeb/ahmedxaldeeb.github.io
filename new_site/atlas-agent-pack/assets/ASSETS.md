# Assets Needed (v2)

**Owner:** `Ahmed` (must supply) · `Agent` (can create/code) · `Either`. **Priority:** P0 launch-critical · P1 strongly recommended · P2 nice to have.

## A. Personal and story content (Ahmed)
| # | Asset | Spec | Owner | P |
|---|---|---|---|---|
| A1 | GitHub username + repo name / custom domain | text | Ahmed | P0 |
| A2 | Professional email | text | Ahmed | P0 |
| A3 | Profile links (GitHub, LinkedIn, Scholar, ORCID, etc.) | URLs | Ahmed | P0 |
| A4 | **His real story**: answers to the prompts in `context/06` | text | Ahmed | P0 |
| A5 | Timeline: education, research, work, awards, offers/funding received (dates, verifiable links) | list | Ahmed | P0 |
| A6 | Short bio (50 and 150 words) + one-line headline | text | Ahmed | P0 |
| A7 | Portrait photo (optional, simple background) | JPG/PNG ≥ 1200px | Ahmed | P1 |
| A8 | CV | PDF | Ahmed | P0 |
| A9 | Proof: mentee results/testimonials **with written permission**, offer letters redacted as needed | text/images | Ahmed | P1 |
| A10 | 2–4 projects for the supporting Work section (problem, role, stack, outcome, links) | text | Ahmed | P1 |

## B. Mentorship business assets
| # | Asset | Spec | Owner | P |
|---|---|---|---|---|
| B1 | Final tier names, prices, inclusions | text | Ahmed | P0 |
| B2 | Booking link for free 20-min intro call (Cal.com/Calendly/etc.) | URL/embed | Ahmed | P0 |
| B3 | Payment link/checkout (processor that can pay out to his country; verify) | URL | Ahmed | P0 |
| B4 | Written scope + policies: cancellation, missed sessions, refunds, response times | text | Ahmed (agent drafts) | P0 |
| B5 | Intake questionnaire for new mentees (hosted form link) | URL | Ahmed/Agent drafts | P1 |
| B6 | Templates to showcase (plan template, tracker, SOP outline, cold-email structure) | PDF/Notion/MD | Ahmed/Agent drafts | P1 |
| B7 | Privacy/terms notes for booking and payment tools | text | Agent drafts, Ahmed reviews | P1 |
| B8 | Official source list: IRCC, target universities, IELTS provider, funding bodies (e.g. NSERC/Vanier/provincial programs: verify current names) | URLs + last-verified dates | Ahmed/Agent | P0 |

## C. Illustration and scene (original artwork only)
| # | Asset | Spec | Owner | P |
|---|---|---|---|---|
| C1 | **Traveler character**: monoline, two-tone (Mist White/Deep Ocean) + one Turquoise accent; backpack to suggest journey; optionally resembles Ahmed (hair/glasses) | SVG | Agent (Ahmed approves) | P0 |
| C2 | Walk cycle (6–8 frames) + idle pose | SVG frames/sprite or Lottie JSON ≤ 60 KB | Agent | P0 |
| C3 | Extra poses: reading a map, waving, with laptop, looking lost (404) | SVG | Agent | P1 |
| C4 | Earth SVG: circle, simplified original continent outlines, atmosphere rim | SVG | Agent | P0 |
| C5 | Journey pins and Canada marker (maple-leaf glyph optional) | SVG | Agent | P0 |
| C6 | Star field (SVG/CSS) | SVG/CSS | Agent | P1 |
| C7 | Bracket/corner-frame decorations for CTAs | SVG/CSS | Agent | P1 |
| C8 | Static fallback hero (Earth + standing traveler), desktop + mobile crops | SVG + WebP | Agent | P0 |
| C9 | Section spot illustrations (6 path stages: test, supervisor email, application, documents, visa, arrival) | SVG, consistent monoline | Agent | P1 |
| C10 | Horizon strip for inner pages | SVG | Agent | P0 |

> Reference screenshots (galaxy portfolio with astronaut; black-and-white illustration portfolio) are **mood boards only**. Do not trace, copy, or reuse their artwork or layouts verbatim; they appear to be third-party templates with their own licenses.

## D. Brand
| # | Asset | Spec | Owner | P |
|---|---|---|---|---|
| D1 | Wordmark "The Digital Atlas" + monogram | SVG | Agent | P0 |
| D2 | Favicon set + manifest, `theme-color #071B26` | SVG/ICO/PNG | Agent | P0 |
| D3 | Default OG image (Earth + walker) 1200×630 | PNG | Agent | P0 |
| D4 | Per-article/session OG template | build-time | Agent | P1 |
| D5 | Fonts: Inter (self-hosted woff2) + mono | woff2 | Agent | P0 |

## E. UI
| # | Asset | Spec | Owner | P |
|---|---|---|---|---|
| E1 | Icon set: nav, social, arrow, external, calendar, clock, check, warning, info, search, copy, tag, play | inline SVG, `currentColor` | Agent | P0 |
| E2 | Tier/pricing card visuals | CSS/SVG | Agent | P1 |
| E3 | Timeline markers, callout icons (official / experience / advice) | SVG | Agent | P1 |
| E4 | Session thumbnails template | SVG/PNG | Agent | P1 |

## F. Learn content
| # | Asset | Spec | Owner | P |
|---|---|---|---|---|
| F1 | 3 launch pieces (e.g. IELTS plan, how to find a supervisor, SOP structure) | Markdown | Ahmed (agent edits) | P1 |
| F2 | First session: topic, date/time with timezone, registration link or video | text/URL | Ahmed | P1 |
| F3 | Diagrams (path timeline, application calendar, email structure) | SVG | Agent | P1 |
| F4 | `lastVerified` date + official sources for each factual guide | frontmatter | Ahmed/Agent | P0 |
| F5 | Checklists: documents, study permit, application tracker | Markdown/component | Agent drafts | P1 |

## G. Technical
| # | Asset | Owner | P |
|---|---|---|---|
| G1 | `robots.txt`, sitemap, RSS | Agent | P0 |
| G2 | `CNAME` (custom domain only) | Ahmed/Agent | P2 |
| G3 | Custom 404 with walker | Agent | P0 |
| G4 | README + `docs/authoring.md` | Agent | P0 |
| G5 | `PLACEHOLDERS.md` kept current | Agent | P0 |

## Licensing notes
- Use original artwork or openly licensed assets; record sources in `docs/credits.md`.
- No university or organization logos without permission.
- Mentee names/photos/quotes only with written consent.
- Optimize: SVGO for SVGs, WebP/AVIF for rasters; scene ≤ ~100 KB gz.
