import { Speaker } from './speaker.model';

export interface WorkshopAttributes {
  slug: string;
  tag: string;
  time: string;
  recipients: string;
  title: string;
  description: string;
  date: string;
  authors: Speaker[];
  location: {
    name: string;
    mapsLink: string;
  };
  image: string;
  ogImage: string;
  link: string;
  ticket: string;
  ticketSlug: string;
  ticketItem: string;
  col: number;
  soldOut: boolean;
  forWho: string;
  socialDescription: string;
  [key: string]: string | number | boolean | Date | undefined | Object;
}

export interface WorkshopAuthor {
  name: string;
  biography: string;
  image: string;
  link?: string;
  slug: string;
}
