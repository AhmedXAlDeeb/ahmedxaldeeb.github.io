import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    // Either `summary` (site shape) or `description` (article-pack shape) is required.
    summary: z.string().optional(),
    description: z.string().optional(),
    // Accepts quoted strings ("2025-09-01") and unquoted YAML dates (2026-10-11).
    date: z.union([z.string(), z.date()]).transform((d) => (typeof d === 'string' ? d : d.toISOString().slice(0, 10))),
    updated: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('guides'),
    draft: z.boolean().default(false),
    relatedProjects: z.array(z.string()).default([]),
    // Article-pack fields (all optional). `lang` should match the folder (en/ar).
    lang: z.enum(['en', 'ar']).optional(),
    translationKey: z.string().optional(),
    translationStatus: z.string().optional(),
    series: z.string().optional(),
    seriesOrder: z.coerce.number().optional(),
    sources: z.array(z.object({ title: z.string(), url: z.string() })).default([]),
  })
    .transform((d) => ({ ...d, summary: d.summary ?? d.description ?? '' }))
    .refine((d) => d.summary.length > 0, { message: 'Article needs `summary` or `description` in frontmatter.' }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedDate: z.string(),
    lastVerified: z.string(),
    contentType: z.enum(['official', 'experience', 'general-advice']),
    sources: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    topic: z.string().default('planning'),
    draft: z.boolean().default(false),
  }),
});

const sessions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sessions' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    timezone: z.string().default('Africa/Cairo'),
    durationMin: z.number().default(60),
    status: z.enum(['upcoming', 'past']),
    topic: z.array(z.string()).default([]),
    registrationUrl: z.string().optional(),
    videoUrl: z.string().optional(),
    slidesUrl: z.string().optional(),
    takeaways: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles, guides, sessions };
