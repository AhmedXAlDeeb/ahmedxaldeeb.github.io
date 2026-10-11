# Authoring

Two languages: English files live in `src/content/<type>/en/`, Arabic mirrors in `src/content/<type>/ar/` with the **same slug**. One file appears automatically in its language's hub, filters, search, sitemap, and RSS (English only for RSS).

**Scope: MSc-abroad topics only.** Controlled keywords (EN): `ielts, supervisors, outreach, funding, sop, cv, documents, applications, planning, visa, english-test, listening, reading, writing, speaking` (AR equivalents in Arabic files). Off-topic pieces don't belong here.

New article? Scaffold it — `npm run new:article -- --slug=<slug> --title="<title>" --lang=en [--series=<id> --order=<n> --tags=...]`, then mirror for `ar`. Full skeleton: `docs/article-template.md` (articles, guides, sessions + figures/code/math/tables).

## Articles (`src/content/articles/<lang>/*.md`)

`title, summary|description, date, tags[], category, draft` + optional `series, seriesOrder, translationKey, translationStatus, sources[{title,url}], relatedProjects[]`. Same slug in `en/` and `ar/` = a translated pair. Series parts share `series` + unique `seriesOrder` → prev/next nav renders automatically. Math `$…$`/`$$…$$`, fenced code, figures with alt + caption.

## Guides (`src/content/guides/*.md`)

`title, summary, publishedDate, lastVerified, contentType (official|experience|general-advice), sources[{label,href}], topic, draft`. Separate **Official requirements** / **My experience** / **General advice**; stale banner auto after 12 months.

## Sessions (`src/content/sessions/*.md`)

`title, description, date (ISO with offset), timezone, durationMin, status (upcoming|past), topic[], registrationUrl, videoUrl, slidesUrl, takeaways[], draft`. Upcoming shows registration; past embeds video. `Event` schema auto for upcoming with real data.

## Contact form endpoint

Set `contactFormEndpoint` in `src/data/site.ts` (Formspree/Web3Forms URL). Empty = mailto-compose fallback.

## Rules

No hotlinked/copied artwork · no fabricated claims · `npm run build` green.
