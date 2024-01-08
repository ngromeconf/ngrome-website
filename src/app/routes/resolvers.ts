import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { MetaTag } from '@analogjs/router';

// temporary
function injectActivePostAttributes(route: ActivatedRouteSnapshot) {
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
