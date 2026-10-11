#!/usr/bin/env node
/**
 * Scaffold a new article with the canonical frontmatter.
 *
 *   npm run new:article -- --slug=my-topic --title="My title" [--lang=en|ar]
 *                        [--series=ielts-prep --order=3] [--tags=ielts,planning]
 *                        [--category=applications] [--date=2026-10-20]
 *
 * Creates src/content/articles/<lang>/<slug>.md with draft:true.
 * For a translated pair, run twice with the SAME slug (once per lang).
 * Series parts: same `series` id in every part, unique `seriesOrder` per part.
 */
import { writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function arg(name, fallback = undefined) {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : fallback;
}
function fail(msg) {
  console.error(`new:article: ${msg}`);
  process.exit(1);
}

const slug = arg('slug', '');
const title = arg('title', '');
const lang = arg('lang', 'en');
const series = arg('series', '');
const order = arg('order', '');
const tags = arg('tags', 'ielts');
const category = arg('category', 'test-prep');
const date = arg('date', '') || new Date().toISOString().slice(0, 10);

if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) fail('--slug must be lowercase letters, numbers and dashes (e.g. ielts-reading-plan).');
if (!title) fail('--title is required.');
if (!['en', 'ar'].includes(lang)) fail('--lang must be en or ar.');
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) fail('--date must be YYYY-MM-DD.');
if (order && !/^\d+$/.test(order)) fail('--order must be a number.');

const dir = join(root, 'src', 'content', 'articles', lang);
const file = join(dir, `${slug}.md`);
if (existsSync(file)) fail(`${file} already exists — pick another slug.`);

const frontmatter = [
  '---',
  `title: "${title.replace(/"/g, '\\"')}"`,
  `summary: "TODO: one sentence — who it helps and what it covers."`,
  `date: "${date}"`,
  `tags: [${tags.split(',').map((t) => t.trim()).filter(Boolean).join(', ')}]`,
  `category: ${category}`,
  ...(series ? [`series: ${series}`, ...(order ? [`seriesOrder: ${order}`] : [])] : []),
  'draft: true   # flip to false to publish',
  '---',
  '',
  '> TODO: delete this callout, or replace it with your own honesty note.',
  '',
  'TODO: intro paragraph — what this article covers and who it is for.',
  '',
  '## TODO: first section heading',
  '',
  'TODO: body.',
  '',
  '## Quick recap',
  '',
  '1. TODO: takeaway',
  '',
].join('\n');

mkdirSync(dir, { recursive: true });
writeFileSync(file, frontmatter);
console.log(`Created ${file}`);
console.log(`Next: fill the TODOs, mirror it as src/content/articles/${lang === 'en' ? 'ar' : 'en'}/${slug}.md for the other language, set draft:false, run npm run build.`);
