import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { MetaTag } from '@analogjs/router';
import { injectContent, injectContentFiles } from '@analogjs/content';
import { WorkshopAttributes } from 'src/app/models/workshop.model';
import { Speaker } from 'src/app/models/speaker.model';
import { injectSpeaker, injectSpeakers } from '../speakers/resolvers';
import { map } from 'rxjs';

export function injectActiveWorkshops(): WorkshopAttributes[] {
  return injectContentFiles<WorkshopAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/workshops/'),
  )
    .map((workshop) => workshop.attributes as unknown as WorkshopAttributes)
    .map((workshop) => ({
      ...workshop,
      authors: workshop.authors.map((author) => injectSpeaker(author?.slug)),
    }));
}

export function injectPastWorkshopContent() {
  const speakers = injectSpeakers();
  return injectContent<WorkshopAttributes>({
    param: 'slug',
    subdirectory: 'workshops/past',
  }).pipe(
    map((workshop) => {
      const workshopData = {
        content: workshop.content as string,
        attributes: {
          ...workshop.attributes,
          authors: workshop.attributes.authors.map((author) =>
            speakers.find((speaker) => speaker.slug === author?.slug),
          ),
        } as WorkshopAttributes,
      };
      return workshopData;
    }),
  );
}

export function injectWorkshopContent() {
  const speakers = injectSpeakers();
  return injectContent<WorkshopAttributes>({
    param: 'slug',
    subdirectory: 'workshops',
  }).pipe(
    map((workshop) => {
      const workshopData = {
        content: workshop.content as string,
        attributes: {
          ...workshop.attributes,
          authors: workshop.attributes.authors.map((author) =>
            speakers.find((speaker) => speaker.slug === author?.slug),
          ),
        } as WorkshopAttributes,
      };
      return workshopData;
    }),
  );
}

function injectActiveWorkshopAttributes(
  route: ActivatedRouteSnapshot,
): WorkshopAttributes {
  let workshop =
    injectContentFiles<WorkshopAttributes>().find(
      (contentFile) =>
        contentFile.filename ===
          `/src/content/workshops/${route.params['slug']}.md` ||
        contentFile.filename ===
          `/src/content/workshops/past/${route.params['slug']}.md` ||
        contentFile.slug === route.params['slug'],
    )!.attributes || null;

  return {
    ...workshop,
    authors: workshop.authors.map((author) => injectSpeaker(author?.slug)),
  };
}

function textCleaner(text: string): string {
  // removes tag html and replace &#8217; with '
  return text?.replace(/<\/?[^>]+(>|$)/g, '')?.replaceAll('&#8217;', "'");
}

function getUrl(url: string): string {
  // checks if url is external
  if (!url) return '';
  return url.includes('http') ? url : 'https://ngrome.io' + url;
}

function addAuthors(description: string, authors: Speaker[]): string {
  return (
    textCleaner(description) +
    ' | Authors: ' +
    authors.map((a) => a.name).join(', ')
  );
}

export const postTitleResolver: ResolveFn<string> = (route, state) =>
  'NG Rome - ' + injectActiveWorkshopAttributes(route).title;

export const postMetaSlugResolver: ResolveFn<MetaTag[]> = (route) => {
  const workshop: WorkshopAttributes = injectActiveWorkshopAttributes(route);
  return [
    {
      name: 'description',
      content: addAuthors(workshop?.description || '', workshop.authors),
    },
    {
      property: 'og:url',
      content: getUrl(workshop?.link),
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: 'NG Rome - ' + workshop?.title,
    },
    {
      property: 'og:description',
      content: addAuthors(workshop?.description || '', workshop.authors),
    },
    {
      property: 'og:image',
      content: getUrl(workshop?.image),
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
      content: getUrl(workshop?.link),
    },
    {
      name: 'twitter:title',
      content: 'NG Rome - ' + workshop?.title,
    },
    {
      name: 'twitter:description',
      content: addAuthors(workshop?.description || '', workshop.authors),
    },
    {
      name: 'twitter:image',
      content: getUrl(workshop?.image),
    },
  ];
};
