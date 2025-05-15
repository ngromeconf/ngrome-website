import { injectContentFiles } from '@analogjs/content';
import { Agenda, Event } from 'src/app/models/agenda.model';
import { Speaker } from 'src/app/models/speaker.model';
import { injectActiveWorkshops } from '../workshops/resolvers';

export function injectSpeaker(slug: string): Speaker {
  return (
    injectContentFiles<Speaker>().find(
      (contentFile) =>
        contentFile.filename === `/src/content/speakers/${slug}.md`,
    )!.attributes || null
  );
}

export function injectSpeakers(): Speaker[] {
  return (
    injectContentFiles<Speaker>((contentFile) =>
      contentFile.filename.includes('/src/content/speakers/'),
    ).map((speaker) => speaker.attributes as unknown as Speaker) || []
  );
}

export function injectActiveSpeakers(): Speaker[] {
  // return agenda
  const agende = injectContentFiles<{ agenda: Agenda[] }>().find(
    (contentFile) => contentFile.filename === `/src/content/agenda.md`,
  )?.attributes.agenda as Agenda[];

  const agenda = [
    ...calculateTime(agende[0].events, agende[0].start),
    ...calculateTime(agende[1].events, agende[1].start),
  ];

  const workshops = injectActiveWorkshops();

  // return speakers
  let speakers = injectSpeakers()
    .filter((speaker) => speaker.visible && speaker.edition === 'current') // return only visible === true
    .map((speaker) => {
      speaker.events = [];
      workshops.forEach((workshop) => {
        workshop.authors.forEach((author) => {
          if (author.slug === speaker.slug) {
            speaker.events.push({
              date: workshop.date,
              link: workshop.link!,
              title: `Workshop: ${workshop.title}`,
              time: workshop.time,
              isTalk: false,
            });
          }
        });
      });

      agenda.forEach((evento) => {
        evento?.speakers?.forEach((agendaSpeaker) => {
          if (speaker.slug === agendaSpeaker.slug) {
            speaker.events?.push({
              title: `${evento.type}: ${evento?.subtitle || evento.title}`,
              time: `${evento.startTime} - ${evento.endTime}`,
              date: '27 June',
              link: `${evento.slug}`,
              isTalk: true,
            });
          }
        });
      });

      return speaker;
    });
  const speakerLenght = speakers.length;

  return speakers.sort((a, b) => {
    let fa = a?.name || '',
      fb = b?.name || '';

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
}

export function injectAgenda(): Agenda[] {
  // get speaker
  const speakers = injectContentFiles<Speaker>((contentFile) =>
    contentFile.filename.includes('/src/content/speakers/'),
  ).map((speaker) => speaker.attributes as unknown as Speaker);

  // get agenda
  let agenda = injectContentFiles<{ agenda: Agenda[] }>().find(
    (contentFile) => contentFile.filename === `/src/content/agenda.md`,
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
    if (talk.track !== 'Main Stage') {
      startTime = endTime; // Imposta l'orario di inizio del prossimo talk
    }
    return talk;
  });
}
