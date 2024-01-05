import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { MetaTag } from '@analogjs/router';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { WorkshopAttributes } from '../models/workshop.model';

// temporary
function injectActivePostAttributes(route: ActivatedRouteSnapshot) {
  console.log('injectActivePostAttributes: ', route.params);
  return {
    fullname: route.params['name'] as string,
    ticketref: route.params['reference'] as string,
  };
}

export const postMetaThankResolver: ResolveFn<MetaTag[]> = (route) => {
  const postAttributes = injectActivePostAttributes(route);

  return [
    {
      name: 'description',
      content: 'NGRome 2024 - Thank you for your purchase!',
    },
    {
      name: 'author',
      content: 'Analog Team',
    },
    {
      property: 'og:title',
      content: 'NGRome 2024 - Thank you for your purchase!',
    },
    {
      property: 'og:description',
      content:
        'We are looking forward to seeing you at the conference! NGRome June 27 2024',
    },
    {
      property: 'og:image',
      content: `https://myticket.ngrome.io/api/og?fullname=${postAttributes.fullname}&ticketref=${postAttributes.ticketref}`,
    },
  ];
};
function injectActiveSlugAttributes() {
  const route = inject(ActivatedRoute);
  // viene eseguito prima del resolver
  return route.snapshot.data['workshop']; //undefined
}
export const postMetaSlugResolver: ResolveFn<MetaTag[]> = (route) => {
  const workshop: WorkshopAttributes = injectActiveSlugAttributes();
  return [
    {
      name: 'description',
      content: workshop?.description,
    },
    {
      name: 'og:url',
      content: 'https://ngrome.io/workshops/' + workshop?.slug,
    },
    {
      name: 'og:type',
      content: 'website',
    },

    {
      name: 'og:title',
      content: 'NG Rome - ' + workshop?.title,
    },
    {
      name: 'og:description',
      content: workshop?.description,
    },
    {
      name: 'og:image',
      content: 'https://ngrome.io/' + workshop?.image,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      property: 'twitter:domain',
      content: 'ngrome.io',
    },
    {
      property: 'twitter:url',
      content: 'https://ngrome.io/workshops/' + workshop?.slug,
    },
    {
      name: 'twitter:title',
      content: 'NG Rome - ' + workshop?.title,
    },
    {
      name: 'twitter:description',
      content: workshop?.description,
    },
    {
      name: 'twitter:image',
      content: 'https://ngrome.io/' + workshop?.image,
    },
  ];
};

function getWorkshop(slug: string): Observable<WorkshopAttributes> {
  const http = inject(HttpClient);
  const router = inject(Router);
  return http.get<WorkshopAttributes[] | null>(`/api/v1/workshops`).pipe(
    map((workshops: WorkshopAttributes[]) => {
      if (!workshops) {
        router.navigate(['/404']);
      }
      return workshops!;
    }),
    map((workshops: WorkshopAttributes[]) =>
      workshops.find((workshop) => workshop?.slug === slug)
    ),
    map((workshop: WorkshopAttributes) => {
      if (!workshop) {
        router.navigate(['/404']);
      }
      console.log('get workshop');

      return workshop!;
    })
  );
}

export const WorkshopResolver: ResolveFn<
  Observable<WorkshopAttributes>
> = async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);

  const slug: string | null = route.paramMap.get('slug');

  if (!slug) {
    router.navigate(['/404']);
  } else {
  }

  const workshops$ = await getWorkshop(slug || '');
  return workshops$;
};
