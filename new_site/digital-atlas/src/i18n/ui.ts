export const languages = { en: 'English', ar: 'العربية' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export function getLangFromUrl(pathname: string): Lang {
  return pathname === '/ar' || pathname.startsWith('/ar/') ? 'ar' : 'en';
}

/** Map a path to the other language. EN `/story/` <-> AR `/ar/story/`. */
export function localizedPath(pathname: string, target: Lang): string {
  if (target === 'ar') {
    if (pathname === '/ar' || pathname.startsWith('/ar/')) return pathname;
    return pathname === '/' ? '/ar/' : `/ar${pathname}`;
  }
  if (pathname === '/ar' || pathname === '/ar/') return '/';
  return pathname.startsWith('/ar/') ? pathname.slice(3) : pathname;
}

export const ui = {
  en: {
    skip: 'Skip to main content',
    menu: 'Menu',
    bookIntro: 'Book intro call',
    bookFreeIntro: 'Book a free intro call',
    footerTagline: 'From where you are to a funded degree in Canada, step by step.',
    rights: 'All rights reserved.',
    all: 'All',
    copied: 'Copied ✓',
    copyFailed: 'Copy failed — select and copy manually.',
    lastVerified: 'Last verified',
    sources: 'Sources',
    disclaimer: 'Verify with the official source before acting.',
    toc: 'Contents',
    related: 'Related',
    form: {
      name: 'Your name',
      email: 'Your email',
      emailHint: 'So Ahmed can reply to you.',
      topic: 'Topic',
      topics: ['Mentorship intro call', 'Mentorship — pricing question', 'Collaboration / work', 'Something else'],
      message: 'Message',
      messagePh: 'Your background, goal, and timeline…',
      noBackend:
        'Pressing Send opens your email app with this message addressed to Ahmed — nothing is sent until you press send there.',
      send: 'Send message',
      sentOk: 'Message sent. Ahmed will reply to your email address.',
      sentFail: 'Sending failed. Please email Ahmed directly — your message was not delivered.',
      mailAppOk: 'Your email app should now open with the message addressed to Ahmed. Press send there to deliver it.',
    },
  },
  ar: {
    skip: 'تخطَّ إلى المحتوى',
    menu: 'القائمة',
    bookIntro: 'احجز مكالمة',
    bookFreeIntro: 'احجز مكالمة تعريفية مجانية',
    footerTagline: 'من حيث أنت إلى درجة ممولة في كندا، خطوة بخطوة.',
    rights: 'جميع الحقوق محفوظة.',
    all: 'الكل',
    copied: 'تم النسخ ✓',
    copyFailed: 'تعذّر النسخ — حدّد البريد وانسخه يدويًا.',
    lastVerified: 'آخر تحقق',
    sources: 'المصادر',
    disclaimer: 'تحقق من المصدر الرسمي قبل أن تتصرف.',
    toc: 'المحتويات',
    related: 'مواضيع ذات صلة',
    form: {
      name: 'اسمك',
      email: 'بريدك الإلكتروني',
      emailHint: 'ليتمكن أحمد من الرد عليك.',
      topic: 'الموضوع',
      topics: ['مكالمة تعريفية للإرشاد', 'الإرشاد — سؤال عن الأسعار', 'تعاون / عمل', 'موضوع آخر'],
      message: 'رسالتك',
      messagePh: 'خلفيتك وهدفك والجدول الزمني…',
      noBackend:
        'لم تُضبط خدمة إرسال بعد، لذا سيفتح زر الإرسال تطبيق البريد لديك والرسالة موجهة إلى أحمد — ولن يُرسَل شيء حتى تضغط إرسال هناك.',
      send: 'إرسال الرسالة',
      sentOk: 'تم إرسال الرسالة. سيرد عليك أحمد على بريدك الإلكتروني.',
      sentFail: 'فشل الإرسال. راسل أحمد بالبريد مباشرة — لم تصل رسالتك.',
      mailAppOk: 'سيُفتح تطبيق البريد لديك والرسالة موجهة إلى أحمد. اضغط إرسال هناك لتسليمها.',
    },
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
export function t(lang: Lang, key: UIKey) {
  return ui[lang][key];
}

export const navLabels: Record<Lang, { label: string; href: string }[]> = {
  en: [
    { label: 'Story', href: '/story/' },
    { label: 'Mentorship', href: '/mentorship/' },
    { label: 'Learn', href: '/learn/' },
    { label: 'Opportunities', href: '/opportunities/' },
    { label: 'Contact', href: '/contact/' },
  ],
  ar: [
    { label: 'قصتي', href: '/ar/story/' },
    { label: 'الإرشاد', href: '/ar/mentorship/' },
    { label: 'تعلّم', href: '/ar/learn/' },
    { label: 'الفرص', href: '/ar/opportunities/' },
    { label: 'تواصل', href: '/ar/contact/' },
  ],
};
