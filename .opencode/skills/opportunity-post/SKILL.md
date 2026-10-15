---
name: opportunity-post
description: Use when the user wants to publish a new funded opportunity (scholarship, MSc/PhD position, internship) on the Digital Atlas site. Takes raw opportunity details, validates them, and creates the bilingual EN+AR posting files.
---

# Opportunity Post

You publish one funded opportunity to `new_site/digital-atlas` in English and Arabic.

## Inputs

Ask the user to fill `intake-template.md` (same folder). Every field is required
except `sources` (recommended) and `tagsAr` (defaults to translating `tags`).
`funding` is recommended, not required: if no official source states funding,
write `unknown` and the files will carry an explicit "not stated — ask before
applying" line instead of a figure. Never invent a funding figure.
If any other required field is missing, ask for it — never invent it.

## Steps

1. **Read** `intake-template.md` for the field contract and the filled example shape.
2. **Validate:**
   - `deadline` is `YYYY-MM-DD` or exactly `rolling`. Past dates are allowed only with `status: closed`.
   - `applyUrl` and every source URL open with HTTP 200 (fetch them; follow redirects).
   - Slug is lowercase letters/numbers/dashes and unused in `src/content/opportunities/{en,ar}/`.
   - No invented facts. Anything the user did not confirm stays out of the files.
3. **Write two files** (same slug, mirrored):
   - `src/content/opportunities/en/<slug>.md`
   - `src/content/opportunities/ar/<slug>.md`
   
   ```yaml
   ---
   title: "<EN title>"
   summary: "<EN one-liner>"
   org: "<organization>"
   location: "<city, country>"
   funding: "<what is covered>"
   deadline: "YYYY-MM-DD"   # or "rolling"
   posted: "YYYY-MM-DD"     # today unless told otherwise
   applyUrl: "<official application URL>"
   status: "open"           # open | closed
   tags: [scholarship, msc] # EN controlled keywords
   lastVerified: "YYYY-MM-DD"  # today unless told otherwise
   sources:
     - title: "<official page name>"
       url: "<official URL>"
   draft: false             # true until every detail above is confirmed
   ---
   
   ## <2–4 short sections>
   
   Body: what the position is, who should apply, what funding covers, how to
   apply. Link official pages inline. End factual claims at what is verified.
   ```
   
   AR file: identical shape, Arabic `title/summary/body/tags`, same `deadline/posted/applyUrl/status/lastVerified/sources`.
4. **Verify:** `npm run build` in `new_site/digital-atlas` must pass; open the hub
   and detail pages in both languages and confirm badges, deadline line, apply
   CTA, and filters list the posting. Confirm the other language's hub is untouched.
5. **Report back:** slug + URLs of the 4 touched routes (EN/AR hub + detail),
   anything left as `draft: true` and why, and any claim you refused to write
   for lack of a source.

## Hard rules

- Deadlines and eligibility are stated **only** from official
  pages, each with a `lastVerified` date. Funding figures likewise — but when
  no official source states funding, an explicit "not stated on the official
  announcement — ask the supervisor before applying" line (both languages) is
  acceptable and does not block publishing. The templates auto-banner expired and
  stale postings — do not hand-edit around those banners.
- `draft: true` until every required field is confirmed. A half-filled posting
  never ships.
- Never touch theme, layout, nav, the Earth-walker scene, pricing, or other
  pages. This skill writes content files only (plus build verification).
- Record new decisions in `DECISIONS.md` only if you deviated from this file.
