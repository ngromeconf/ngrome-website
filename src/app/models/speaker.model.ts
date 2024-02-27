import { SocialLinks } from '../components/shared/social-links.component';

export interface Speaker {
  name: string;
  slug: string;
  talk: Talk;
  biography?: string;
  from?: string;
  work?: string;
  imageUrl?: string;
  links?: SocialLinks;
  visible: true;
}

interface Talk {
  title: string;
  description: string;
  tag?: string;
}
