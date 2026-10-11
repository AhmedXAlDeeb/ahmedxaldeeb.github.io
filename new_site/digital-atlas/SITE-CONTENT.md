# SITE CONTENT v2 — Real, Specific, Inspiring Copy (EN + AR)

**Agent instructions (copy and data edit only).** Replace the current copy with the text below, in `src/pages/` (EN + `/ar/`), `src/data/mentorship.ts`, and `src/content/`. Then update `SITE-CONTENT.md` (the mirror file) to match. Do not change the theme, layout system, Earth-walker logic, or routes, except where this file adds a section.

**Data/model changes**
1. `src/data/mentorship.ts`: **remove the three tiers** (Founding/Standard/Intensive) and the **3-month minimum**. Add:
   - `seatsPerMonth: 10`, `seatsAvailable: number | null` (manually edited; hide the "available" count when `null`; never show a fake countdown)
   - `billing: "monthly"`, `minimumCommitmentMonths: 1`
   - `pricing: [{ id: "egypt", amount: 600, currency: "EGP", per: "month" }, { id: "international", amount: 50, currency: "USD", per: "month" }]`
2. **No payment link on the site.** Payment details are sent after the intro call. Remove the "Continue to payment" button everywhere.
3. Add a small **seats badge** (`10 seats a month`) to the Home hero, the Mentorship hero, and the Contact page.
4. Add a new **"Why one to one?"** section on `/mentorship/` (full text in §3) and a one-line teaser on Home.
5. Update the Story timeline: Ahmed is now a **graduate** and an **AI engineer** (not "expected 2026").
6. Learn → replace the experience placeholders (§5). Delete `sample-layout-check.md` before launch.

**Honesty rules (still apply):** no guarantees of admission, funding or visas · no invented numbers, testimonials or credentials · do not claim Ahmed's own offers were funded or in Canada unless he confirms (see "Confirm before publishing") · seat scarcity must be real (it is: 10 per month).

---

## 1. Home — `/` · `/ar/`

### 1.1 Hero
- **Eyebrow** — EN: `Ahmed Soliman · AI Engineer · Cairo University` · AR: `أحمد سليمان · مهندس ذكاء اصطناعي · جامعة القاهرة`
- **H1** — EN: `A fully funded graduate degree isn't luck. It's a process, and it can be learned.` · AR: `الدراسة العليا الممولة بالكامل ليست حظًا. إنها عملية، ويمكن تعلّمها.`
- **Sub** — EN: `I'm Ahmed, an AI engineer and Cairo University graduate. I spent two years studying how this process really works, applied to dozens of opportunities, and had MSc offers in hand before I graduated. Now I mentor ten students a month, one to one, toward funded study in Canada.`
  AR: `أنا أحمد، مهندس ذكاء اصطناعي وخريج جامعة القاهرة. قضيت عامين أدرس كيف تعمل هذه العملية فعلًا، وقدّمت على عشرات الفرص، وكانت بين يدي عروض ماجستير قبل تخرجي. اليوم أرشد عشرة طلاب شهريًا، بشكل فردي، نحو دراسة ممولة في كندا.`
- **CTAs** — EN: `Book a free intro call` · `Read my story` · AR: `احجز مكالمة تعريفية مجانية` · `اقرأ قصتي`
- **Seats line** — EN: `10 seats a month · 600 EGP in Egypt · $50 elsewhere` · AR: `١٠ مقاعد شهريًا · ٦٠٠ جنيه داخل مصر · ٥٠ دولارًا لباقي العالم`

### 1.2 My story, in brief (Stop 1 · The traveler)
- **P1** — EN: `For two years I treated getting into a funded graduate program like an engineering problem: study how admission and funding actually work, learn from people who had already won, apply, measure, fix, repeat. I applied to dozens of opportunities, and before I graduated I had MSc offers in hand.`
  AR: `لمدة عامين تعاملت مع الحصول على دراسة عليا ممولة كأنها مشكلة هندسية: أدرس كيف يعمل القبول والتمويل فعليًا، وأتعلم من أشخاص سبقوني ونجحوا، ثم أقدّم وأقيس النتيجة وأصلح وأكرر. قدّمت على عشرات الفرص، وقبل تخرجي كانت بين يدي عروض ماجستير.`
