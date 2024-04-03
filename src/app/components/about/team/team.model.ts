import { SocialLinks } from '../../shared/social-links.component';

export interface Contributor extends SocialLinks {
  name: string;
  imageUrl: string;
}

export const CONTRIBUTORS: Contributor[] = [
  {
    name: 'Ermanno Battista',
    gitHub: 'https://github.com/ermannob',
    imageUrl:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/fl_preserve_transparency/v1709386825/ngrome-team/Ermanno_sxmd9p.jpg?_s=public-apps',
    linkedIn: 'https://www.linkedin.com/in/ermannobattista/',
    twitter: 'https://twitter.com/BattistaErmanno',
  },
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
    name: 'Raul Valentini',
    imageUrl:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/fl_preserve_transparency/v1709386835/ngrome-team/Raul_lzqaya.jpg?_s=public-apps',
    linkedIn: 'https://www.linkedin.com/in/raul-valentini/',
    twitter: 'https://twitter.com/RaulValentino',
    gitHub: 'https://github.com/raulvalentini/',
  },
  {
    name: 'Giuseppe Ettorre',
    imageUrl:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/fl_preserve_transparency/v1709386833/ngrome-team/Giuseppe_fo3pwp.jpg?_s=public-apps',
    linkedIn: 'https://www.linkedin.com/in/gettorre/',
    gitHub: 'https://github.com/peppoasap',
  },
  {
    name: 'Valentina Ricci',
    linkedIn: 'https://www.linkedin.com/in/valentina-ricci/',
    imageUrl:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/fl_preserve_transparency/v1709386831/ngrome-team/Valentina_ocjkal.jpg?_s=public-apps',
    gitHub: 'https://github.com/Brittu2016',
  },
  {
    name: 'Claudia Biondi',
    imageUrl:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/fl_preserve_transparency/v1709386829/ngrome-team/Claudia_zrkkzs.jpg?_s=public-apps',
    linkedIn: 'https://www.linkedin.com/in/claudia-biondi-650b39192/',
  },
  {
    name: 'Giovanni Malacaria',
    imageUrl:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/fl_preserve_transparency/v1709386828/ngrome-team/Giovanni_odurgf.jpg?_s=public-apps',
    linkedIn: 'https://www.linkedin.com/in/giovanni-malacaria-599390129/',
    gitHub: 'https://github.com/GMalacaria',
  },
];
