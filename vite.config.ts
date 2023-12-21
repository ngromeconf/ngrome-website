/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

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
      static: false,
      prerender: {
        routes: async () => [
          '/',
          '/about',
          '/sponsors',
          '/code-of-conduct',
          '/terms-and-privacy',
          '/workshops',
          '/workshops/[slug]',
          '/api/v1/workshops',
          '/api/v1/workshops?slug=[slug]',
          '/api/v1/sponsors',
        ],
        sitemap: {
          host: 'https://ngrome.io',
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
