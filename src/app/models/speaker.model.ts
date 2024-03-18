import { SocialLinks } from '../components/shared/social-links.component';
import { Agenda } from './agenda.model';

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
  agenda?: Agenda;
}

interface Talk {
  title: string;
  description: string;
  tag?: string;
}
