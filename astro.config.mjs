import cloudflare from '@astrojs/cloudflare'
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  site: 'https://gadmin.app',
  integrations: [sitemap()],
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
    ssr: {
      noExternal: ['path-to-regexp'],
    },
  },
})
