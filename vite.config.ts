/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// Only run in Netlify CI
if (process.env['NETLIFY'] === 'true') {
  let base = process.env['URL'];

  if (process.env['CONTEXT'] === 'deploy-preview') {
    base = `${process.env['DEPLOY_PRIME_URL']}/`;
  }

  // set process.env.VITE_ANALOG_PUBLIC_BASE_URL = base URL
  process.env['VITE_ANALOG_PUBLIC_BASE_URL'] = base;
}
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      static: true,
      prerender: {
        routes: async () => [
          '/',
          '/about',
          '/sponsors',
          '/code-of-conduct',
          '/terms-and-privacy',
          '/workshops',
          '/thank-you',
          '/api/v1/workshops',
          '/api/v1/sponsors',
        ],
        sitemap: {
          host:
            process.env['VITE_ANALOG_PUBLIC_BASE_URL'] || 'https://ngrome.io',
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
