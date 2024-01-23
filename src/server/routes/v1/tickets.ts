import { defineEventHandler } from 'h3';
import { TicketInterface } from 'src/app/models/ticket.interface';

export default defineEventHandler(() => tickets);

enum features {
  Conference = '🎟️ Conference Access In Person',
  ConferenceBreackfast = '🥐 Conference Welcome Breakfast',
  ConferenceCoffee = '☕ Open Coffee all day',
  ConferenceLunch = '🍝 Conference Lunch ',
  Swag = '😎 NGRome Swag',
  Workshop = '🎟️ Workshop In Person',
  WorkshopLunch = '🍕 Workshop Lunch ',
  SpeakerDinner = '🥳 Speaker Dinner ',
}

const conferenceFeatures = [
  features.Conference,
  features.ConferenceBreackfast,
  features.ConferenceCoffee,
  features.ConferenceLunch,
  features.Swag,
];
const workshopFeatures = [features.Workshop, features.WorkshopLunch];
const vipFeatures = [features.SpeakerDinner];

const tickets: TicketInterface[] = [
  {
    visible: true,
    name: 'NGRome Conference Blind Ticket',
    subtitle: 'Get your ticket now, ticket price will increase soon!',
    price: '75',
    realPrice: '155',
    features: conferenceFeatures,
    event: 'ngrome-events/ngrome-conf-mmxxiv',
    ticket: 'blind-ticket',
    soldOut: true,
  },

  {
    visible: true,
    name: 'NGRome Conference - Early Bird ',
    subtitle: 'Get your ticket now, ticket price will increase soon!',
    price: 110,
    realPrice: 155,
    features: conferenceFeatures,
    event: 'ngrome-events/ngrome-conf-mmxxiv',
    ticket: 'early-bird',
    soldOut: false,
  },

  {
    visible: true,
    name: 'Combo Tickets - Early Bird',
    subtitle: 'Modern Angular Architectures Workshop & Conference',
    price: '325',
    popular: true,
    realPrice: '465',
    featuresDescription: 'All the features of the Conference Ticket plus:',
    features: workshopFeatures,
    event: 'ngrome-events/modern-angular-architecture',
    ticket: '6pv0sbo8z5a',
  },
  {
    visible: true,
    name: 'NGRome Conference - Student Ticket',
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
    name: 'Workshop - Early Bird ',
    subtitle: 'Modern Angular Architectures Workshop',
    price: 250,
    realPrice: 310,
    features: workshopFeatures,
    event: 'ngrome-events/modern-angular-architecture',
    ticket: 'u6au8pc1wey',
  },

  {
    visible: true,
    name: 'VIP - Early Bird',
    subtitle: 'The best experience for your journey in Rome',
    bestExperience: true,
    price: '375',
    realPrice: '500',
    featuresDescription: 'All the features of the Combo Ticket plus:',
    features: [features.SpeakerDinner],
    event: 'ngrome-events/ngrome-conf-mmxxiv',
    ticket: 'sttgjfic3ma',
  },

  {
    visible: false,
    name: 'NGRome Conference - Regular ',
    subtitle: 'Get your ticket now, ticket price will increase soon!',
    price: '155',
    features: [
      'Access to the conference',
      'Coffee and Lunch included',
      'NGRome T-shirt',
    ],
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
    name: 'Combo Tickets - Regular',
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
