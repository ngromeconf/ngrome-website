import { defineEventHandler } from 'h3';
import { WorkshopAttributes } from '../../../app/models/workshop.model';

const WORKSHOP: WorkshopAttributes[] = [
  {
    slug: 'staying-safe-with-angular',
    tag: 'Security',
    title: 'Staying safe and secure with Angular',
    description:
      'We love Angular because it’s a best-in-class web framework with top-notch features and capabilities. But did you know Angular also keeps your application safe and secure from web vulnerabilities? Security breaches can impact businesses financially and their reputation, so ensuring we’re following best security practices is essential. The Open Web Application Security Project (OWASP) guides us by identifying the most common and impactful web vulnerabilities.',
    workshopDate: '2023-11-30',
    author: 'Alisa Duncan',
    location: 'Spaces Laurentina - Viale Luca Gaurico 91/93',
    image: 'photo/workshop-staying-safe-20231130.jpg',
    link: '',
  },
  {
    slug: 'ng-girls-workshop',
    tag: 'diversity',
    title: 'ng-Girls - one-day workshops for beginners!',
    description: 'We are holding a one-day workshops for beginners! ',
    workshopDate: '2023-11-30',
    author: 'ngGirls team',
    location: 'Spaces Laurentina - Viale Luca Gaurico 91/93',
    image: 'photo/workshop-ng-girls-20231130.jpg',
    link: '',
  },
  {
    slug: 'generative-ai-masterclass',
    tag: 'Generative AI',
    title: 'Generative AI Masterclass using MakerSuite, PaLM 2 and Angular',
    description:
      "In this full day training, you will learn how to leverage Google's new Generative AI platform using MakerSuite and PaLM APIs to build the next generation of AI-enabled Applications and powerful chatbots with Angular. The workshop is hands-on and practical, but we also give an overview of all the latest advancements and ideas. Topics we will cover:",
    workshopDate: '2023-12-04',
    author: 'Gerard Sans',
    location: "Spaces Eur Arte - Viale dell'Arte 19",
    image: 'photo/workshop-generative-ai-20231204.jpg',
    link: 'https://ti.to/ngrome-events/generative-ai-workshop-with-gerard-sans',
  },
];

export default defineEventHandler(() => WORKSHOP);
