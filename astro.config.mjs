import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://budbud.eu',
  integrations: [tailwind(), svelte()],
  redirects: {
    '/': {
      status: 302,
      destination: '/maintenance',
    },
  }
});