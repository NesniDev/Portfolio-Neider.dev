import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite';
// https://astro.build/config
export default defineConfig({
  site: 'https://neider.dev/',

  integrations: [
    react(),
    sitemap({
      filter: (page) => page !== 'https://neider.dev/'
    })
  ],

  output: 'server',

  adapter: vercel({
    functionPerRoute: false
  }),

  viewTransitions: true,

  vite: {
    plugins: [tailwindcss()]
  }
})