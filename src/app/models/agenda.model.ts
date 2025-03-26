import { Speaker } from './speaker.model';

export interface Agenda {
  date: string;
  title: string;
  start: string;
  events: Event[];
}
export interface Event {
  startTime?: string;
  duration?: number;
  endTime?: string;
  type: string;
  speakers?: Speaker[];
  title: string;
  subtitle: string;
  description?: string;
  slug?: string;
  videoURL?: string;
}
