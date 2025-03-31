import { defineEventHandler } from 'h3';
import { SponsorInterface, Sponsors } from 'src/app/models/sponsor.model';

export default defineEventHandler(() => sponsors);

const mainSponsor: SponsorInterface[] = [
  {
    name: 'angular.dev',
    width: 230,
    height: 97,
    image: 'sponsors/logo-ANGULAR_ubew4u.webp',
    url: 'https://angular.dev/',
  },
];

const eventSponsor: SponsorInterface[] = [
  {
    name: 'Gestalt Group',
    image: 'sponsors/logo-GESTALT_rdflm2.svg',
    url: 'https://www.gestalteventi.it/',
  },
];

const goldSponsors: SponsorInterface[] = [
  {
    name: 'ICT Group',
    image: 'sponsors/logo-ICT-GROUP_shp3js.svg',
    url: 'https://ict-group.it/',
  },
];
const silverSponsor: SponsorInterface[] = [
  {
    name: 'Cloudinary',
    image: 'sponsors/logo-CLOUDINARY_ybyx4r.webp',
    width: 240,
    height: 101,
    url: 'https://cloudinary.com/',
  },
];
const bronzeSponsor: SponsorInterface[] = [
  {
    name: 'SparkFabrik',
    image:
      '/t_sponsor-fit-200x44/v1743415142/ngrome-sponsors/SparkFabrik_-_Logo_Ufficiale_p08cvf.svg',
    url: 'https://www.sparkfabrik.com/',
  },
];
const diversitySponsor: SponsorInterface[] = [];
const technicalSponsors: SponsorInterface[] = [];

