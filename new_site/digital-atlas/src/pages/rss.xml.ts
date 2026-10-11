import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { slugOf, live } from '../lib/url';

export async function GET(context: any) {
  const articles = (await getCollection('articles')).filter(live('en'));
  const guides = (await getCollection('guides')).filter(live('en'));
  return rss({
    title: `${site.author} — Learn`,
    description: site.description,
    site: context.site ?? site.siteUrl,
    items: [
      ...articles.map((w: any) => ({
        title: w.data.title,
        description: w.data.summary,
        pubDate: new Date(w.data.date),
        link: `/learn/articles/${slugOf(w)}/`,
      })),
      ...guides.map((w: any) => ({
        title: w.data.title,
        description: w.data.summary,
        pubDate: new Date(w.data.publishedDate),
        link: `/learn/guides/${slugOf(w)}/`,
      })),
    ],
  });
}
