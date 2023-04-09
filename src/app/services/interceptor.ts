import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

const AUTH = `f74b94fc5a63a38e82b0a1971d9b7d0a1fa06c9e06fc25eaef26d1dfca084f7a`;

@Injectable()
export class ApolloInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Filter your endpoint in order to only edit the graphql-related requests
    if (req.url.indexOf('/graphql') > -1) {
      // Get your jwt from your usual source, can be a facade, a service, or even sync data like localStorage

      // Simply add the Authorization header to the request
      const clone = req.clone({
        setHeaders: {
          Authorization: `Bearer ${AUTH}`,
        },
      });
      // And you're done !
      return next.handle(clone);
    }
    // If it's not a graphql request, just give it to the next handler.
    return next.handle(req);
  }
}