- **P2** — EN: `Along the way my friends started asking for help with IELTS, with finding supervisors, with their applications. It worked for them too. So I'm opening it up, carefully: ten students a month, one to one.`
  AR: `وفي الطريق بدأ أصدقائي يطلبون مساعدتي في الآيلتس والبحث عن مشرف وتعبئة طلبات التقديم، ونجح الأمر معهم أيضًا. لذلك أفتح الباب الآن بحرص: عشرة طلاب شهريًا، بشكل فردي.`
- **P3** — EN: `I can't promise admission or funding. Those decisions aren't mine. I can make your plan clear, your documents strong, and your timeline realistic.` + link `Read the full story →`
  AR: `لا أعد بقبول أو تمويل، فهذه القرارات ليست لي. لكنني أجعل خطتك واضحة ومستنداتك قوية وجدولك واقعيًا.` + `اقرأ القصة كاملة ←`
- **Milestone strip (5)**
  - EN: `Cairo University — Engineering graduate` · `AI Engineer — building and researching AI systems` · `Dozens of applications — learning from people who got funded` · `MSc offers — before graduation` · `Mentoring — 10 seats a month, one to one`
  - AR: `جامعة القاهرة — خريج هندسة` · `مهندس ذكاء اصطناعي — بناء وبحث في أنظمة الذكاء الاصطناعي` · `عشرات الطلبات — والتعلّم ممن حصلوا على تمويل` · `عروض ماجستير — قبل التخرج` · `الإرشاد — ١٠ مقاعد شهريًا، بشكل فردي`

### 1.3 Six steps (Stop 2 · The path)
Use the stage descriptions in §3.4. Link — EN: `How the mentorship walks these steps →` · AR: `كيف يرافقك الإرشاد في هذه الخطوات ←`

### 1.4 Mentorship summary (Stop 3 · The guide)
- **Lede** — EN: `A 90-minute one-to-one call every week, a written plan with real dates, and tasks with written feedback within 48 hours. Only ten seats a month, so you get my real attention.`
  AR: `مكالمة فردية مدتها 90 دقيقة كل أسبوع، وخطة مكتوبة بتواريخ حقيقية، ومهام بملاحظات مكتوبة خلال ٤٨ ساعة. عشرة مقاعد فقط شهريًا، لتحصل على اهتمامي الحقيقي.`
- **Teaser** — EN: `Why one to one, and not a group? →` · AR: `لماذا فردي وليس جماعيًا؟ ←`
- **CTAs** — EN: `Book a free intro call` · `Offer, pricing & FAQ` · AR: `احجز مكالمة تعريفية مجانية` · `العرض والأسعار والأسئلة`

### 1.5 Learn — keep as is.

### 1.6 Final CTA band
- EN: `Ten seats a month. One honest conversation first.` / `Twenty free minutes: your profile, your goals, and my honest view on whether, and how, I can help.`
- AR: `عشرة مقاعد شهريًا. وتبدأ بحديث صريح.` / `عشرون دقيقة مجانية: ملفك وأهدافك ورأيي الصريح في هل أستطيع مساعدتك، وكيف.`
- Buttons — EN: `Book a free intro call` · `Contact details` · AR: `احجز مكالمة تعريفية مجانية` · `بيانات التواصل`

---

## 2. Story — `/story/` · `/ar/story/`

**Title** — EN: `Story` / `Funded study isn't luck. I learned the process, and now I teach it.` · AR: `القصة` / `الدراسة الممولة ليست حظًا. تعلمت العملية، والآن أعلّمها.`

