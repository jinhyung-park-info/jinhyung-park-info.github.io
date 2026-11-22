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
    headline: z.string(), // first line on the home page (bold)
    tagline: z.string().optional(), // second line on the home page
    location: z.string().optional(),
    photo: z.string().optional(), // e.g. /images/profile.jpg (file in public/images/)
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
    hidden: z.boolean().default(false), // true = not shown on the public site (still visible in `npm run dev`)
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
    hidden: z.boolean().default(false), // true = not shown on the public site (still visible in `npm run dev`)
  }),
});

const honors = defineCollection({
  loader: md('honors'),
  schema: z.object({
    title: z.string(),
    issuer: z.string().optional(),
    year: z.string().optional(),
    order: z.number().default(0),
    hidden: z.boolean().default(false), // true = not shown on the public site (still visible in `npm run dev`)
  }),
});

const projects = defineCollection({
  loader: md('projects'),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    image: z.string().optional(), // teaser image, e.g. /images/my-project.png (file in public/images/)
    period: z.string().optional(),
    context: z.string().optional(), // e.g. "NAVER" or "Personal"
    tags: z.array(z.string()).default([]),
    links: z.array(link).default([]),
    featured: z.boolean().default(false),
    hidden: z.boolean().default(false), // true = not shown on the public site (still visible in `npm run dev`)
    order: z.number().default(0),
  }),
});

const publications = defineCollection({
  loader: md('publications'),
  schema: z.object({
    title: z.string(),
    authors: z.string(), // write your own name exactly as in `profile.name` to highlight it
    venue: z.string(),
    year: z.number(),
    image: z.string().optional(), // thumbnail, e.g. /images/paper.png
    links: z.array(link).default([]),
    selected: z.boolean().default(false),
    hidden: z.boolean().default(false), // true = not shown on the public site (still visible in `npm run dev`)
  }),
});

const blog = defineCollection({
  loader: md('blog'),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(), // thumbnail, e.g. /images/post.png
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    hidden: z.boolean().default(false), // true = not shown on the public site (still visible in `npm run dev`)
  }),
});

export const collections = { profile, experience, education, honors, projects, publications, blog };
