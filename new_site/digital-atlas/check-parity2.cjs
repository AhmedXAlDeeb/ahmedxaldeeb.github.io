const fs = require('fs');
const R = (p) => fs.readFileSync(p, 'utf8');
function heads(p) {
  const h = R(p);
  return [...h.matchAll(/<h([12])[^>]*>([\s\S]*?)<\/h\1>/g)].map(m => 'h' + m[1] + ': ' + m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 60));
}
for (const [a, b] of [['dist/index.html', 'dist/ar/index.html'], ['dist/contact/index.html', 'dist/ar/contact/index.html']]) {
  console.log('== EN ' + a);
  heads(a).forEach(x => console.log('   ' + x));
  console.log('== AR ' + b);
  heads(b).forEach(x => console.log('   ' + x));
}
function liCount(p) {
  const h = R(p);
  return (h.match(/<li[\s>]/g) || []).length;
}
console.log('EN home li:', liCount('dist/index.html'), '| AR home li:', liCount('dist/ar/index.html'));
for (const f of ['dist/index.html', 'dist/ar/index.html']) {
  const h = R(f);
  console.log(f, '| strip-list:', (h.match(/strip-list/g) || []).length,
    '| steps-class:', (h.match(/class="steps"/g) || []).length);
}
for (const key of ['strip-list', 'class="steps"', 'Cairo University', 'journey-stop']) {
  const a = R('dist/index.html').includes(key), b = R('dist/ar/index.html').includes(key);
  if (a !== b) console.log('HOME DIFF "' + key + '": en=' + a + ' ar=' + b);
}
