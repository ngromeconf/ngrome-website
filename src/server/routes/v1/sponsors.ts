import { defineEventHandler } from 'h3';
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
  {
    name: 'Cloudinary',
    image:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/v1710957882/ngrome-sponsors/cloudinary_logo_blue_0720_svg_nmxmoq.svg',
    url: 'https://cloudinary.com/',
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
    name: 'Lascaux',
    image:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/v1708674380/ngrome-sponsors/lascaux-logo_uvvmrp.png',
    url: 'https://www.lascaux.it/',
  },
  {
    name: 'Ineo',
    image:
      'https://assets-global.website-files.com/652fb7047cb1f8b74c17f907/653a3462d8987268e60e7cb4_ineo-colored.svg',
    url: 'https://www.ineo.it/',
  },
  {
    name: 'Digitouch',
    image:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/fl_preserve_transparency/v1712159211/ngrome-sponsors/download_peyvpd.jpg?_s=public-apps',
    url: 'https://www.gruppodigitouch.it/',
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
  {
    name: 'Packt',
    image: './sponsors/packt-logo.svg',
    url: 'https://www.packtpub.com/',
  },
  {
    name: 'Sticker Mule',
    image: './sponsors/sticker-mule-logo.svg',
    url: 'https://www.stickermule.com/it/adesivi-personalizzati',
  },
];

const communityPartners: SponsorInterface[] = [
  {
    name: 'Coderful',
    image:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/v1711105674/ngrome-sponsors/coderful-colore-trasparente_wyi541.png',
    url: 'https://www.coderful.io/',
  },{
    name: 'The Communities Bay',
    image:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/v1711096696/ngrome-sponsors/The_Communities_Bay_k1hjzk.png',
    url: 'https://thecmmbay.com/',
  },{
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
    name: 'Analog',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fanalog-logo.svg?alt=media&token=79f9ac08-9c02-4a84-904d-50f70681a5ea&_gl=1*8dhdph*_ga*NzM2NjU2MDMyLjE2ODkxNjQ2MDY.*_ga_CW55HF8NVT*MTY5NzE5MDQ3NC4xNy4xLjE2OTcxOTA2MzkuMzcuMC4w',
    url: 'https://analogjs.org/',
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
  {
    name: 'Angular Wroclaw',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fangular_wroclaw-small.webp?alt=media&token=3074df1f-744e-4b76-a2da-3bf0a1c18252',
    url: 'https://twitter.com/AngularWroclaw',
  },
  {
    name: 'Angular Space',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fangular-space-small.webp?alt=media&token=3a61ce50-3459-4518-a728-a044ef3359ea',
    url: 'https://www.angularspace.com/',
  },
  {
    name: 'Latina in Tech',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Flatina-in-tech.webp?alt=media&token=5206d8a9-1d68-43f5-b1b4-b96350d666ccs',
    url: 'https://www.latinaintech.org/',
  },
];

const pastEditionSponsors: SponsorInterface[] = [
  {
    name: 'Almaviva Digitaltec',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2FAlmaviva.svg?alt=media&token=e74b0eee-858a-4ed8-873a-0c526eb041cc',
    url: '',
  },
  {
    name: 'Sap',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2FSAP_scrn_R.png?alt=media&token=7c5a2177-dff3-4086-99cc-96a9dc15995b',
    url: '',
  },
  {
    name: 'Live Love App',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2FPrimary%20Logo.png?alt=media&token=ae9bd744-7ee1-4327-a149-8a6b6d2b2ac5',
    url: '',
  },
  {
    name: 'Keypartner',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2FKeyPartner_newLogo.svg?alt=media&token=76585b8d-05e5-4d53-95df-d2217d87e9e7',
    url: '',
  },
  {
    name: 'ICT Group',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2FICTGROUP-logo.svg?alt=media&token=c38f7bea-cc9e-4533-bb4b-7b7b9911d316',
    url: '',
  },
  {
    name: 'Namiral - Bit4ID',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2FNamirial%20-%20Bit4Id.svg?alt=media&token=283339eb-f019-44e0-9736-7720a914185e',
    url: '',
  },
  {
    name: 'Fervento',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Ffervento-exploded-logo.svg?alt=media&token=9d163d4d-4f24-4f13-a992-a37616cc647b',
    url: '',
  },
  {
    name: 'Auth0',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2Fauth0.svg?alt=media&token=92544425-a69d-4e3f-8992-7a3b369976ac',
    url: '',
  },
  {
    name: 'CyberSafe',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2FCybersafe.png?alt=media&token=f2ff5743-bc91-4b81-b855-509f9ca9c14c',
    url: '',
  },
  {
    name: 'Codemotion',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fcodemotion.png?alt=media&token=8e9f3835-b376-47b5-bc0f-16840bf7ef8c',
    url: '',
  },
  {
    name: 'The Communities Bay',
    image:
      'https://res.cloudinary.com/dp1gwjz5w/image/upload/v1711096696/ngrome-sponsors/The_Communities_Bay_k1hjzk.png',
    url: 'https://thecmmbay.com/',
  },
  {
    name: 'Jetbrains',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fjetbrains.svg?alt=media&token=2f8f87a0-a896-4e1d-91be-756a055447a6',
    url: '',
  },
  {
    name: 'Stickermule',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2F02-sticker-mule-logo-light-bg-stacked.svg?alt=media&token=a7b05991-2d89-4b9b-b625-f21878a4baef',
    url: '',
  },
  {
    name: 'Blexin',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2Fblexin_cropped.svg?alt=media&token=e1e38c3b-396f-4810-bbcd-4ac89145055d',
    url: '',
  },
];

const sponsors: Sponsors = {
  Main: sortByName(mainSponsor),
  Gold: sortByName(goldSponsors),
  Silver: sortByName(silverSponsor),
  Bronze: sortByName(bronzeSponsor),
  Diversity: sortByName(diversitySponsor),
  Technical: sortByName(technicalSponsors),
  Community: sortByName(communityPartners),
  PastEdition: sortByName(pastEditionSponsors),
};

function sortByName(sponsors: SponsorInterface[]) {
  return sponsors.sort(function (a, b) {
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
      return -1;
    }
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      return 1;
    }
    return 0;
  });
}
