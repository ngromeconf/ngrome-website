import { defineEventHandler } from 'h3';
import { Agenda } from 'src/app/models/agenda.model';

export default defineEventHandler(() => agendaList);

const agendaList: Agenda[] = [
  {
    title: 'Registration Opening',
    hours: '08:45',
    author: '',
  },
  {
    title: 'Opening Remarks',
    hours: '09:25',
    author: 'NGRome Team',
  },
  {
    title: 'Quo vadis, Angular?',
    hours: '09:35',
    author: 'Pawel Kozlowski & Alex Rickabaugh',
  },
  {
    title: 'NgRx SignalStore - Journey from Vision to First Release',
    hours: '10:15',
    author: 'Marko Stanimirović',
  },
  {
    title: 'Panel with Pawel Kozlowski, Alex Rickabaugh, Marko Stanimirović',
    hours: '10:40',
    author: '',
  },
  {
    title: 'Coffee Break',
    hours: '11:00',
    author: '',
  },
  {
    title: 'Go Dynamic with Reactive Forms',
    hours: '11:30',
    author: 'Davide Passafaro',
  },
  {
    title: 'ELI5 Angular Hydration',
    hours: '11:55',
    author: 'Soumaya Erradi',
  },
  {
    title: 'Panel with Davide Passafaro, Soumaya Erradi',
    hours: '12:15',
    author: '',
  },
  {
    title: 'Networking & Lunch',
    hours: '12:45',
    author: '',
  },
  {
    title:
      'Implement the backend of your application with Azure Functions, NodeJS!',
    hours: '14:05',
    author: 'Massimo Bonanni',
  },
  {
    title: "There's Safety in Angular",
    hours: '14:30',
    author: 'Alisa Duncan',
  },
  {
    title: 'Building Bard from scratch with MakerSuite and PaLM API',
    hours: '14:55',
    author: 'Gerard Sans',
  },
];
