# TODO — everything Ahmed must supply or confirm

> Collected from every `TODO(ahmed)` in the source (2026-10-11, v2 copy applied).
> Nothing here blocks the build; the blocking section blocks an honest launch.
> The site itself renders ZERO visible TODOs: page copy uses final text, and all
> remaining content TODOs live as invisible HTML comments in the markdown sources
> (view-source only) plus the code comments below — every item tracked here.

## 🛑 Confirm before publishing (blocking — Ahmed's own checklist)

- [ ] **Offers:** exact number of MSc offers, and whether they were funded and where. If not in Canada, copy stays as written (says offers, not funded Canadian offers).
- [ ] **Graduation year** + current AI-engineer role (company may stay unnamed) — timeline shows TODO(ahmed) twice.
- [ ] **"Two years" wording** — adjust if the study timeline differs.
- [ ] **Origin paragraph** — edit any line that doesn't ring true.
- [ ] **One-supervisor policy** — "never choose between two students writing to the same supervisor" is implied; keep only if it will be actual policy.
- [ ] **Refund policy** — still `[to confirm]` on both mentorship pages.
- [ ] **Payment methods** (Egypt + international), **booking tool**, who counts as "in Egypt".

## 🔴 Launch blockers (site asks for things that don't exist yet)

- [x] **Booking link** — Google Calendar appointment page set (`bookingUrl`), embedded in Contact EN+AR with a new-tab fallback link.
- [ ] **Contact form endpoint** — Formspree/Web3Forms URL → `src/data/site.ts` (`contactFormEndpoint`). Until set, the form composes a mailto email instead.
- [ ] **Mentee results** — only with written permission, only when real.

## 🟡 Story (bracketed specifics)

- [ ] Graduation year + company/role + MSc offer number/places (timeline entries).
- [ ] Friends-mentoring paragraph is written from your facts — correct any line.

## 🟡 Articles — library is the real IELTS series only

Old stubs (`ielts-study-plan`, `finding-a-supervisor`, `sop-structure`) deleted per request.
Remaining: `ielts-start-here` + `ielts-listening-strategy` (EN+AR, `ielts-prep` series).

## 🟡 Guides — official sources with verified dates

- [ ] Choosing a program (EN+AR): 2–3 real Canadian program pages + your criteria.
- [ ] Funding in Canada (EN+AR): authoritative sources (verify NSERC/Vanier names) + your funding experience.
- [ ] Study-permit checklist: still a draft outline — write against current IRCC page, then `draft: false`.
- [ ] Refresh `lastVerified` when re-checked (stale banner is automatic after 12 months).

## 🟡 Sessions

- [ ] First session: real date/time + registration link (EN draft + AR empty state wait on this).
- [ ] Demo session `sample-recording-check.md`: replace video/takeaways/slides or delete.
- [ ] Upcoming sessions without `registrationUrl` show "coming soon" — add URLs.

## 🟢 Nice to have

- [ ] Google Scholar / ORCID links (contact EN+AR).
- [ ] CV PDF at `public/cv.pdf`.
- [ ] 1200×630 PNG export of the OG image (currently SVG).
- [ ] Privacy/terms notes for the booking tool.
- [ ] Arabic sessions, Arabic RSS (labeled i18n gaps).
- [ ] Time-zone handling of the booking tool (FAQ).
