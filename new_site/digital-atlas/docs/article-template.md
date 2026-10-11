# Article template — scaffold, fill, publish

Fastest path — generate the file (EN example; repeat with `--lang=ar` for the mirror):

```sh
npm run new:article -- --slug=ielts-reading-plan --title="IELTS Reading: ..." \
  --lang=en --series=ielts-prep --order=3 --tags=ielts,reading --category=test-prep
```

**Manual path:** create `src/content/articles/en/<slug>.md`, and the mirror
`src/content/articles/ar/<slug>.md` with the **same `<slug>`**.

Set `draft: true` while writing; flip to `false` to publish. One file appears automatically in: Learn hub, topic filters, search, sitemap, RSS (+ series prev/next nav when `series` is set).

## Rules

- Scope: **MSc-abroad topics only** (IELTS, supervisors, applications, SOP/CV, funding, visa, documents, planning, english-test, listening/reading/writing/speaking).
- Tags: controlled keywords (EN): `ielts, supervisors, outreach, funding, sop, cv, documents, applications, planning, visa, english-test, listening, reading, writing, speaking` — or Arabic equivalents in AR files. Topic chips on Learn are built from these, so only use tags that describe the article. No off-topic tags.
- Dates: `YYYY-MM-DD` (quoted or not — both validate).
- Category: `test-prep | applications | documents | planning | notes` (free string; `ielts` also used).
- Series: same `series` id in every part (e.g. `ielts-prep`), unique `seriesOrder` per part → renders "Part N of M" nav automatically, per language.
- Translations: same slug both sides; optional `translationKey` (defaults to the slug) and `translationStatus`.
- `summary` and `description` are interchangeable — provide at least one or the build fails with a clear error.
- Sources use `{title, url}` items and render as a Sources list on the article page.
- No invented facts, scores, or deadlines. Unverified page copy must not ship — keep `draft: true` until real.
- Images go in `public/` and need descriptive alt text + a caption line.

## Frontmatter (articles) — canonical shape

```yaml
---
title: "Short, specific title"
summary: "One sentence: who it helps and what it covers."  # or `description:`
date: "2026-10-20"
tags: [ielts, reading, english-test]
category: test-prep
series: ielts-prep        # optional; omit for standalone articles
seriesOrder: 3            # optional; required within a series
translationKey: ielts-reading-plan   # optional; defaults to slug
draft: true   # false to publish
sources:                     # optional; renders as Sources list
  - title: "British Council IELTS portal"
    url: "https://…"
---
```

## Body skeleton (articles)

```markdown
## The honest frame (1 paragraph: what this covers and what it doesn't)

## Official requirements (link real pages; never quote rules without a verified source)

## My experience (real only; TODO(ahmed) if not yet written)

## General advice (short bullets, one idea each)
- ...
- ...

## Checklist (optional; the template supports tables, code, math, figures)
```

## Figures, code, math, tables

```markdown
![Descriptive alt text](/your-image.svg)

*Fig 1. Caption explaining what the figure shows.*

\```python
# fenced code gets monochrome highlighting
\```

$$F1 = 2 \\cdot \\frac{precision \\cdot recall}{precision + recall}$$

| Step | Action |
|---|---|
| 1 | ... |
```

## Guides (extra fields)

Guides live in `src/content/guides/<lang>/` and additionally require:

```yaml
publishedDate: "2025-10-20"
lastVerified: "2025-10-20"   # update whenever you re-verify; stale banner auto after 12 months
contentType: "general-advice" # official | experience | general-advice
sources:
  - label: "Official page name"
    href: "https://…"
topic: "funding"              # one keyword
```

Guide bodies must keep the three labelled sections: **Official requirements** / **My experience** / **General advice**, and end with the automatic "verify with the official source" disclaimer.

## Sessions

File in `src/content/sessions/<lang>/`:

```yaml
title: "Session title"
description: "One sentence."
date: "2025-11-05T18:00:00+02:00"  # ISO with timezone offset
timezone: "Africa/Cairo"
durationMin: 60
status: "upcoming"                  # upcoming | past
topic: ["supervisors"]
registrationUrl: "https://…"        # upcoming only
videoUrl: "https://…"               # past only (youtube-nocookie preferred)
slidesUrl: "https://…"              # optional
takeaways: ["Point 1", "Point 2"]   # renders as a saveable checklist
draft: true
```
