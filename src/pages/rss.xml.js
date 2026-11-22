import rss from '@astrojs/rss';
import { getPosts, getProfile } from '../lib/content';

export async function GET(context) {
  const profile = await getProfile();
  const posts = (await getPosts()).filter((p) => !p.data.hidden);
  return rss({
    title: `${profile.data.name} — Blog`,
    description: [profile.data.headline, profile.data.tagline].filter(Boolean).join(' · '),
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
  });
}
