import { H3Event, defineEventHandler } from 'h3';
import { SponsorInterface, Sponsors } from 'src/app/models/sponsor.model';

export default defineEventHandler(() => sponsors);

const mainSponsor: SponsorInterface[] = [];

const goldSponsors: SponsorInterface[] = [
  {
    name: 'Key Partner',
    image: './sponsors/KP_Logo_esteso.png',
    url: 'https://www.keypartner.com/',
  },
  {
    name: 'ICT Group',
    image: './sponsors/ict-group-logo.svg',
    url: 'https://ict-group.it/',
  },
];
const silverSponsor: SponsorInterface[] = [
  {
    name: 'Fervento',
    image: './sponsors/fervento-logo.svg',
    url: 'https://fervento.com',
  },
];
const bronzeSponsor: SponsorInterface[] = [
  {
    name: 'Packt',
    image: './sponsors/packt-logo.svg',
    url: 'https://www.packtpub.com/',
  },
  {
    name: 'angular.dev',
    image: './sponsors/angular_wordmark_gradient.png',
    url: 'https://www.angular.dev/',
  },
  {
    name: 'ConTe.it',
    image: './sponsors/conte-logo.svg',
    url: 'https://www.conte.it/',
  },
  {
    name: 'Sticker Mule',
    image: './sponsors/sticker-mule-logo.svg',
    url: 'https://www.stickermule.com/it/adesivi-personalizzati',
  },
];
const diversitySponsor: SponsorInterface[] = [
  {
    name: 'Okta',
    image: './sponsors/Okta-logo.svg',
    url: 'https://www.okta.com/',
  },
];
const technicalSponsors: SponsorInterface[] = [
  {
    name: 'Slido',
    image: './sponsors/slido-logo.svg',
    url: 'https://www.slido.com/',
  },
];

