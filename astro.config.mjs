// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import nodeAdapter from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: nodeAdapter({ mode: 'standalone' }),

  integrations: [
    react()
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});