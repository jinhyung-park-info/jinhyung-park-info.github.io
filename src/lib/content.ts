import { getCollection, getEntry } from 'astro:content';

const isProd = import.meta.env.PROD;

/** Hidden items are left out of the public site but still shown (with a badge) in `npm run dev`. */
export const isVisible = ({ data }: { data: { hidden?: boolean } }) => !(isProd && data.hidden);

export async function getProfile() {
  const profile = await getEntry('profile', 'profile');
  if (!profile) throw new Error('Missing src/content/profile/profile.md');
  return profile;
}

/** Posts, newest first. Hidden posts are visible only in `npm run dev`. */
export async function getPosts() {
  const posts = await getCollection('blog', isVisible);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getProjects() {
  const projects = await getCollection('projects', isVisible);
  return projects.sort((a, b) => b.data.order - a.data.order || a.data.title.localeCompare(b.data.title));
}

export async function getPublications() {
  const pubs = await getCollection('publications', isVisible);
  return pubs.sort((a, b) => b.data.year - a.data.year || a.data.title.localeCompare(b.data.title));
}

export const byOrder = <T extends { data: { order: number } }>(items: T[]) =>
  [...items].sort((a, b) => b.data.order - a.data.order);

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
}

/** "2021-12" -> "Dec 2021", "2024" -> "2024", "Present" -> "Present" */
export function formatMonth(value?: string) {
  if (!value) return '';
  const m = /^(\d{4})-(\d{1,2})$/.exec(String(value).trim());
  if (!m) return String(value);
  const d = new Date(Date.UTC(Number(m[1]), Number(m[2]) - 1, 1));
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}

export function range(start?: string, end?: string) {
  const s = formatMonth(start);
  const e = formatMonth(end);
  return s && e ? `${s} – ${e}` : s || e;
}

export const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '');
