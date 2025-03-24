import { SocialLinks } from '../../shared/social-links.component';

export interface Contributor extends SocialLinks {
  name: string;
  imageUrl: string;
}

export const CONTRIBUTORS: Contributor[] = [
  {
    name: 'Luciano Murruni',
    gitHub: 'https://x.com/MrMurruni?t=rh8waZXkiQWel9l_dUUZbw&s=09',
    twitter: 'https://x.com/MrMurruni?t=rh8waZXkiQWel9l_dUUZbw&s=09',
    imageUrl:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/fl_preserve_transparency/v1709386823/ngrome-team/Luciano_vygan6.jpg?_s=public-apps',
    linkedIn: 'https://www.linkedin.com/in/lucianomurruni/',
  },
  {
    name: 'Marco Matascioli',
    imageUrl:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/fl_preserve_transparency/v1709386826/ngrome-team/Marco_rpwhom.jpg?_s=public-apps',
    linkedIn:
      'https://www.linkedin.com/in/marco-matascioli-84928a36/?originalSubdomain=it',
    twitter: 'https://twitter.com/marcomascioli',
  },
  {
    name: 'Ermanno Battista',
    gitHub: 'https://github.com/ermannob',
    imageUrl:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/fl_preserve_transparency/v1709386825/ngrome-team/Ermanno_sxmd9p.jpg?_s=public-apps',
    linkedIn: 'https://www.linkedin.com/in/ermannobattista/',
    twitter: 'https://twitter.com/BattistaErmanno',
  },

  {
    name: 'Davide Passafaro',
    imageUrl:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/v1742856537/ngrome-speaker/passafaro_io6koc.jpg',
    linkedIn: 'https://www.linkedin.com/in/davide-passafaro/',
    gitHub: 'https://github.com/DavidePassafaro',
  },

  {
    name: 'Claudia Biondi',
    imageUrl:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/fl_preserve_transparency/v1709386829/ngrome-team/Claudia_zrkkzs.jpg?_s=public-apps',
    linkedIn: 'https://www.linkedin.com/in/claudia-biondi-650b39192/',
  },
  {
    name: 'Giorgio Galassi',
    imageUrl:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/c_fill,w_400,h_400,ar_1:1/v1742718844/2025/profile-big-cut_vvveeh.jpg',
    linkedIn: 'https://www.linkedin.com/in/giorgiogalassi/',
    gitHub: 'https://github.com/giorgiogalassi',
  },
  {
    name: 'Raul Valentini',
    imageUrl:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/fl_preserve_transparency/v1709386835/ngrome-team/Raul_lzqaya.jpg?_s=public-apps',
    linkedIn: 'https://www.linkedin.com/in/raul-valentini/',
    twitter: 'https://twitter.com/RaulValentino',
    gitHub: 'https://github.com/raulvalentini/',
  },
];
