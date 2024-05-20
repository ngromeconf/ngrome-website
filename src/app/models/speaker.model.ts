import { SocialLinks } from '../components/shared/social-links.component';

export interface Speaker {
  name: string;
  slug: string;
  talk: Talk[];
  biography?: string;
  from?: string;
  work?: string;
  jobRole?: string;
  imageUrl?: string;
  links?: SocialLinks;
  visible: boolean;
  events: {
    title: string;
    time: string;
    date: string;
    link: string;
    isTalk: boolean;
  }[];
}

interface Talk {
  title: string;
  description: string;
  tag?: string;
  slug: string;
}