const communityPartners: SponsorInterface[] = [
  // {
  //   name: 'grusp',
  //   image:
  //     'https://res.cloudinary.com/dp1gwjz5w/image/upload/v1718266374/ngrome-sponsors/grusp_squared_hwc2ap.png',
  //   url: 'https://www.grusp.org/',
  // },
  {
    name: 'learnbydo.ing',
    image:
      'c_scale,w_254/v1718734866/ngrome-sponsors/logo-light-mode_mfmfgc.png',
    url: 'https://learnbydo.ing/',
  },
  // {
  //   name: 'The Red Code',
  //   image:
  //     'https://res.cloudinary.com/dp1gwjz5w/image/upload/v1718206522/ngrome-sponsors/theRedCode_logo_hbl2ou.png',
  //   url: 'https://www.theredcode.it/',
  // },
  // {
  //   name: 'LABFORWEB',
  //   image:
  //     'https://res.cloudinary.com/dp1gwjz5w/image/upload/v1718204382/ngrome-sponsors/labforweb_cgzags.png',
  //   url: 'https://www.labfortraining.it/',
  // },
  // {
  //   name: 'Coderful',
  //   image:
  //     't_sponsor-fit-200x44/v1711105674/ngrome-sponsors/coderful-colore-trasparente_wyi541.png',
  //   url: 'https://www.coderful.io/',
  // },
  {
    name: 'NGVenice',
    image: 'c_scale,w_254/v1741837536/ngrome-sponsors/ngvenice_ol9opp.svg',
    url: 'https://ng-venice.org/',
  },
  {
    name: 'Angular Development',
    image:
      't_sponsor-fit-200x44/v1743414632/ngrome-sponsors/408666703_198986489936632_8899525206807091161_n_1_f7ox2l.png',
    url: 'https://www.instagram.com/angular_development/',
  },
  // {
  //   name: 'Develer',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2F01_develer_main_bicolor_web.png?alt=media&amp;token=405ebfb6-5763-4809-b4ff-031e36499cfd',
  //   url: 'https://twitter.com/develer',
  // },
  {
    name: 'Angular Love',
    image:
      't_sponsor-fit-200x44/v1709385406/ngrome-sponsors/ANGULAR.LOVE_fzlp7p.png',
    url: 'https://www.angular.love/',
  },
  {
    name: 'WeAreDevelopers',
    image:
      't_sponsor-fit-200x44/v1709386610/ngrome-sponsors/WeAreDevelopers_zc70jn.png',
    url: 'https://www.wearedevelopers.com/',
  },
  {
    name: 'Analog',
    image: 't_sponsor-fit-200x44/v1709385416/ngrome-sponsors/ANALOG_sf5n0o.svg',
    url: 'https://analogjs.org/',
  },
  // {
  //   name: 'GDG Pescara',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Flogo%20-%20GDG%20Pescara.png?alt=media&amp;token=7eb5b338-bb10-404a-8adb-ccfb503f5d8f',
  //   url: 'https://www.meetup.com/GDG-Pescara/',
  // },
  // {
  //   name: 'Voxel',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2Fvoxel-community-trento%20-%20Samantha%20Baita%20_%20Revas%20Societ%C3%A0%20Benefit.png?alt=media&amp;token=aee39b62-8ec7-4578-9dcf-60554d4babcd',
  //   url: 'https://www.voxel.community/',
  // },
  // {
  //   name: 'Angular Birmingham',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fng-birmingham.jpeg?alt=media&amp;token=5be6bc5c-4525-45c7-b5c3-8a3018a894f1',
  //   url: 'https://twitter.com/ngbrum',
  // },
  // {
  //   name: 'Angular Turkey',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fng-turkey.jpeg?alt=media&amp;token=1e1d85c8-97ae-4bc9-b844-f317de18698f',
  //   url: 'https://twitter.com/ngturkiye',
  // },
  // {
  //   name: 'Product Management Day',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2FLogo_nero%20-%20Ileana%20Baldassi.png?alt=media&amp;token=23e81b6e-0fb4-4a03-9099-be8e169af84d',
  //   url: 'https://www.productmanagementday.com/',
  // },
  // {
  //   name: 'FemTechConf',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Ffem-tech-conf.jpeg?alt=media&amp;token=29e70f99-e416-453c-ab6d-03b38cb89e2c',
  //   url: 'https://twitter.com/femtechconf',
  // },
  // {
  //   name: "GDG Valle d'Aosta",
  //   image:
  //     'https://res.cloudinary.com/dp1gwjz5w/image/upload/v1718735241/ngrome-sponsors/gdgvda_hmaq13.png',
  //   url: 'https://www.gdgvda.it/',
  // },
  // {
  //   name: 'Women Tech Maker - Italia',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Flogo%20wtm%20italia%20-%20Michela%20Bertaina.jpg?alt=media&amp;token=034fb5d6-96d8-4cdf-8f08-8590c1b8e5f7',
  //   url: 'https://twitter.com/wtmitalia',
  // },
  // {
  //   name: 'Codemotion',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fcodemotion.png?alt=media&token=4d49a06c-418a-48c1-bedb-16fb67ddee87&_gl=1*1v0ni3d*_ga*NzM2NjU2MDMyLjE2ODkxNjQ2MDY.*_ga_CW55HF8NVT*MTY5NjYxNTA4Ny4xNS4xLjE2OTY2MTUxMDMuNDQuMC4w',
  //   url: 'http://codemotion.com',
  // },
  // {
  //   name: 'MilanoJS',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fmijs.svg?alt=media&amp;token=857c1870-c676-4aa3-9d14-e8e277f03aa7',
  //   url: 'https://milanojs.com/',
  // },
  // {
  //   name: 'BeJavascript',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2FBeJS_Impression%20-%20Aymen%20Ben%20Amor.png?alt=media&amp;token=616dc877-296f-40fd-b093-f6b136656df1',
  //   url: 'https://www.bejs.io/',
  // },
  // {
  //   name: 'Angular Hamburg',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fangular-hamburg.jpeg?alt=media&amp;token=3c5d0cb9-2ba8-42a1-8ccb-874179d73f7b',
  //   url: 'https://twitter.com/angular_hamburg',
  // },
  // {
  //   name: 'GDG Nebrodi ',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2FGDG-Nebrodi.png?alt=media&amp;token=ccf2ca06-75a4-4975-9be8-5e221c13f630',
  //   url: 'https://gdg.community.dev/gdg-nebrodi/',
  // },
  // {
  //   name: 'GDG Bari',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fgdg-bari.jpg?alt=media&amp;token=085a7614-dafa-47f8-ba65-40d21073230e',
  //   url: 'https://gdg.community.dev/gdg-bari/',
  // },
  // {
  //   name: 'House of Angular',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fhouse-of-angular.png?alt=media&amp;token=0cdf6bd4-ccda-43b5-a333-a235ffe94e42',
  //   url: 'https://twitter.com/houseofangular',
  // },
  // {
  //   name: 'Django Girls',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2FDjango_Girls_Italy.svg?alt=media&amp;token=d5e9a023-bd8f-45b9-b5ca-09677e3e3b6b',
  //   url: 'https://www.fuzzybrains.org/it/',
  // },
  // {
  //   name: 'GDG Trento',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fgdg-trento.png?alt=media&amp;token=45ef0614-5355-4a7c-821e-9d90974b7f20',
  //   url: 'https://gdgtrento.it/',
  // },
  // {
  //   name: 'Mindsharing.tech',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fmindsharing%201%20-%20Aldo%20Pergjergji%20(1).png?alt=media&amp;token=79a1c729-d4c3-4bbb-abec-c530136a4895',
  //   url: 'https://www.mindsharing.tech',
  // },
  {
    name: 'GDG Roma Città',
    image:
      't_sponsor-fit-200x44/v1742475851/ngrome-sponsors/gdg-roma-citta_tpbsil.svg',
    url: 'https://gdg.community.dev/gdg-roma-citta/',
  },
  {
    name: 'ngGirls',
    image:
      't_sponsor-fit-200x44/v1709386617/ngrome-sponsors/ng_girls_s1idtn.png',
    url: 'http://ng-girls.org/',
  },
  // {
  //   name: 'AngularDay',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fangularday.png?alt=media&amp;token=e82f86bc-cf25-4067-9724-0f0540204651',
  //   url: 'http://www.angularday.it',
  // },
  // {
  //   name: 'Roma JS',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Froma-js.png?alt=media&amp;token=64b11145-0fd5-45a9-a093-98d0904ac7bf',
  //   url: 'http://romajs.org/',
  // },
  // {
  //   name: 'DotNetCode',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fdotnet-code.png?alt=media&amp;token=45b480a5-32e3-495b-b555-9da8f45e6d5d',
  //   url: 'https://www.meetup.com/it-IT/DotNetCode/',
  // },
  // {
  //   name: 'Angular Belgrade',
  //   image:
  //     'https://res.cloudinary.com/dp1gwjz5w/image/upload/v1718206986/ngrome-sponsors/angular-belgrade_kunnnk.svg',
  //   url: 'https://twitter.com/angularbelgrade',
  // },
  // {
  //   name: 'ng-de',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fngde.svg?alt=media&amp;token=afb71229-f55e-48c2-9b58-b31b3720a93e" alt="ng-de">',
  //   url: 'https://ng-de.org/',
  // },
  // {
  //   name: 'Firenze Dev',
  //   image: 'sponsors/community/firenzedev.svg',
  //   url: 'https://firenze.dev',
  // },
  // {
  //   name: 'Angular Wroclaw',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fangular_wroclaw-small.webp?alt=media&token=3074df1f-744e-4b76-a2da-3bf0a1c18252',
  //   url: 'https://twitter.com/AngularWroclaw',
  // },
  {
    name: 'Angular Space',
    image:
      't_sponsor-fit-200x44/v1709385405/ngrome-sponsors/ANGULAR_SPACE_j4fl3q.webp',
    url: 'https://www.angularspace.com/',
  },
  // {
  //   name: 'Latina in Tech',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Flatina-in-tech.webp?alt=media&token=5206d8a9-1d68-43f5-b1b4-b96350d666ccs',
  //   url: 'https://www.latinaintech.org/',
  // },
];

