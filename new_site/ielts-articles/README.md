# IELTS series: articles 1 and 2 (EN + AR)

Drop `src/content/articles/` into the site repo (merge with existing folders). Files:

| Article | EN | AR |
|---|---|---|
| 1. Start here (intro) | `en/ielts-start-here.md` | `ar/ielts-start-here.md` |
| 2. Listening | `en/ielts-listening-strategy.md` | `ar/ielts-listening-strategy.md` |

## Agent notes
- Frontmatter follows the pack schema (`lang`, `translationKey`, `translationStatus`, `tags`, `sources`). `series` and `seriesOrder` are new optional fields: add them to the Zod schema and show a "Part 1 of the IELTS series / next article" block (the files also end with a manual "Next" link).
- Internal links are written as `/learn/articles/...` (EN) and `/ar/learn/articles/...` (AR). Make sure they respect the GitHub Pages `base` (rewrite via a remark plugin or the `url()` helper).
- **Arabic voice is intentional:** Egyptian colloquial, first person, with English exam terms in Latin script. Do not "formalize" it into MSA. Keep Western digits for scores and dates.
- Mixed-direction text: add a rehype step (or CSS) so Latin runs inside Arabic paragraphs render with `<bdi>`/`dir="auto"` and don't scramble punctuation (for example `(P/B)`, `7.5`, `Section 1:`).
- The existing article "How I Plan an IELTS Study Block" overlaps with article 1. Either merge it into this series (redirect or remove) or link them to each other.
- Both articles carry a "my experience, not official advice" note. Keep it. Per site rules, any factual claim about current test rules or what a booking includes should be verified against official British Council pages before publishing; add `lastVerified` when Ahmed has checked.
- Not for publishing as-is until Ahmed confirms the items listed in his review message.
