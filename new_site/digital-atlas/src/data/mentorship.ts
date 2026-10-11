/** Mentorship offer data — single source of truth for the mentorship page.
 *  Home reuses the legacy `stages`/`stagesAr` (n/title/text); the mentorship
 *  page uses the richer `roadmap` model below.
 *  TODO(ahmed): confirm refund policy, payment methods, booking tool, and
 *  who counts as "in Egypt" before launch. */

export const seatsPerMonth = 10;
export const seatsAvailable: number | null = null; // set a number to show it; null hides the count
export const billing = 'monthly';
export const minimumCommitmentMonths = 1;

export const pricing = [
  { id: 'egypt', name: 'Students in Egypt', nameAr: 'الطلاب في مصر', amount: 600, currency: 'EGP', per: 'month', perAr: 'شهريًا' },
  { id: 'international', name: 'Everywhere else', nameAr: 'باقي دول العالم', amount: 50, currency: 'USD', per: 'month', perAr: 'شهريًا' },
];

export const includedBoth = [
  'Weekly one-to-one call (45 min)',
  'Written plan with real dates',
  'Tasks with 48h written feedback',
  'Line-by-line document reviews',
  'Templates, checklists & tracker',
  'No long contract — month to month',
];

export const includedBothAr = [
  'لقاء فردي أسبوعي (90 دقيقة)',
  'خطة مكتوبة بتواريخ حقيقية',
  'مهام بملاحظات مكتوبة خلال ٤٨ ساعة',
  'مراجعة المستندات سطرًا بسطر',
  'قوالب وقوائم تحقق وجدول متابعة',
  'لا عقد طويل — شهرًا بشهر',
];

/* Legacy stage summaries reused by the Home journey (n/title/text). */
export const stages = [
  { n: 1, title: 'Foundation & English test', text: 'Target scores, study plan, test strategy, booking timeline.' },
  { n: 2, title: 'Profile & roadmap', text: 'Profile audit, target programs, funding routes, timeline backwards from deadlines.' },
  { n: 3, title: 'Supervisor search & outreach', text: 'Finding aligned professors, reading their work, cold emails, follow-ups, interviews.' },
  { n: 4, title: 'Applications', text: 'Program requirements, portals, references, deadline tracking.' },
  { n: 5, title: 'Documents', text: 'Academic CV, statement of purpose, cover letters — reviewed with tracked revisions.' },
  { n: 6, title: 'Visa & landing', text: 'Study-permit checklist and review, document prep, pre-departure planning. Guidance only — not legal advice.' },
];

/* Rich roadmap model for the mentorship page. `fixes` links a pain to a stage id. */
export interface RoadmapNode {
  id: string;
  title: string; titleAr: string;
  blurb: string; blurbAr: string;
  deliverable: string; deliverableAr: string;
  fixes?: 'scattered' | 'emails' | 'documents';
}

export const roadmap: RoadmapNode[] = [
  { id: 'foundation', title: 'Foundation & English test', titleAr: 'التأسيس واختبار اللغة', blurb: 'Pick the right test, set a target score, practise on a schedule.', blurbAr: 'اختيار الاختبار المناسب وتحديد الدرجة وبناء روتين أسبوعي.', deliverable: 'target score + weekly routine', deliverableAr: 'الدرجة المستهدفة + روتين أسبوعي' },
  { id: 'profile', title: 'Profile & roadmap', titleAr: 'تقييم الملف وخارطة الطريق', blurb: 'An honest profile audit, then programs and funding routes that fit it.', blurbAr: 'تقييم صادق لملفك ثم برامج ومسارات تمويل تناسبه.', deliverable: 'shortlist + dated timeline', deliverableAr: 'قائمة مختصرة + جدول بتواريخ', fixes: 'scattered' },
  { id: 'supervisor', title: 'Supervisor search & outreach', titleAr: 'البحث عن مشرف والتواصل', blurb: 'Find professors who match your work and write emails that earn replies.', blurbAr: 'إيجاد أساتذة يتقاطع عملهم مع عملك وكتابة رسائل تستحق الرد.', deliverable: 'supervisor list + outreach emails', deliverableAr: 'قائمة مشرفين + رسائل تواصل', fixes: 'emails' },
  { id: 'applications', title: 'Applications', titleAr: 'التقديم', blurb: 'Requirements, portals, references and deadlines in one place.', blurbAr: 'المتطلبات والبوابات والمراجع والمواعيد في مكان واحد.', deliverable: 'tracker with every deadline', deliverableAr: 'متتبع بكل المواعيد' },
  { id: 'documents', title: 'Documents', titleAr: 'المستندات', blurb: 'Reviewed line by line. You write; I coach.', blurbAr: 'مراجعة سطرًا بسطر. أنت تكتب وأنا أرشد.', deliverable: 'CV, statement of purpose, cover letters', deliverableAr: 'السيرة الذاتية وخطاب الدافع وخطابات التقديم', fixes: 'documents' },
  { id: 'visa', title: 'Visa & landing', titleAr: 'التأشيرة والوصول', blurb: 'Permit checklist, financial documents and arrival planning, from official sources.', blurbAr: 'قائمة التصريح والمستندات المالية والتخطيط للوصول من مصادر رسمية.', deliverable: 'study-permit checklist', deliverableAr: 'قائمة تصريح الدراسة' },
];

