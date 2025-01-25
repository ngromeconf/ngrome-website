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

function calculateTime(talks: Event[], timeStart: string) {
  let startTime = new Date(`2024-04-03T${timeStart}:00`);

  return talks.map((talk) => {
    talk.startTime = startTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }); // Converti la data di inizio in formato orario 12h
    let minutes = 0;
    let hours = 0;
    if (talk.duration) {
      hours = Math.floor(talk.duration / 60); // Calcola le ore della durata del talk
      minutes = talk.duration % 60; // Calcola i minuti della durata del talk
    }
    const endTime = new Date(startTime); // Clona l'orario di inizio per calcolare l'orario di fine
    endTime.setHours(endTime.getHours() + hours); // Aggiungi le ore alla data di fine
    endTime.setMinutes(endTime.getMinutes() + minutes); // Aggiungi i minuti alla data di fine
    talk.endTime = endTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }); // Converti la data di fine in formato orario 12h
    startTime = endTime; // Imposta l'orario di inizio del prossimo talk
    return talk;
  });
}

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
    a.events = calculateTime(a.events, a.start);
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
