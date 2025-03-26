import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideFileRouter } from '@analogjs/router';
import { provideContent, withMarkdownRenderer } from '@analogjs/content';
import { withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideCloudinaryLoader } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideFileRouter(
      withViewTransitions(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
    provideContent(withMarkdownRenderer()),
    provideCloudinaryLoader(`https://res.cloudinary.com/dp1gwjz5w`),
  ],
};