export const pains = [
  { id: 'scattered', title: 'Scattered advice', titleAr: 'نصائح متناثرة', text: 'Every forum says something different.', textAr: 'كل منتدى يقول شيئًا مختلفًا.', fixStage: 'profile' },
  { id: 'emails', title: 'Emails nobody answers', titleAr: 'رسائل بلا رد', text: 'Generic messages get ignored.', textAr: 'الرسائل العامة تُهمَل.', fixStage: 'supervisor' },
  { id: 'documents', title: 'Documents that say nothing', titleAr: 'مستندات لا تقول شيئًا', text: "Your statement sounds like everyone else's.", textAr: 'خطابك يشبه خطابات الجميع.', fixStage: 'documents' },
] as const;

export const program = [
  { id: 'call', en: 'Free 20-min call', ar: 'مكالمة مجانية ٢٠ دقيقة' },
  { id: 'plan', en: 'Your written plan (week 1)', ar: 'خطتك المكتوبة (الأسبوع الأول)' },
  { id: 'cycle', en: 'Weekly cycle', ar: 'الدورة الأسبوعية' },
  { id: 'season', en: 'Application season', ar: 'موسم التقديم' },
  { id: 'offer', en: 'Offer & permit', ar: 'العرض والتصريح' },
];

export const weeklyLoop = [
  { id: 'meet', en: 'Meet', ar: 'اجتماع', metaEn: '45 min, notes after', metaAr: '90 دقيقة وملاحظات بعدها' },
  { id: 'work', en: 'Work', ar: 'عمل', metaEn: 'tasks, plan updated', metaAr: 'مهام وخطة محدثة' },
  { id: 'feedback', en: 'Feedback', ar: 'ملاحظات', metaEn: 'written, within 48 hours', metaAr: 'مكتوبة خلال ٤٨ ساعة' },
];

export const comparison = [
  { key: 'Strategy', keyAr: 'الاستراتيجية', one: 'Built from your profile and goals', oneAr: 'مبنية على ملفك وأهدافك', group: 'One plan for everyone', groupAr: 'خطة واحدة للجميع' },
  { key: 'Supervisors', keyAr: 'المشرفون', one: 'Your list is yours alone', oneAr: 'قائمتك لك وحدك', group: 'Many students target the same professors', groupAr: 'طلاب كثيرون يستهدفون الأساتذة أنفسهم' },
  { key: 'Documents', keyAr: 'المستندات', one: 'Line-by-line feedback on your story', oneAr: 'ملاحظات سطرًا بسطر على قصتك', group: 'General tips on structure', groupAr: 'نصائح عامة عن الهيكل' },
  { key: 'Pace', keyAr: 'الوتيرة', one: 'Built around your deadlines', oneAr: 'مبنية على مواعيدك', group: 'Fixed syllabus', groupAr: 'منهج ثابت' },
  { key: 'Honesty', keyAr: 'الصراحة', one: 'Private: talk freely about weak spots', oneAr: 'بخصوصية: تحدث بحرية عن نقاط الضعف', group: 'In front of an audience', groupAr: 'أمام جمهور' },
];