const pastEditionSponsors: SponsorInterface[] = [
  {
    name: 'angular.dev',
    width: 230,
    height: 97,
    image: 'sponsors/logo-ANGULAR_ubew4u.webp',
    url: 'https://angular.dev/',
  },
  {
    name: 'ConTe.it',
    width: 230,
    height: 97,
    image: 'sponsors/logo-CONTE.IT_przqvc.webp',
    url: 'https://www.conte.it/',
  },
  {
    name: 'Lascaux',
    width: 220,
    height: 93,
    image: '/sponsors/logo-LASCAUX_rz0g7c.webp',
    url: 'https://www.lascaux.it/',
  },
  {
    name: 'Ineo',
    image: 'sponsors/logo-INEO_dy9ubn.webp',
    width: 220,
    height: 93,
    url: 'https://www.ineo.it/',
  },
  {
    name: 'Digitouch',
    image: 'sponsors/logo-DIGITOUCH_uoaz8d.webp',
    width: 250,
    height: 105,
    url: 'https://www.gruppodigitouch.it/',
  },
  {
    name: 'Cloudinary',
    image: 'sponsors/logo-CLOUDINARY_ybyx4r.webp',
    width: 240,
    height: 101,
    url: 'https://cloudinary.com/',
  },
  {
    name: 'Fabrick',
    width: 220,
    height: 93,
    image: 'sponsors/logo-FABRICK_db0ybp.webp',
    url: 'https://www.linkedin.com/company/fabrickfinance/mycompany/',
  },
  {
    name: 'Almaviva Digitaltec',
    width: 150,
    height: 150,
    image: 'sponsors/sponsor_2FAlmaviva_qy71bp.svg',
    url: 'https://www.almaviva.it/it_IT/Societa-del-gruppo/AlmavivA_Digitaltec',
  },
  {
    name: 'Sap',
    width: 180,
    height: 89,
    image: 'sponsors/sponsor_2FSAP_scrn_R_gqt5j7.webp',
    url: 'https://www.sap.com/',
  },
  {
    name: 'Live Love App',
    width: 200,
    height: 134,
    image: 'sponsors/sponsor_2FPrimary_20Logo_nyvqei.webp',
    url: 'https://liveloveapp.com/',
  },
  {
    name: 'Keypartner',
    width: 250,
    height: 105,
    image: 'sponsors/logo-KeyPartner_ztyfpd.svg',
    url: 'https://www.keypartner.com/',
  },
  {
    name: 'ICT Group',
    height: 105,
    width: 250,
    image: 'sponsors/logo-ICT-GROUP_shp3js.webp',
    url: 'https://ict-group.it/',
  },
  {
    name: 'Namiral - Bit4ID',
    width: 250,
    height: 51,
    image: 'sponsors/sponsor_2FNamirial_20-_20Bit4Id_jeyama.webp',
    url: 'https://www.namirial.it/',
  },
  {
    name: 'Fervento',
    width: 230,
    height: 97,
    image: 'sponsors/logo-FERVENTO_xrx3wd.webp',
    url: 'https://fervento.com/',
  },
  {
    name: 'Auth0',
    height: 100,
    width: 250,
    image: 'sponsors/sponsor_2Fauth0_xq4cej.png',
    url: 'https://auth0.com/',
  },
  {
    name: 'CyberSafe',
    width: 250,
    height: 50,
    image: 'sponsors/partner_2FCybersafe_e1mkg5.webp',
    url: 'https://cybersafe.com/',
  },
  {
    name: 'Jetbrains',
    width: 180,
    height: 180,
    image: 'sponsors/partner_2Fjetbrains_p7jquw.webp',
    url: 'https://www.jetbrains.com/',
  },
  {
    name: 'Stickermule',
    width: 180,
    height: 180,
    image:
      'sponsors/partner_2F02-sticker-mule-logo-light-bg-stacked_zptiif.webp',
    url: 'https://www.stickermule.com/',
  },
  {
    name: 'Blexin',
    width: 250,
    height: 64,
    image: 'sponsors/sponsor_2Fblexin_cropped_nge1n6.webp',
    url: 'https://blexin.com/en/',
  },
];

const sponsors: Sponsors = {
  Main: sortByName(mainSponsor),
  Gold: sortByName(goldSponsors),
  Silver: sortByName(silverSponsor),
  Bronze: sortByName(bronzeSponsor),
  Diversity: sortByName(diversitySponsor),
  Event: sortByName(eventSponsor),
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
