import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideFileRouter } from '@analogjs/router';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloInterceptor } from './services/interceptor';
import { InMemoryCache } from '@apollo/client/cache';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(),
    provideHttpClient(),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule, ApolloModule),
    importProvidersFrom(HttpClientModule, ApolloModule),
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://graphql.prepr.io/f74b94fc5a63a38e82b0a1971d9b7d0a1fa06c9e06fc25eaef26d1dfca084f7a',
          }),
        };
      },
      deps: [HttpLink],
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: ApolloInterceptor,
    },
  ],
};