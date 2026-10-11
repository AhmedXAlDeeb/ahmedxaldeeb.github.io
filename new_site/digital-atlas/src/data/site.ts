export const site = {
  title: 'Ahmed Soliman — The Digital Atlas',
  shortTitle: 'The Digital Atlas',
  description:
    'Personal site of Ahmed Soliman: story, 1:1 mentorship for fully funded MSc/PhD study in Canada, guides, sessions, and selected AI work.',
  author: 'Ahmed Soliman',
  siteUrl: 'https://ahmedxaldeeb.github.io',
  email: 'ahmed.mohammed031@eng-st.cu.edu.eg',
  phone: '+20-115-411-8192',
  profiles: {
    github: 'https://github.com/AhmedXAlDeeb',
    linkedin: 'https://linkedin.com/in/ahmed-mohamed-aldeeb',
    // TODO(ahmed): add Google Scholar / ORCID URLs
    scholar: '',
    orcid: '',
  },
  // Free intro-call booking: Google Calendar appointment page (embed + link).
  bookingUrl: 'https://calendar.app.google/L2ZpLWzPEmC3RkaR8',
  // Payment details are sent after the intro call — no payment link on the site.
  // Contact form: paste a Formspree/Web3Forms endpoint to deliver messages
  // straight to your inbox. While empty, the form composes an email in the
  // visitor's mail app instead — it never silently fails.
  // TODO(ahmed): add form endpoint, e.g. 'https://formspree.io/f/xxxxxx'
  contactFormEndpoint: '',
  taglineAr: 'من حيث أنت الآن إلى درجة ممولة في كندا — خطوة بخطوة.',
  descriptionAr:
    'الموقع الشخصي لأحمد سليمان: قصته، إرشاد فردي لدراسة الماجستير والدكتوراه الممولة في كندا، أدلة وجلسات وأعمال مختارة.',
};

export const nav = [
  { label: 'Story', href: '/story/' },
  { label: 'Mentorship', href: '/mentorship/' },
  { label: 'Learn', href: '/learn/' },
  { label: 'Contact', href: '/contact/' },
];
