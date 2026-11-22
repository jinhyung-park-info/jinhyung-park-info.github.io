import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every tab of the site is backed by one folder under src/content/.
// Add, edit or delete a Markdown file there (or use /admin) and the site updates.

const md = (folder: string) => glob({ pattern: '**/*.md', base: `./src/content/${folder}` });

const link = z.object({ label: z.string(), url: z.string() });

const profile = defineCollection({
  loader: md('profile'),
  schema: z.object({
    name: z.string(),
    headline: z.string(),
    location: z.string().optional(),
    email: z.string().optional(),
    links: z.array(link).default([]),
    interests: z.array(z.string()).default([]),
  }),
});

const experience = defineCollection({
  loader: md('experience'),
  schema: z.object({
    organization: z.string(),
    role: z.string(),
    location: z.string().optional(),
    start: z.string(), // e.g. "2021-12"
    end: z.string().default('Present'),
    category: z.enum(['work', 'research', 'mentorship', 'military', 'other']).default('work'),
    order: z.number().default(0), // higher shows first
  }),
});

const education = defineCollection({
  loader: md('education'),
  schema: z.object({
    school: z.string(),
    degree: z.string(),
    location: z.string().optional(),
    start: z.string().optional(),
    end: z.string(),
    order: z.number().default(0),
  }),
});

const honors = defineCollection({
  loader: md('honors'),
  schema: z.object({
    title: z.string(),
    issuer: z.string().optional(),
    year: z.string().optional(),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  loader: md('projects'),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string().optional(),
    context: z.string().optional(), // e.g. "NAVER" or "Personal"
    tags: z.array(z.string()).default([]),
    links: z.array(link).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  loader: md('publications'),
  schema: z.object({
    title: z.string(),
    authors: z.string(), // write your own name exactly as in `profile.name` to highlight it
    venue: z.string(),
    year: z.number(),
    links: z.array(link).default([]),
    selected: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: md('blog'),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { profile, experience, education, honors, projects, publications, blog };
