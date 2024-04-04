import { SocialLinks } from '../components/shared/social-links.component';
import { Event } from './agenda.model';

export interface Speaker {
  name: string;
  slug: string;
  talk: Talk;
  biography?: string;
  from?: string;
  work?: string;
  imageUrl?: string;
  links?: SocialLinks;
  visible: boolean;
  agenda?: Partial<Event>;
}

interface Talk {
  title: string;
  description: string;
  tag?: string;
}
