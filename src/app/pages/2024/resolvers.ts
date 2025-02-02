import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { MetaTag } from '@analogjs/router';
import { PageAttributes } from '../../models/page-attributes';
import { injectContentFiles } from '@analogjs/content';
import { Agenda } from 'src/app/models/agenda.model';
import { Speaker } from 'src/app/models/speaker.model';

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
  const file = injectContentFiles<PageAttributes>().find((contentFile) => {
    console.log(
      `/src/content/past-edition/${route.data['slug']}.md` ||
        contentFile.slug === route.data['slug'],
    );
    return (
      `/src/content/past-edition/${route.data['slug']}.md` ||
      contentFile.slug === route.data['slug']
    );
  });

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

export function injectAgenda(): Agenda[] {
  // get speaker
  const speakers = injectContentFiles<Speaker>((contentFile) =>
    contentFile.filename.includes('/src/content/speakers/'),
  ).map((speaker) => speaker.attributes as unknown as Speaker);

  // get agenda
  let agenda = injectContentFiles<{ agenda: Agenda[] }>().find(
    (contentFile) =>
      contentFile.filename === `/src/content/past-edition/2024.md`,
  )?.attributes.agenda as Agenda[];

  agenda.forEach((a, i) => {
    a.events.forEach((event) => {
      let check = false;
      if (
        (event.type.includes('Talk') || event.type.includes('Keynote')) &&
        event.speakers?.length
      ) {
        event.speakers.forEach((speaker, index) => {
          // I verify that the agenda is a talk
          // I recover the speaker next to the talk
          const author = speakers?.find((s) => s.slug == speaker.slug);
          if (author) {
            check = true; // I confirm that I have recovered the talk
            event.speakers![index] = author as any;
            return;
          }
        });
      }
    });
  });

  return agenda;
}
