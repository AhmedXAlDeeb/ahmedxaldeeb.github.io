# 03 — Site Structure and Content (v2)

Primary nav (compact): **Story · Mentorship · Learn · Work · Contact**, plus a persistent primary button **Book intro call**.
`Learn` contains Articles, Sessions, and Guides (Resources).

Routes (respect `base`):
`/` · `/story/` · `/mentorship/` · `/learn/` · `/learn/articles/[slug]/` · `/learn/guides/[slug]/` · `/learn/sessions/` · `/learn/sessions/[slug]/` · `/work/` · `/work/[slug]/` · `/contact/` · `/404`

## Home — a scrolling journey (Earth scene, see `context/04`)
Each section is a "stop" on the walk. One idea each; minimal copy.
1. **Arrival (hero):** eyebrow `AHMED SOLIMAN`, headline, one-sentence promise, CTAs (**Book a free intro call**, **Read my story**). Figure stands on the Earth's horizon.
2. **My story, in brief:** 3–5 sentences + a small timeline strip (3–4 milestones) + link to `/story/`. Portrait optional.
3. **The path to a funded MSc/PhD in Canada:** six steps (English test → supervisor → application → documents → visa → landing) shown as stops on the globe.
4. **Mentorship offer:** short persuasive summary, what's included, tiers teaser, CTA.
5. **Learn:** latest 3 articles/guides + next session.
6. **Selected work (supporting proof):** 2–3 project cards.
7. **Final CTA:** book intro call, email.

Headline options (pick one that Ahmed's real story supports; test with him):
- "Your path to a fully funded graduate degree in Canada."
- "I'll help you earn a funded MSc or PhD in Canada."
- "From where you are to a funded degree in Canada — step by step."
Never imply guaranteed outcomes.

## Story (`/story/`) — most important trust page
Brief but human. Structure:
1. **Where I started** (origin, early interests, obstacles)
2. **The turning point** (decision to pursue funded graduate study abroad)
3. **What I did** (English test, supervisor search, applications, funding, visa — real facts only)
4. **Where I am now** (research, work, results)
5. **Why I mentor** (what he wishes he'd known; who he helps)
6. **Credentials and evidence** (timeline: education, research, awards, publications; verifiable links)
7. CTA to mentorship.
Format: short paragraphs, one large illustration of the figure mid-journey, a vertical timeline (reference B style). Keep to ~600–900 words. Prompts for Ahmed are in `context/06`.

## Mentorship (`/mentorship/`) — conversion page
Full spec and draft copy in `context/06`. Sections: promise · who it's for · the path (6 stages) · what you get each week · deliverables · how it works (timeline) · pricing tiers · proof · FAQ · honest expectations · CTA (book free intro call).

## Learn
- **Articles:** tutorials/guides on IELTS prep, finding supervisors, cold emails, SOP/CV/cover letters, funding, visas, life in Canada.
- **Guides (resources):** evergreen, dated, sourced (see conventions).
- **Sessions:** live or recorded workshops/Q&A. Content type `sessions`: `title, date, durationMin, status (upcoming|past), topic[], description, registrationUrl, videoUrl (YouTube/Vimeo embed), slidesUrl, takeaways[]`. Upcoming sessions show date/time with timezone; past sessions show video + notes. Register via external link (no backend).
- Search (Pagefind) + tag filters; related items; RSS; sharing previews.
- Required for facts that change (IELTS requirements, IRCC/visa rules, funding, deadlines): `lastVerified`, `sources[]` (official links), a visible "Last verified" badge, stale banner after 12 months, and labelled sections: **Official requirements** / **My experience** / **General advice**.

## Work (`/work/`) — supporting proof
Compact project cards + case-study template (problem, approach, Ahmed's contribution, stack, outcomes, links). Keep it lean; 3–6 projects. Theme: AI, computer vision, medical imaging, biomedical engineering, research software. Not the homepage priority.

## Contact (`/contact/`)
Intro-call booking embed/link (Cal.com/Calendly/etc.), email, profiles. Form only with a configured third-party endpoint.

## Global
Header with mini horizon art (small Earth arc + tiny walker on inner pages), footer, social icons (GitHub, LinkedIn, Scholar, etc.), CTA band, tag chips, timeline component, tier/pricing cards, FAQ accordion (accessible), SEO head, 404 (the walker looks lost/with a map).
