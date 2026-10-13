# Opportunity intake — fill this in, then ask the agent to run the `opportunity-post` skill

Copy this block, fill every line, and paste it back. Lines marked *(required)*
block publishing until answered. Write `unknown` rather than guessing — the
agent will keep the posting as a draft until confirmed.

```yaml
slug: ""                    # *(required)* lowercase-dashes, e.g. vanier-2026
title_en: ""                # *(required)*
title_ar: ""                # *(required)*
summary_en: ""              # *(required)* one sentence: what + who it funds
summary_ar: ""              # *(required)*
org: ""                     # *(required)* university / body + department
location: ""                # *(required)* e.g. Toronto, Canada
funding: ""                 # *(required)* what is covered, e.g. Fully funded (tuition + stipend)
funding_ar: ""              # *(required)*
deadline: ""                # *(required)* YYYY-MM-DD or: rolling
posted: ""                  # default: today
applyUrl: ""                # *(required)* official application page
status: "open"              # open | closed
tags: []                    # e.g. [scholarship, msc]
tags_ar: []                 # e.g. [منحة, ماجستير]
sources:                    # official pages only (recommended)
  - title: ""
    url: ""
body_notes_en: ""           # *(required)* 2–4 sentences or bullets: what it is, who applies, funding, how to apply
body_notes_ar: ""           # *(required)* same in Arabic
```

**What happens next:** the agent validates every URL, writes
`src/content/opportunities/en/<slug>.md` + `src/content/opportunities/ar/<slug>.md`,
builds the site, checks both languages, and reports the four routes.
Anything unconfirmed ships as `draft: true` (invisible) — never silently published.
