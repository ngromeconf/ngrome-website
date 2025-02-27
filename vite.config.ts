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
          '/agenda',
          '/sponsors',
          '/code-of-conduct',
          '/terms-and-privacy',
          '/media-kit',
          '/workshops',
          '/workshops/angular-architects-signal-ddd-mfe-2024-06-26',
          '/workshops/2024-06-25-cloudnary-for-angular',
          '/workshops/2024-06-25-authentication-step-by-step',
          '/workshops/2024-06-25-generative-ai-masterclass',
          '/workshops/2024-06-25-angular-performance-masterclass',
          '/workshops/2024-06-26-angular-architects-signal-ddd-mfe',
          '/workshops/2024-06-26-angular-mastering-ngrx-signalstore',
          '/workshops/2024-06-26-ng-girls-workshop',
          '/workshops/2023-11-30-generative-ai-masterclass',
          '/workshops/2023-11-30-ng-girls-workshop',
          '/workshops/2023-11-30-staying-safe-with-angular',
          '/speakers',
          '/thank-you',
          '/venue',
          '/api/v1/sponsors',
          '/api/v1/agenda',
          '/api/v1/tickets',
          '/api/v1/tito-releases',
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
