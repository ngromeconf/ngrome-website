import { defineEventHandler } from 'h3';
import { TicketInterface } from 'src/app/models/ticket.interface';

export default defineEventHandler(() => tickets);

enum features {
  Conference = 'Conference',
  ConferenceBreakfast = 'Conference Welcome Breakfast',
  ConferenceCoffee = 'Coffee',
  ConferenceLunch = 'Lunch ',
  Swag = 'Swag',
  Workshop = 'Workshop',
  WorkshopLunch = 'Workshop Lunch ',
  SpeakerDinner = 'Speaker Dinner ',
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
    category: 'conference',
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
    category: 'workshop',
    visible: true,
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
    category: 'combo',
    visible: true,
    name: 'MODERN ANGULAR ARCHITECTURES - EARLY BIRD',
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
    category: 'combo',
    visible: true,
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
    category: 'conference',
    visible: true,
    name: 'EARLY BIRD ',
    subtitle: 'Get your ticket now, ticket price will increase soon!',
    price: 110,
    realPrice: 155,
    features: conferenceFeatures,
    event: 'ngrome-events/ngrome-conf-mmxxiv',
    ticket: 'early-bird',
    soldOut: false,
    remains: 8,
  },

  {
    category: 'combo',
    visible: true,
    name: 'MASTERING NGRX SIGNALSTORE WORKSHOP - EARLY BIRD',
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
    category: 'combo',
    visible: true,
    name: 'MODERN ANGULAR ARCHITECTURES - REGULAR',
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
    category: 'combo',
    visible: true,
    name: 'VIP TICKET REGULAR',
    subtitle:
      'The best experience for your journey in Rome! This ticket is limited to 5 people and give you the possibility to choose one of the available workshops',
    bestExperience: true,
    price: '565',
    featuresDescription: 'All the features of the Combo Ticket plus:',
    features: [
      ...conferenceFeatures,
      features.Workshop,
      features.SpeakerDinner,
    ],
    event: 'ngrome-events/ngrome-conf-mmxxiv',
    ticket: 'bdcszpol8yy',
    soldOut: false,
  },

  {
    category: 'workshop',
    visible: true,
    name: 'MODERN ANGULAR ARCHITECTURES WORKSHOP - REGULAR',
    subtitle:
      'MODERN ANGULAR ARCHITECTURES: SIGNAL STORE, NX, DDD & MICRO FRONTENDS - JUNE 26',
    price: 310,
    features: workshopFeatures,
    event: 'ngrome-events/modern-angular-architecture',
    ticket: 'fg1il7mh3ys',
    soldOut: true
  },

  {
    category: 'workshop',
    visible: true,
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
    category: 'workshop',
    visible: true,
    name: 'MODERN ANGULAR ARCHITECTURES WORKSHOP - LAST MINUTE',
    subtitle:
      'MODERN ANGULAR ARCHITECTURES: SIGNAL STORE, NX, DDD & MICRO FRONTENDS - JUNE 26',
    price: 360,
    features: workshopFeatures,
    event: 'ngrome-events/modern-angular-architecture',
    ticket: 'lggiqvvkwv8',
    soldOut: false
  },
  {
    category: 'conference',
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
    category: 'conference',
    visible: true,
    name: 'REGULAR TICKET',
    subtitle: 'Get your ticket now, ticket price will increase soon!',
    price: '155',
    features: conferenceFeatures,
    saleStart: '2024-04-15T00:00:00Z',
  },
  {
    category: 'workshop',
    visible: false,
    name: 'Workshop - Regular ',
    subtitle: 'Modern Angular Architectures Workshop',
    price: '310',
    features: [],
  },
  {
    category: 'combo',
    visible: false,
    name: 'Combo Ticket - Regular',
    subtitle: 'Get your ticket now, ticket price will increase soon!',
    price: '465',
    features: [
      
    ],
  },
  {
    category: 'combo',
    visible: false,
    name: 'VIP  - Regular Combo',
    subtitle: 'The best experience for your journey in Rome',
    price: '500',
    features: [
      
    ],
  },
  {
    category: 'conference',
    visible: true,
    name: 'LAST MINUTE TICKET',
    subtitle: 'Get your ticket now!',
    price: '200',
    features: [
      
    ],
    saleStart: '2024-05-20T00:00:00Z',

  },
  {
    category: 'workshop',
    visible: false,
    name: 'Workshop - Last Minute ',
    subtitle: 'Modern Angular Architectures Workshop',
    price: '560',
    features: ['Workshop on June 26', 'Lunch included'],
  },
];
