import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { MetaTag } from '@analogjs/router';
import {
  injectContentFiles,
} from '@analogjs/content';
import { WorkshopAttributes } from 'src/app/models/workshop.model';

export function injectActiveWorkshops(): WorkshopAttributes[] {
  const files = injectContentFiles<WorkshopAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/workshops/'),
  ).map((workshop) => workshop.attributes as unknown as WorkshopAttributes);

  return files;
}

function injectActiveWorkshopAttributes(
  route: ActivatedRouteSnapshot,
): WorkshopAttributes {
  const file = injectContentFiles<WorkshopAttributes>().find(
    (contentFile) =>
      contentFile.filename ===
        `/src/content/workshops/${route.params['slug']}.md` ||
      contentFile.slug === route.params['slug'],
  );

  return file!.attributes;
}

export const postTitleResolver: ResolveFn<string> = (route) =>
  'NG Rome - ' + injectActiveWorkshopAttributes(route).title;

export const postMetaSlugResolver: ResolveFn<MetaTag[]> = (route) => {
  const workshop: WorkshopAttributes = injectActiveWorkshopAttributes(route);
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
