import { Speaker } from './speaker.model';

export interface Agenda {
  title: string;
  start: string;
  events: Event[];
}
export interface Event {
  startTime: string;
  duration: number;
  endTime: string;
  type: string;
  speaker?: Speaker;
  title: string;
  slug?: string;
}