export const facts = [
  { id: 'seats', icon: 'users', en: '10 seats a month', ar: '١٠ مقاعد شهريًا' },
  { id: 'call', icon: 'call', en: 'Weekly 90-min one-to-one call', ar: 'مكالمة فردية أسبوعية 90 دقيقة' },
  { id: 'feedback', icon: 'clock', en: 'Written feedback in 48 hours', ar: 'ملاحظات مكتوبة خلال ٤٨ ساعة' },
  { id: 'price', icon: 'tag', en: '600 EGP in Egypt / $50 elsewhere, month to month', ar: '٦٠٠ جنيه داخل مصر / ٥٠ دولارًا لباقي العالم، شهرًا بشهر' },
];

export const policies = [
  { icon: 'doc', en: 'Payment details sent after your intro call', ar: 'تُرسل تفاصيل الدفع بعد مكالمتك التعريفية' },
  { icon: 'calendar', en: "Reschedule with 24 hours' notice", ar: 'إعادة الجدولة بإشعار قبل ٢٤ ساعة' },
  { icon: 'shield', en: 'Refund policy shared on the intro call', ar: 'تُوضح سياسة الاسترجاع في المكالمة التعريفية' },
  { icon: 'users', en: 'Limited to 10 seats a month', ar: 'العدد محدود: ١٠ مقاعد شهريًا' },
];

export const faqs = [
  { q: 'Is this only for Canada?', a: 'Canada first. Other countries are coming. The core of the process (supervisors, statement of purpose, CV, timeline) transfers.' },
  { q: 'Which fields?', a: 'CS and Engineering, including AI, software, electrical, biomedical and mechanical.' },
  { q: 'Do I need IELTS first?', a: "It depends on the program. We'll check the official requirements together and plan the test around your deadlines." },
  { q: 'Do you handle visas?', a: 'Guidance and checklist review only, based on official sources. Decisions belong to the immigration authority.' },
  { q: 'Time zones?', a: 'Cairo time (EET/EEST); pick any open slot in the booking calendar — it shows times in your local time zone.' },
];

export const faqsAr = [
  { q: 'هل هذا لكندا فقط؟', a: 'كندا أولًا، ودول أخرى قريبًا. جوهر العملية (المشرفون وخطاب الدافع والسيرة الذاتية والجدول) ينتقل بين الدول.' },
  { q: 'لأي تخصصات؟', a: 'الحاسبات والهندسة، ومنها الذكاء الاصطناعي والبرمجيات والكهرباء والطبية الحيوية والميكانيكا.' },
  { q: 'هل أحتاج الآيلتس أولًا؟', a: 'يعتمد على البرنامج. سنراجع المتطلبات الرسمية معًا ونخطط الاختبار حول مواعيدك.' },
  { q: 'هل تتولى التأشيرة؟', a: 'إرشاد ومراجعة قوائم فقط بالاعتماد على المصادر الرسمية. القرار لسلطات الهجرة.' },
  { q: 'المناطق الزمنية؟', a: 'بتوقيت القاهرة؛ اختر أي موعد متاح في تقويم الحجز — يعرض الأوقات بتوقيت منطقتك.' },
];

/* Legacy Arabic stage summaries (kept for reference; Home uses `stages`). */
export const stagesAr = [
  { n: 1, title: 'التأسيس واختبار اللغة', text: 'الدرجات المستهدفة، خطة المذاكرة، استراتيجية الاختبار، وتوقيت الحجز.' },
  { n: 2, title: 'تقييم الملف وخارطة الطريق', text: 'مراجعة ملفك، واختيار الجامعات والبرامج، ومسارات التمويل، وجدول زمني محسوب من المواعيد النهائية.' },
  { n: 3, title: 'البحث عن مشرف والتواصل', text: 'إيجاد الأساتذة المناسبين، وقراءة أبحاثهم، وكتابة رسائل التعارف والمتابعة والمقابلات.' },
  { n: 4, title: 'التقديم', text: 'متطلبات البرامج، وبوابات التقديم، وخطابات التوصية، وتتبع المواعيد.' },
  { n: 5, title: 'المستندات', text: 'السيرة الأكاديمية وخطاب الدافع وخطابات التغطية — بمراجعة تفصيلية وتعديلات موثقة.' },
  { n: 6, title: 'التأشيرة والوصول', text: 'قائمة تصريح الدراسة ومراجعتها وتجهيز المستندات والاستعداد للسفر. إرشاد فقط — وليس استشارة قانونية.' },
];