const communityPartners: SponsorInterface[] = [
  {
    name: 'StopCoding',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2FLOGO_stopcoding_400x400%20-%20Ileana%20Baldassi.jpg?alt=media&amp;token=20921429-a600-4570-aeb9-cb58eed7db0f',
    url: 'https://www.meetup.com/stopcoding/',
  },
  {
    name: 'Develer',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2F01_develer_main_bicolor_web.png?alt=media&amp;token=405ebfb6-5763-4809-b4ff-031e36499cfd',
    url: 'https://twitter.com/develer',
  },
  {
    name: 'Angular Love',
    image: 'sponsors/community/angular-love.svg',
    url: 'https://www.angular.love/',
  },
  {
    name: 'WeAreDevelopers',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2FWeAreDevelopers_Positiv.png?alt=media&token=2becfbee-eeb6-4c3e-a5bf-722f2e45f15f&_gl=1*1upw65f*_ga*NzM2NjU2MDMyLjE2ODkxNjQ2MDY.*_ga_CW55HF8NVT*MTY5NzE5MDQ3NC4xNy4xLjE2OTcxOTA1MjMuMTEuMC4w',
    url: 'https://www.wearedevelopers.com/',
  },
  {
    name: 'https://analogjs.org/',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fanalog-logo.svg?alt=media&token=79f9ac08-9c02-4a84-904d-50f70681a5ea&_gl=1*8dhdph*_ga*NzM2NjU2MDMyLjE2ODkxNjQ2MDY.*_ga_CW55HF8NVT*MTY5NzE5MDQ3NC4xNy4xLjE2OTcxOTA2MzkuMzcuMC4w',
    url: 'https://www.wearedevelopers.com/',
  },
  {
    name: 'GDG Pescara',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Flogo%20-%20GDG%20Pescara.png?alt=media&amp;token=7eb5b338-bb10-404a-8adb-ccfb503f5d8f',
    url: 'https://www.meetup.com/GDG-Pescara/',
  },
  {
    name: 'Voxel',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2Fvoxel-community-trento%20-%20Samantha%20Baita%20_%20Revas%20Societ%C3%A0%20Benefit.png?alt=media&amp;token=aee39b62-8ec7-4578-9dcf-60554d4babcd',
    url: 'https://www.voxel.community/',
  },
  {
    name: 'Angular Birmingham',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fng-birmingham.jpeg?alt=media&amp;token=5be6bc5c-4525-45c7-b5c3-8a3018a894f1',
    url: 'https://twitter.com/ngbrum',
  },
  {
    name: 'Angular Turkey',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fng-turkey.jpeg?alt=media&amp;token=1e1d85c8-97ae-4bc9-b844-f317de18698f',
    url: 'https://twitter.com/ngturkiye',
  },
  {
    name: 'Product Management Day',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2FLogo_nero%20-%20Ileana%20Baldassi.png?alt=media&amp;token=23e81b6e-0fb4-4a03-9099-be8e169af84d',
    url: 'https://www.productmanagementday.com/',
  },
  {
    name: 'FemTechConf',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Ffem-tech-conf.jpeg?alt=media&amp;token=29e70f99-e416-453c-ab6d-03b38cb89e2c',
    url: 'https://twitter.com/femtechconf',
  },
  {
    name: "GDG Valle d'Aosta",
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fgdg-vda.png?alt=media&amp;token=6654edc8-ca98-4f7c-9ba2-ed95e4a06027',
    url: 'https://www.gdgvda.it/',
  },
  {
    name: 'Women Tech Maker - Italia',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Flogo%20wtm%20italia%20-%20Michela%20Bertaina.jpg?alt=media&amp;token=034fb5d6-96d8-4cdf-8f08-8590c1b8e5f7',
    url: 'https://twitter.com/wtmitalia',
  },
  {
    name: 'Codemotion',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fcodemotion.png?alt=media&token=4d49a06c-418a-48c1-bedb-16fb67ddee87&_gl=1*1v0ni3d*_ga*NzM2NjU2MDMyLjE2ODkxNjQ2MDY.*_ga_CW55HF8NVT*MTY5NjYxNTA4Ny4xNS4xLjE2OTY2MTUxMDMuNDQuMC4w',
    url: 'http://codemotion.com',
  },
  {
    name: 'MilanoJS',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fmijs.svg?alt=media&amp;token=857c1870-c676-4aa3-9d14-e8e277f03aa7',
    url: 'https://milanojs.com/',
  },
  {
    name: 'BeJavascript',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2FBeJS_Impression%20-%20Aymen%20Ben%20Amor.png?alt=media&amp;token=616dc877-296f-40fd-b093-f6b136656df1',
    url: 'https://www.bejs.io/',
  },
  {
    name: 'Angular Hamburg',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fangular-hamburg.jpeg?alt=media&amp;token=3c5d0cb9-2ba8-42a1-8ccb-874179d73f7b',
    url: 'https://twitter.com/angular_hamburg',
  },
  {
    name: 'GDG Nebrodi ',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2FGDG-Nebrodi.png?alt=media&amp;token=ccf2ca06-75a4-4975-9be8-5e221c13f630',
    url: 'https://gdg.community.dev/gdg-nebrodi/',
  },
  {
    name: 'GDG Bari',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fgdg-bari.jpg?alt=media&amp;token=085a7614-dafa-47f8-ba65-40d21073230e',
    url: 'https://gdg.community.dev/gdg-bari/',
  },
  {
    name: 'House of Angular',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fhouse-of-angular.png?alt=media&amp;token=0cdf6bd4-ccda-43b5-a333-a235ffe94e42',
    url: 'https://twitter.com/houseofangular',
  },
  {
    name: 'Django Girls',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2FDjango_Girls_Italy.svg?alt=media&amp;token=d5e9a023-bd8f-45b9-b5ca-09677e3e3b6b',
    url: 'https://www.fuzzybrains.org/it/',
  },
  {
    name: 'GDG Trento',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fgdg-trento.png?alt=media&amp;token=45ef0614-5355-4a7c-821e-9d90974b7f20',
    url: 'https://gdgtrento.it/',
  },
  {
    name: 'Mindsharing.tech',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fmindsharing%201%20-%20Aldo%20Pergjergji%20(1).png?alt=media&amp;token=79a1c729-d4c3-4bbb-abec-c530136a4895',
    url: 'https://www.mindsharing.tech',
  },
  {
    name: 'ngGirls',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fnggirls.png?alt=media&amp;token=4f300cae-9b96-402f-bf12-17d37adf63d3',
    url: 'http://ng-girls.org/',
  },
  {
    name: 'AngularDay',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fangularday.png?alt=media&amp;token=e82f86bc-cf25-4067-9724-0f0540204651" alt="AngularDay">',
    url: 'http://www.angularday.it',
  },
  {
    name: 'Roma JS',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Froma-js.png?alt=media&amp;token=64b11145-0fd5-45a9-a093-98d0904ac7bf" alt="Roma JS">',
    url: 'http://romajs.org/',
  },
  {
    name: 'DotNetCode',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fdotnet-code.png?alt=media&amp;token=45b480a5-32e3-495b-b555-9da8f45e6d5d" alt="DotNetCode">',
    url: 'https://www.meetup.com/it-IT/DotNetCode/',
  },
  {
    name: 'Angular Belgrade',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fangular-belgrade.jpeg?alt=media&amp;token=9a4409f8-c74d-49c9-adbc-9f62f6172d51" alt="Angular Belgrade">',
    url: 'https://twitter.com/angularbelgrade',
  },
  {
    name: 'ng-de',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fngde.svg?alt=media&amp;token=afb71229-f55e-48c2-9b58-b31b3720a93e" alt="ng-de">',
    url: 'https://ng-de.org/',
  },
  {
    name: 'Firenze Dev',
    image: 'sponsors/community/firenzedev.svg',
    url: 'https://firenze.dev',
  },
];

const sponsors: Sponsors = {
  Main: mainSponsor,
  Gold: goldSponsors,
  Silver: silverSponsor,
  Bronze: bronzeSponsor,
  Diversity: diversitySponsor,
  technical: technicalSponsors,
  Community: communityPartners,
};
