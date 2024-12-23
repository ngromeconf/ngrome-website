import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { MetaTag } from '@analogjs/router';
import { PageAttributes } from '../../models/page-attributes';
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

export const postTitleResolver: ResolveFn<string> = (route) =>
  'NG Rome - ' + injectActivePageAttributes(route).title;

function getUrl(url: string): string {
  // checks if url is external
  return url?.includes('http') ? url : 'https://ngrome.io' + url;
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
      property: 'og:url',
      content: getUrl(page.url),
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
      content: getUrl(page.image),
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
      content: getUrl(page.url),
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
      content: getUrl(page.image),
    },
  ];
};
