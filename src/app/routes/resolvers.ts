import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { MetaTag } from '@analogjs/router';
import { PageAttributes } from '../models/page-attributes';
import { injectContentFiles } from '@analogjs/content';

// temporary
function injectActivePostAttributes(route: ActivatedRouteSnapshot) {
  return {
    fullname: route.params['name'] as string,
    ticketref: route.params['reference'] as string,
  };
}

function injectActivePageAttributes(
  route: ActivatedRouteSnapshot,
): PageAttributes {
  const file = injectContentFiles<PageAttributes>().find(
    (contentFile) =>
      contentFile.filename === `/src/content/${route.data['slug']}.md` ||
      contentFile.slug === route.data['slug'],
  );

  return file!.attributes;
}

export const postMetaThankResolver: ResolveFn<MetaTag[]> = (route, state) => {
  const postAttributes = injectActivePostAttributes(route);
  const metaPage = postMetaPageResolver(route, state);

  return [
    ...(metaPage as MetaTag[]),
    {
      property: 'og:image',
      content: `https://myticket.ngrome.io/api/og?fullname=${postAttributes.fullname}&ticketref=${postAttributes.ticketref}`,
    },
  ];
};

export const postMetaPageResolver: ResolveFn<MetaTag[]> = (route) => {
  const page: PageAttributes = injectActivePageAttributes(route);
  return [
    {
      name: 'description',
      content: page.description,
    },
    {
      name: 'author',
      content: page.author,
    },
    {
      property: 'og:url',
      content: 'https://ngrome.io' + page.url,
    },
    {
      property: 'og:type',
      content: 'website',
    },

    {
      property: 'og:title',
      content: 'NG Rome - ' + page.title,
    },
    {
      property: 'og:description',
      content: page.description,
    },
    {
      property: 'og:image',
      content: 'https://ngrome.io' + page.image,
    },

    {
      name: 'twitter:card',
      content: page.sizeImage,
    },
    {
      property: 'twitter:domain',
      content: 'ngrome.io',
    },
    {
      property: 'twitter:url',
      content: 'https://ngrome.io' + page.url,
    },
    {
      name: 'twitter:title',
      content: 'NG Rome - ' + page.title,
    },
    {
      name: 'twitter:description',
      content: page.description,
    },
    {
      name: 'twitter:image',
      content: 'https://ngrome.io' + page.image,
    },
  ];
};
