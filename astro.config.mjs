// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: true
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()],
  // Deployed at the OVH root domain, so no `base` path is needed.
  site: 'https://abogadosrcg.com',
});