const fs = require('fs');
const R = (p) => fs.readFileSync(p, 'utf8');
const pairs = [
  ['dist/index.html', 'dist/ar/index.html'],
  ['dist/story/index.html', 'dist/ar/story/index.html'],
  ['dist/mentorship/index.html', 'dist/ar/mentorship/index.html'],
  ['dist/learn/index.html', 'dist/ar/learn/index.html'],
  ['dist/contact/index.html', 'dist/ar/contact/index.html'],
  ['dist/learn/articles/ielts-start-here/index.html', 'dist/ar/learn/articles/ielts-start-here/index.html'],
  ['dist/learn/guides/choosing-a-program/index.html', 'dist/ar/learn/guides/choosing-a-program/index.html'],
  ['dist/learn/sessions/index.html', 'dist/ar/learn/sessions/index.html'],
];
const strip = (s) => s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
for (const [en, ar] of pairs) {
  const A = R(en), B = R(ar);
  console.log('== ' + en);
  // heading outline
  const heads = (h) => [...h.matchAll(/<h([12])[^>]*>([\s\S]*?)<\/h\1>/g)].map(m => 'h' + m[1] + ':' + strip(m[2]).slice(0, 50));
  const ha = heads(A), hb = heads(B);
  console.log('  EN h1/h2 count: ' + ha.length + ' | AR h1/h2 count: ' + hb.length);
  // key blocks
  for (const s of ['fact-strip', 'sticky-cta', 'price-toggle', 'booking-embed', 'series-nav', 'data-topic=', 'faq', 'journey-stop', 'section--invert', 'strip-list', 'mini-timeline', 'class="loop', 'policy-row', 'mentor-grid', 'will-card', 'cred-chips', 'comparison', 'roadmap', 'seats-badge', 'checklist', 'video', 'stay', 'toc']) {
    const x = A.includes(s), y = B.includes(s);
    if (x !== y) console.log('  DIFF "' + s + '": en=' + x + ' ar=' + y);
  }
  // counts
  const cnt = (h, re) => (h.match(re) || []).length;
  const pairs2 = [['<li', 'li'], ['<section', 'sections'], ['<details', 'details'], ['<article', 'articles']];
  for (const [re, label] of pairs2) {
    const a = cnt(A, new RegExp(re, 'g')), b = cnt(B, new RegExp(re, 'g'));
    if (Math.abs(a - b) > 2) console.log('  COUNT ' + label + ': en=' + a + ' ar=' + b);
  }
}
