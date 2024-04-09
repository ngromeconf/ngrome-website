import { defineEventHandler } from 'h3';
import { TicketInterface } from 'src/app/models/ticket.interface';

export default defineEventHandler(() => tickets);

enum features {
  Conference = '🎟️ Conference Access In Person',
  ConferenceBreakfast = '🥐 Conference Welcome Breakfast',
  ConferenceCoffee = '☕ Coffee all day',
  ConferenceLunch = '🍝 Conference Lunch ',
  Swag = '😎 NGRome Swag',
  Workshop = '🎟️ Workshop In Person',
  WorkshopLunch = '🍕 Workshop Lunch ',
  SpeakerDinner = '🥳 Speaker Dinner ',
}

const conferenceFeatures = [
  features.Conference,
  features.ConferenceLunch,
  features.Swag,
];
const workshopFeatures = [features.Workshop, features.WorkshopLunch];
const vipFeatures = [features.SpeakerDinner];

const tickets: TicketInterface[] = [
  {
    visible: true,
    name: 'BLIND TICKET',
    subtitle: 'Get your ticket now, ticket price will increase soon!',
    price: '75',
    realPrice: '155',
    features: conferenceFeatures,
    event: 'ngrome-events/ngrome-conf-mmxxiv',
    ticket: 'blind-ticket',
    soldOut: true,
  },
  {
    visible: false,
    name: 'MODERN ANGULAR ARCHITECTURES WORKSHOP - EARLY BIRD',
    subtitle:
      'MODERN ANGULAR ARCHITECTURES: SIGNAL STORE, NX, DDD & MICRO FRONTENDS - JUNE 26',
    price: 250,
    realPrice: 310,
    features: workshopFeatures,
    event: 'ngrome-events/modern-angular-architecture',
    ticket: 'u6au8pc1wey',
    soldOut: true,
  },
  {
    visible: false,
    name: 'COMBO TICKET - MODERN ANGULAR ARCHITECTURES - EARLY BIRD',
    subtitle:
      'MODERN ANGULAR ARCHITECTURES: SIGNAL STORE, NX, DDD & MICRO FRONTENDS - JUNE 26 + NGRome Conference June 27',
    price: '310',
    popular: false,
    realPrice: '465',
    featuresDescription: 'All the features of the Conference Ticket plus:',
    features: workshopFeatures,
    event: 'ngrome-events/modern-angular-architecture',
    ticket: '6pv0sbo8z5a',
    soldOut: true,
  },
  {
    visible: false,
    name: 'VIP TICKET- EARLY BIRD',
    subtitle:
      'The best experience for your journey in Rome! This ticket is limited to 5 people and give you the possibility to choose one of the available workshops',
    bestExperience: false,
    price: '375',
    realPrice: '565',
    featuresDescription: 'All the features of the Combo Ticket plus:',
    features: [features.SpeakerDinner],
    event: 'ngrome-events/ngrome-conf-mmxxiv',
    ticket: 'sttgjfic3ma',
    soldOut: true,
  },
  {
    visible: true,
    name: 'EARLY BIRD ',
    subtitle: 'Get your ticket now, ticket price will increase soon!',
    price: 110,
    realPrice: 155,
    features: conferenceFeatures,
    event: 'ngrome-events/ngrome-conf-mmxxiv',
    ticket: 'early-bird',
    soldOut: false,
  },

  {
    visible: false,
    name: 'COMBO TICKET - MASTERING NGRX SIGNALSTORE WORKSHOP - EARLY BIRD',
    subtitle:
      'MASTERING NGRX SIGNALSTORE: FROM FUNDAMENTALS TO ADVANCED TECHNIQUES - JUNE 26 + NGRome Conference June 27',
    price: '310',
    popular: true,
    realPrice: '465',
    featuresDescription: 'All the features of the Conference Ticket plus:',
    features: workshopFeatures,
    event: 'ngrome-events/mastering-ngrx-signalstore',
    ticket: 'sxcbmgrga8y',
  },
  {
    visible: false,
    name: 'COMBO TICKET - MODERN ANGULAR ARCHITECTURES',
    subtitle:
      'MODERN ANGULAR ARCHITECTURES: SIGNAL STORE, NX, DDD & MICRO FRONTENDS - JUNE 26 + NGRome Conference June 27',
    price: '465',
    popular: true,
    featuresDescription: 'All the features of the Conference Ticket plus:',
    features: workshopFeatures,
    event: 'ngrome-events/modern-angular-architecture',
    ticket: '3b7bvqzkdym',
    soldOut: false,
  },
  {
    visible: true,
    name: 'VIP TICKET',
    subtitle:
      'The best experience for your journey in Rome! This ticket is limited to 5 people and give you the possibility to choose one of the available workshops',
    bestExperience: true,
    price: '565',
    featuresDescription: 'All the features of the Combo Ticket plus:',
    features: [features.SpeakerDinner],
    event: 'ngrome-events/ngrome-conf-mmxxiv',
    ticket: 'bdcszpol8yy',
    soldOut: false,
  },

  {
    visible: false,
    name: 'MODERN ANGULAR ARCHITECTURES WORKSHOP - REGULAR',
    subtitle:
      'MODERN ANGULAR ARCHITECTURES: SIGNAL STORE, NX, DDD & MICRO FRONTENDS - JUNE 26',
    price: 310,
    features: workshopFeatures,
    event: 'ngrome-events/modern-angular-architecture',
    ticket: 'fg1il7mh3ys',
  },

  {
    visible: false,
    name: 'MASTERING NGRX SIGNALSTORE WORKSHOP - EARLY BIRD',
    subtitle:
      'MASTERING NGRX SIGNALSTORE: FROM FUNDAMENTALS TO ADVANCED TECHNIQUES - JUNE 26',
    price: 250,
    realPrice: 310,
    features: workshopFeatures,
    event: 'ngrome-events/mastering-ngrx-signalstore',
    ticket: 'bm3uyyp6iow',
  },
  {
    visible: true,
    name: 'STUDENT TICKET',
    subtitle:
      'Whether you are a beginner, intermediate, or expert, this will be the best opportunity',
    price: 50,
    realPrice: 155,
    features: conferenceFeatures,
    event: 'ngrome-events/ngrome-conf-mmxxiv',
    ticket: 'fpdqo4sk5fw',
  },
  {
    visible: true,
    name: 'REGULAR TICKET',
    subtitle: 'Get your ticket now, ticket price will increase soon!',
    price: '155',
    features: conferenceFeatures,
    saleStart: '2024-04-15T00:00:00Z',
  },
  {
    visible: false,
    name: 'Workshop - Regular ',
    subtitle: 'Modern Angular Architectures Workshop',
    price: '310',
    features: ['Workshop on June 26', 'Lunch included on 26'],
  },
  {
    visible: false,
    name: 'Combo Ticket - Regular',
    subtitle: 'Get your ticket now, ticket price will increase soon!',
    price: '465',
    features: [
      'Workshop on June 26',
      'Conference on June 27',
      'Lunch included',
      'NGRome T-shirt',
    ],
  },
  {
    visible: false,
    name: 'VIP  - Regular Combo',
    subtitle: 'The best experience for your journey in Rome',
    price: '500',
    features: [
      'Workshop on June 26',
      'Speaker Dinner on June 26',
      'Conference on June 27',
      'Lunch included both days',
      'NGRome T-shirt',
    ],
  },
  {
    visible: false,
    name: 'NGRome Conference - Last Minute',
    subtitle: 'Get your ticket now!',
    price: '250',
    features: [
      'Access to the conference',
      'Coffee and Lunch included',
      'NGRome T-shirt',
    ],
  },
  {
    visible: false,
    name: 'Workshop - Last Minute ',
    subtitle: 'Modern Angular Architectures Workshop',
    price: '560',
    features: ['Workshop on June 26', 'Lunch included'],
  },
];