### 2.1 Where I started
- EN: `I'm Ahmed Soliman. I studied engineering at Cairo University, got pulled toward the place where machines meet the human body, and used AI to connect them. Today I work as an AI engineer. Like many engineering students in Egypt, I first saw funded study abroad as something that happened to other people: a rumor of professors, scholarships and offers, with no map.`
- AR: `أنا أحمد سليمان. درست الهندسة في جامعة القاهرة، وانجذبت إلى النقطة التي تلتقي فيها الآلة بجسم الإنسان، واستخدمت الذكاء الاصطناعي للربط بينهما. أعمل اليوم مهندس ذكاء اصطناعي. وكما يرى كثير من طلاب الهندسة في مصر، كنت أنظر إلى الدراسة الممولة بالخارج كشيء يحدث للآخرين: كلام عن أساتذة ومنح وعروض، بلا خريطة.`

### 2.2 The turning point
- EN: `At some point I stopped asking, "Will I get in?" and started asking, "What actually decides it?" That question changed everything. I treated it like an engineering problem: gather information, test assumptions, iterate. For about two years I studied how admission and funding really work: how supervisors choose students, what a statement of purpose has to do, where English tests fit, and which opportunities are genuinely funded and which only look that way.`
- AR: `في لحظة ما توقفت عن سؤال «هل سأُقبل؟» وبدأت أسأل «ما الذي يحسم الأمر فعلًا؟». غيّر هذا السؤال كل شيء. تعاملت معه كمشكلة هندسية: أجمع المعلومات، وأختبر الافتراضات، وأكرر. لمدة عامين تقريبًا درست كيف يعمل القبول والتمويل حقًا: كيف يختار المشرفون طلابهم، وماذا يجب أن يفعل خطاب الدافع، وأين يقع اختبار اللغة، وأي الفرص ممولة فعلًا وأيها يبدو كذلك فقط.`

### 2.3 What I did
- EN: `I didn't do it alone, and I didn't do it once. I learned from people who had already won funded positions: what they sent, how they wrote, what they would change. Then I applied to dozens of opportunities, saw what worked and what didn't, and fixed my approach each round. Before I graduated, I had MSc offers in hand.`
- AR: `لم أفعل ذلك وحدي، ولم أفعله مرة واحدة. تعلمت من أشخاص سبق أن حصلوا على مقاعد ممولة: ماذا أرسلوا، وكيف كتبوا، وماذا كانوا سيغيّرون. ثم قدّمت على عشرات الفرص، ولاحظت ما ينجح وما لا ينجح، وصححت أسلوبي في كل جولة. وقبل تخرجي كانت بين يدي عروض ماجستير.`
- Keep the existing verified research paragraph here (drowsiness detection, PCG+ECG stress, anomaly detection, EEG-BCI, fMRI, open-source tools).

### 2.4 Where I am now
- EN lead: `I work as an AI engineer, and I keep doing research in computer vision, biosignals and neuroimaging. The timeline below is the verifiable part of my story.`
- AR lead: `أعمل مهندس ذكاء اصطناعي، وما زلت أمارس البحث في الرؤية الحاسوبية والإشارات الحيوية وتصوير الأعصاب. الخط الزمني أدناه هو الجزء القابل للتحقق من قصتي.`
- **Timeline (inverted, 6–7 entries)**: B.Sc. Systems & Biomedical Engineering, Cairo University (3.41/4.00), graduated `[year]` · AI Engineer (`[company/role, optional]`) · CV Research Assistant, Nile University (papilledema) · Data & AI internships 2024–2025 (Synapse, IBM, innovay.io, IDH) · Research recognition 2024 (IEEE 1st, NU 1st, Machathon 4th) · MSc offers before graduation (`[number, and where, if you want to name them]`) · Mentoring friends and peers → 10 seats a month.
  AR labels: بكالوريوس هندسة النظم والطبية الحيوية، جامعة القاهرة · مهندس ذكاء اصطناعي · مساعد باحث في الرؤية الحاسوبية، جامعة النيل · تدريب في البيانات والذكاء الاصطناعي ٢٠٢٤–٢٠٢٥ · تقدير بحثي ٢٠٢٤ · عروض ماجستير قبل التخرج · إرشاد الأصدقاء والزملاء ← ١٠ مقاعد شهريًا.

