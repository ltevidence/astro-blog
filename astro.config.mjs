import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://ltevidence.github.io',
  base: '/astro-blog',
  integrations: [mdx()]
});