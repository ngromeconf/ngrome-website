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

export const postMetaHomeResolver: ResolveFn<MetaTag[]> = () => [
  {
    name: 'description',
    content:
      'NGRome Conference: Unleash Your Angular Expertise in the Eternal City! Connect with industry experts and network with fellow enthusiasts. June 27, 2024 / Rome, Italy',
  },
  {
    name: 'author',
    content:
      'Luciano Murruni, Valentina Ricci, Raul Valentini, Giovanni Malacaria, Giuseppe Ettorre',
  },
  {
    property: 'og:title',
    content: 'NG Rome - Unleash Your Angular Expertise in the Eternal City',
  },
  {
    property: 'og:description',
    content:
      'NGRome Conference: Unleash Your Angular Expertise in the Eternal City! Connect with industry experts and network with fellow enthusiasts. June 27, 2024 / Rome, Italy',
  },
  {
    property: 'og:image',
    content: 'https://ngrome.io/photo/ngrome-cover-mmxxiv-social.jpg',
  },
];

export const postMetaAboutResolver: ResolveFn<MetaTag[]> = () => [
  {
    name: 'description',
    content:
      'NGRome Conference: Unleash Your Angular Expertise in the Eternal City! Connect with industry experts and network with fellow enthusiasts. June 27, 2024 / Rome, Italy',
  },
  {
    name: 'author',
    content:
      'Luciano Murruni, Valentina Ricci, Raul Valentini, Giovanni Malacaria, Giuseppe Ettorre',
  },
  {
    property: 'og:title',
    content: 'NG Rome - ABOUT NGROME CONFERENCE & THE TEAM',
  },
  {
    property: 'og:description',
    content:
      'NG-Rome is a non-profit community conference run by a team of volunteers. We are all active members of the tech community, and run or contribute to various free local meetups, workshops, and education initiatives. June 27, 2024 / Rome, Italy',
  },
  {
    property: 'og:image',
    content: 'https://ngrome.io/photo/ngrome-cover-mmxxiv-social.jpg',
  },
];

export const postMetaSponsorResolver: ResolveFn<MetaTag[]> = () => [
  {
    name: 'description',
    content:
      'NGRome Conference: Unleash Your Angular Expertise in the Eternal City! Connect with industry experts and network with fellow enthusiasts. June 27, 2024 / Rome, Italy',
  },
  {
    name: 'author',
    content:
      'Luciano Murruni, Valentina Ricci, Raul Valentini, Giovanni Malacaria, Giuseppe Ettorre',
  },
  {
    property: 'og:title',
    content: 'NG Rome - SPONSORS',
  },
  {
    property: 'og:description',
    content:
      "Our sponsors and partners help make the NG Rome Conference possible. Come and say 'Ciao' on the day of the conference! June 27, 2024 / Rome, Italy",
  },
  {
    property: 'og:image',
    content: 'https://ngrome.io/photo/ngrome-cover-mmxxiv-social.jpg',
  },
];