### 2.5 Why I mentor
- EN: `My friends noticed. One by one they asked me to look at their IELTS plans, help them find supervisors, and read their applications. I helped many of them find suitable opportunities, raise their scores, and send applications they were proud of. That's when I understood this is teachable. Talent is rarely the difference. Information, structure and honest feedback usually are. I love helping people, and I want to do it for more students, carefully. That's why I take ten a month, one to one: mentoring only works when it's personal.`
- AR: `انتبه أصدقائي. واحدًا تلو الآخر طلبوا مني النظر في خطط الآيلتس، ومساعدتهم في إيجاد مشرفين، وقراءة طلبات التقديم. ساعدت كثيرين منهم في إيجاد فرص مناسبة ورفع درجاتهم وإرسال طلبات يفخرون بها. عندها فهمت أن هذا الطريق يمكن تعلّمه. الموهبة نادرًا ما تكون الفارق؛ الفارق غالبًا هو المعلومة والتنظيم والملاحظات الصادقة. أحب مساعدة الناس، وأريد أن أفعل ذلك مع عدد أكبر من الطلاب، بحرص. لهذا أقبل عشرة طلاب شهريًا فقط، بشكل فردي: فالإرشاد لا ينجح إلا حين يكون شخصيًا.`

### 2.6 What I promise
- EN: `I can't promise admission or funding. Those decisions belong to universities and funding bodies. I promise a clear plan, honest feedback, and my full attention.`
- AR: `لا أستطيع أن أعدك بقبول أو تمويل، فهذه القرارات تعود إلى الجامعات وجهات التمويل. أعدك بخطة واضحة وملاحظات صادقة واهتمام كامل.`
- CTA band — EN: `Walk this path with a guide.` · AR: `امشِ هذا الطريق مع مرشد.`

---

## 3. Mentorship — `/mentorship/` · `/ar/mentorship/` (redesigned: 9 scannable sections, dark/light rhythm)

### 3.1 Hero (dark)
- Eyebrow `Mentorship` · H1 `Your path to a fully funded graduate degree in Canada, built around you.` · one-line lede (test → supervisor → application → permit).
- Fact strip (4, with icons): `10 seats a month` · `Weekly 90-min one-to-one call` · `Written feedback in 48 hours` · `600 EGP in Egypt / $50 elsewhere, month to month`.
- CTAs `Book a free intro call` · `See pricing` + anchor chips: Path · How it works · Why one to one · Pricing · FAQ.
- Mobile sticky bottom bar `Book a free intro call` (appears after hero, hides at final CTA/footer).
- AR mirror (same structure; lede `إرشاد فردي لطلاب الحاسبات والهندسة، من اختبار اللغة إلى المشرف والتقديم وتصريح الدراسة.`).

### 3.2 Problem → fix (dark)
- Intro: `Funded study rewards people who know the game and punishes people who guess.`
- 3 cards with "Fixed in stage N" chips: Scattered advice → Stage 2 (profile) · Emails nobody answers → Stage 3 (supervisor) · Documents that say nothing → Stage 5 (documents). (AR mirror.)

### 3.3 Path — visual roadmap (light, inverted)
Six numbered nodes with output chips + walker marker + Canada marker: target score + weekly routine · shortlist + dated timeline · supervisor list + outreach emails · tracker with every deadline · CV, statement of purpose, cover letters · study-permit checklist. (AR mirror.)

### 3.4 How it works (dark)
Program timeline (5 nodes: free call → written plan → weekly cycle → application season → offer & permit) + weekly loop (Meet → Work → Feedback) + `Plus templates, checklists and a progress tracker.` (AR mirror.)

### 3.5 Why one to one (light, inverted)
Comparison table (What matters · One to one · A group session; Strategy/Supervisors/Documents/Pace/Honesty) + closer (free general knowledge; one-to-one for strategy). (AR mirror.)

