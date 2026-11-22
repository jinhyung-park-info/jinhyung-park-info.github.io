// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { unified } from '@astrojs/markdown-remark';

// Change this to your GitHub Pages address (https://<username>.github.io) or custom domain.
const SITE_URL = 'https://jinhyung-park-info.github.io';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  markdown: {
    // remark-math + rehype-katex render $inline$ and $$block$$ LaTeX in posts.
    processor: unified({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },
});
