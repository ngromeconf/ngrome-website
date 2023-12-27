export interface WorkshopAttributes {
  slug: string;
  tag: string;
  title: string;
  description: string;
  date: string;
  authors: WorkshopAuthor[];
  location: {
    name: string;
    mapsLink: string;
  };
  image: string;
  link: string;
  col: number;
  [key: string]: string | number | boolean | Date | undefined | Object;
}

interface WorkshopAuthor {
  name: string;
  biography: string;
  image: string;
  link?: string;
}