### 3.6 Pricing (dark)
Two cards side by side: `Students in Egypt — 600 EGP / month` · `Everywhere else — $50 / month`. Shared note (everything included, no long contract) + 4-item policy icon row (payment after call · reschedule 24h · refund on call · 10 seats) + single CTA. No payment link. (AR mirror.)

### 3.7 Mentor + honest limits (light, inverted)
Mentor card (2-year study, dozens of applications, MSc offers, friends helped; 4 credential chips; story link; no-invented-testimonials line) + Will/Won't card. (AR mirror.)

### 3.8 FAQ (dark) — 5 only
Canada-only · fields · IELTS-first · visas (guidance-only wording) · time zones. (AR mirror.)

### 3.9 Final CTA (light, inverted band)
`Start with a free 20-minute call.` + profile/goals/honest-view line. Buttons: Book · Contact. (AR mirror, no seats line.)

Data model (`src/data/mentorship.ts`): `facts`, `roadmap` (+`pains`), `program`, `weeklyLoop`, `comparison`, `policies` (icon+en+ar), `faqs`/`faqsAr` (5), `pricing`, `seatsPerMonth`, `seatsAvailable`. Legacy `stages`/`stagesAr` kept verbatim for Home. New components: `Icon`, `Roadmap`, `CompareTable`; `Faq` gained `id`, `CtaBand` gained `invert`.

---

## 4. Contact — `/contact/` · `/ar/contact/`
- H1 — EN: `Talk to me` · AR: `كلّمني`
- Lede — EN: `Book a free 20-minute intro call, or send a message. I take 10 mentees a month, so I read every message myself.` · AR: `احجز مكالمة تعريفية مجانية مدتها ٢٠ دقيقة، أو أرسل رسالة. أقبل ١٠ طلاب شهريًا، لذلك أقرأ كل رسالة بنفسي.`
- **New box "Pricing & payment"** — EN: `600 EGP / month for students in Egypt · $50 / month for everyone else · month to month · payment details are sent after our intro call.` · AR: `٦٠٠ جنيه / شهريًا للطلاب في مصر · ٥٠ دولارًا / شهريًا لباقي العالم · شهرًا بشهر · تُرسل تفاصيل الدفع بعد مكالمتنا التعريفية.`
- Form topic options: add `Mentorship intro call` as the first option. Keep the rest of the contact content (direct channels, status messages) unchanged.

---

## 5. Learn — library (pruned: real IELTS series only)

Old stubs (`ielts-study-plan`, `finding-a-supervisor`, `sop-structure`) deleted. The article library is now exactly the `ielts-prep` series, EN+AR with matching slugs:

- `ielts-start-here` — setup, baseline, exam date, routine (Part 1)
- `ielts-listening-strategy` — section-by-section Listening playbook (Part 2)

New articles: scaffold with `npm run new:article` (see `docs/article-template.md`); series parts share one `series` id + unique `seriesOrder`.

---

## 6. Global chrome
- Header: keep. Add the seats badge to the mobile menu footer.
- Footer tagline — EN: `From where you are to a funded degree in Canada, step by step.` · AR: `من حيث أنت إلى درجة ممولة في كندا، خطوة بخطوة.`
- 404: unchanged.

---

## Confirm before publishing (blocking)
1. **Offers:** exact number, and whether they were funded and where. This is the first thing students will ask. If they weren't in Canada, keep the copy as written: it says offers, not funded Canadian offers, and the Canada-specific knowledge comes from people he learned from and his research.
2. **Graduation year** and current AI-engineer role (company can stay unnamed).
3. **"Two years" wording**: written as "two years studying the process". Adjust if the timeline differs.
4. **Origin paragraph (§2.1):** written in his voice from his facts; edit any line that doesn't ring true.
5. **Never put two mentees on the same supervisor** is implied in reason 2 of §3.5. Keep it only if it will be his actual policy.
6. **Refund policy**, **payment methods** (Egypt and international), **booking tool**, and who counts as "in Egypt" (suggest: based in Egypt).
7. **Mentee results:** add only with written permission.