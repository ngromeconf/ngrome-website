import { WorkshopAttributes } from 'src/app/models/workshop.model';
import workshops from 'src/server/routes/v1/workshops';

export const WORKSHOP: WorkshopAttributes[] = [
  {
    slug: 'angular-architects-signal-ddd-mfe',
    tag: 'Architecture',
    title: 'Modern Angular Architectures: Signal Store, DDD & Micro Frontends',
    description:
      'In this interactive workshop, we use Angular’s latest innovations to build a modern and maintainable architecture. We start with Standalone Components and learn how to structure a large application using a Mono Repo and Strategic Design – a discipline from Domain-driven Design (DDD). We discuss categorizing the individual parts of our application and how to enforce our architecture with tools such as Nx or Sheriff. On top of our Strategic Design, we implement a Micro Frontend Architecture with Module Federation. Then, we discover how Angular’s new Signals fit our modern architecture. We discuss fine-grained change detection and State Management with the new NGRX Signal Store. We implement some custom features for the Signal Store to cover repeating and complex use cases with just a few lines of code. Finally, we discuss how the new Signal component will help to simplify our architecture further and how they work together with traditional components.',
    date: '2024-06-26',
    authors: [
      {
        name: 'Manfred Steyer',
        biography:
          'Manfred Steyer is a trainer and consultant with a focus on Angular. Google Developer Expert (GDE) who writes for O’Reilly, the German Java Magazine, and windows.developer. He regularly speaks at conferences.',
        image: 'photo/authors/manfred-steyer.webp',
        link: 'https://www.softwarearchitekt.at/',
      },
      {
        name: 'Rainer Hahnekamp',
        biography:
          'Rainer Hahnekamp is a Google Developer Expert, working as a trainer and consultant in the expert network of Angular Architects. Among his responsibilities is providing training sessions on Angular and Spring. In addition, he offers a weekly brief overview of relevant events in the Angular ecosystem on YouTube through ng-news.',
        image: 'photo/authors/rainer-hahnekamp.webp',
        link: 'https://www.rainerhahnekamp.com/en/',
      },
    ],
    location: {
      name: 'TBD',
      mapsLink: '',
    },
    image: 'photo/workshop-angular-architects-20240627.webp',
    link: '/workshops/angular-architects-signal-ddd-mfe',
    ticket: 'https://ti.to/ngrome-events/modern-angular-architecture',
    col: 3,
  },
  {
    slug: 'staying-safe-with-angular',
    tag: 'Security',
    title: 'Staying safe and secure with Angular',
    description:
      'We love Angular because it’s a best-in-class web framework with top-notch features and capabilities. But did you know Angular also keeps your application safe and secure from web vulnerabilities? Security breaches can impact businesses financially and their reputation, so ensuring we’re following best security practices is essential. The Open Web Application Security Project (OWASP) guides us by identifying the most common and impactful web vulnerabilities.',
    date: '2023-11-30',
    authors: [
      {
        name: 'Alisa Duncan',
        biography:
          'Alisa is a Developer Advocate at Google on the Angular team. She is passionate about helping others learn and improve their lives through technology. She is also a co-organizer of GDG New Orleans and Angular New Orleans.',
        image: 'photo/authors/alisa-duncan.webp',
        link: 'https://alisaduncan.dev',
      },
    ],
    location: {
      name: 'Spaces Laurentina - Viale Luca Gaurico 91/93',
      mapsLink: 'https://maps.app.goo.gl/DHtZNNd8r8DNdmjN8',
    },
    image: 'photo/workshop-staying-safe-20231130.webp',
    link: '/workshops/staying-safe-with-angular',
    ticket:
      'https://ti.to/ngrome-events/staying-safe-angular-with-alisa-duncan',
    col: 1,
  },
  {
    slug: 'ng-girls-workshop',
    tag: 'diversity',
    title: 'ng-Girls - one-day workshops for beginners!',
    description: 'We are holding a one-day workshops for beginners! ',
    date: '2023-11-30',
    biography: '',
    authors: [
      {
        name: 'ngGirls team',
        biography: '',
        image: 'photo/authors/ng-girls.webp',
        link: 'https://www.ng-girls.org',
      },
    ],
    location: {
      name: 'Spaces Laurentina - Viale Luca Gaurico 91/93',
      mapsLink: 'https://maps.app.goo.gl/DHtZNNd8r8DNdmjN8',
    },
    image: 'photo/workshop-ng-girls-20231130.webp',
    link: '/workshops/ng-girls-workshop',
    ticket: 'https://www.ng-girls.org/',
    col: 1,
  },
  {
    slug: 'generative-ai-masterclass',
    tag: 'Generative AI',
    title: 'Generative AI Masterclass using MakerSuite, PaLM 2 and Angular',
    description:
      "In this full day training, you will learn how to leverage Google's new Generative AI platform using MakerSuite and PaLM APIs to build the next generation of AI-enabled Applications and powerful chatbots with Angular. The workshop is hands-on and practical, but we also give an overview of all the latest advancements and ideas. Topics we will cover:",
    date: '2023-12-04',
    authors: [
      {
        name: 'Gerard Sans',
        biography:
          'Gerard is a Google Developer Expert in Web Technologies and Angular. He works as a Developer Advocate at AWS and he is the founder of the AngularZone community in London. He loves coding, learning and sharing knowledge.',
        image: 'photo/authors/gerard-sans.webp',
        link: 'https://gerardsans.com/',
      },
    ],
    location: {
      name: 'Spaces Laurentina - Viale Luca Gaurico 91/93',
      mapsLink: 'https://maps.app.goo.gl/DHtZNNd8r8DNdmjN8',
    },
    image: 'photo/workshop-generative-ai-20231204.webp',
    link: '/workshops/generative-ai-masterclass',
    ticket:
      'https://ti.to/ngrome-events/generative-ai-workshop-with-gerard-sans',
    col: 1,
  },
];

export const WORKSHOP_PRERENDER_URLS = WORKSHOP.map(
  (workshop) => `/workshops/${workshop.slug}`,
);
