import { defineEventHandler, getQuery } from 'h3';
import { WorkshopAttributes } from '../../../app/models/workshop.model';

const WORKSHOP: WorkshopAttributes[] = [
  {
    slug: 'angular-architects-signal-ddd-mfe',
    tag: 'Architecture',
    title: 'Modern Angular Architectures: Signal Store, DDD & Micro Frontends',
    description:
      'In this interactive workshop, we use Angular’s latest innovations to build a modern and maintainable architecture. We start with Standalone Components and learn how to structure a large application using a Mono Repo and Strategic Design – a discipline from Domain-driven Design (DDD). We discuss categorizing the individual parts of our application and how to enforce our architecture with tools such as Nx or Sheriff. On top of our Strategic Design, we implement a Micro Frontend Architecture with Module Federation. Then, we discover how Angular’s new Signals fit our modern architecture. We discuss fine-grained change detection and State Management with the new NGRX Signal Store. We implement some custom features for the Signal Store to cover repeating and complex use cases with just a few lines of code. Finally, we discuss how the new Signal component will help to simplify our architecture further and how they work together with traditional components.',
    date: '2024-06-26',
    author: {
      name: 'Manfred Steyer',
      biography:
        'Manfred Steyer is a trainer and consultant with a focus on Angular. Google Developer Expert (GDE) who writes for O’Reilly, the German Java Magazine, and windows.developer. He regularly speaks at conferences.',
      image: 'photo/authors/manfred-steyer.webp',
      link: 'https://www.softwarearchitekt.at/',
    },
    location: {
      name: 'Spaces Laurentina - Viale Luca Gaurico 91/93',
      mapsLink: 'https://maps.app.goo.gl/DHtZNNd8r8DNdmjN8',
    },
    image: 'photo/workshop-angular-architects-20240627.png',
    link: '/workshops/angular-architects-signal-ddd-mfe',
    col: 3,
  },
  {
    slug: 'staying-safe-with-angular',
    tag: 'Security',
    title: 'Staying safe and secure with Angular',
    description:
      'We love Angular because it’s a best-in-class web framework with top-notch features and capabilities. But did you know Angular also keeps your application safe and secure from web vulnerabilities? Security breaches can impact businesses financially and their reputation, so ensuring we’re following best security practices is essential. The Open Web Application Security Project (OWASP) guides us by identifying the most common and impactful web vulnerabilities.',
    date: '2023-11-30',
    author: {
      name: 'Alisa Duncan',
      biography:
        'Alisa is a Developer Advocate at Google on the Angular team. She is passionate about helping others learn and improve their lives through technology. She is also a co-organizer of GDG New Orleans and Angular New Orleans.',
      image: 'photo/alisa-duncan.jpg',
      link: '',
    },
    location: {
      name: 'Spaces Laurentina - Viale Luca Gaurico 91/93',
      mapsLink: 'https://maps.app.goo.gl/DHtZNNd8r8DNdmjN8',
    },
    image: 'photo/workshop-staying-safe-20231130.jpg',
    link: 'https://ti.to/ngrome-events/staying-safe-angular-with-alisa-duncan',
    col: 1,
  },
  {
    slug: 'ng-girls-workshop',
    tag: 'diversity',
    title: 'ng-Girls - one-day workshops for beginners!',
    description: 'We are holding a one-day workshops for beginners! ',
    date: '2023-11-30',
    biography: '',
    author: { name: 'ngGirls team', biography: '', image: '', link: '' },
    location: {
      name: 'Spaces Laurentina - Viale Luca Gaurico 91/93',
      mapsLink: 'https://maps.app.goo.gl/DHtZNNd8r8DNdmjN8',
    },
    image: 'photo/workshop-ng-girls-20231130.jpg',
    link: 'https://www.ng-girls.org/',
    col: 1,
  },
  {
    slug: 'generative-ai-masterclass',
    tag: 'Generative AI',
    title: 'Generative AI Masterclass using MakerSuite, PaLM 2 and Angular',
    description:
      "In this full day training, you will learn how to leverage Google's new Generative AI platform using MakerSuite and PaLM APIs to build the next generation of AI-enabled Applications and powerful chatbots with Angular. The workshop is hands-on and practical, but we also give an overview of all the latest advancements and ideas. Topics we will cover:",
    date: '2023-12-04',
    author: {
      name: 'Gerard Sans',
      biography:
        'Gerard is a Google Developer Expert in Web Technologies and Angular. He works as a Developer Advocate at AWS and he is the founder of the AngularZone community in London. He loves coding, learning and sharing knowledge.',
      image: 'photo/gerard-sans.jpg',
      link: 'https://gerardsans.com/',
    },
    location: {
      name: 'Spaces Laurentina - Viale Luca Gaurico 91/93',
      mapsLink: 'https://maps.app.goo.gl/DHtZNNd8r8DNdmjN8',
    },
    image: 'photo/workshop-generative-ai-20231204.jpg',
    link: 'https://ti.to/ngrome-events/generative-ai-workshop-with-gerard-sans',
    col: 1,
  },
];

export default defineEventHandler((event) => {
  const { slug } = getQuery(event);
  if (!slug) return WORKSHOP;
  return WORKSHOP.find((workshop) => workshop.slug === slug);
});
