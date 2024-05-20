import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideFileRouter } from '@analogjs/router';
import { provideContent, withMarkdownRenderer } from '@analogjs/content';
import { withInMemoryScrolling, withViewTransitions } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideFileRouter(
      withViewTransitions(),
      withInMemoryScrolling({ anchorScrolling: 'enabled' }),
    ),
    provideContent(withMarkdownRenderer()),
  ],
};
