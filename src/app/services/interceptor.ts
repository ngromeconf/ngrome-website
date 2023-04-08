import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

const AUTH = `1SmYIUeXv0lWhSO9aLsDDZKfDPgCxCyykdng2c4irA6OozwFBySKmnDOuylGWT0SoE8YcQJDfK7iMg2p3yX8Br5WcHGwdGFZQjJ9ZJPV0aeho3UoMIcPCw4c7XeDWBTBq6wCWMg4cHuEtMYIi6hnKHAcyk`;

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
