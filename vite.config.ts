import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Minilytics tracker, served first-party: vercel.json rewrites /js/script.js
// and /api/event to the Minilytics host. Same site id as app.loraloop.com, so
// the root-domain cookie keeps one visitor across both. No tag when unset.
function minilytics(): Plugin {
  let siteId = ''
  return {
    name: 'minilytics',
    configResolved(config) {
      siteId = config.env.VITE_MINILYTICS_SITE_ID ?? ''
    },
    transformIndexHtml() {
      if (!siteId) return
      return [{
        tag: 'script',
        attrs: { defer: true, 'data-website-id': siteId, 'data-api': '/api/event', src: '/js/script.js' },
        injectTo: 'head',
      }]
    },
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    minilytics(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    rollupOptions: {
      output: {
        // Split large, rarely-changing vendor libraries into their own chunks
        // so they cache independently of app code and don't bloat the entry.
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router'],
        },
      },
    },
  },

  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
    strictPort: false,
  },
})
