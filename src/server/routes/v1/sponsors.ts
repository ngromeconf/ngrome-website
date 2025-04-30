import { defineEventHandler } from 'h3';
import { SponsorInterface, Sponsors } from 'src/app/models/sponsor.model';

export default defineEventHandler(() => sponsors);

const mainSponsor: SponsorInterface[] = [
  {
    name: 'angular.dev',
    width: 230,
    height: 97,
    image: 'logo-ANGULAR_ubew4u',
    url: 'https://angular.dev/',
  },
];

const eventSponsor: SponsorInterface[] = [
  {
    name: 'Gestalt Group',
    image: 'logo-GESTALT_rdflm2',
    url: 'https://www.gestalteventi.it/',
  },
];

const goldSponsors: SponsorInterface[] = [
  {
    name: 'ICT Group',
    image: 'logo-ICT-GROUP_shp3js',
    url: 'https://ict-group.it/',
  },
];
const silverSponsor: SponsorInterface[] = [
  {
    name: 'Cloudinary',
    image: 'logo-CLOUDINARY_ybyx4r',
    url: 'https://cloudinary.com/',
  },
];
const bronzeSponsor: SponsorInterface[] = [
  {
    name: 'SparkFabrik',
    image: 'SparkFabrik_-_Logo_Ufficiale_p08cvf',
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
    name: 'angular.dev',
    width: 230,
    height: 97,
    image: 'logo-ANGULAR_ubew4u',
    url: 'https://angular.dev/',
  },
  {
    name: 'learnbydo.ing',
    image: 'logo-light-mode_mfmfgc',
    url: 'https://learnbydo.ing/',
  },
  {
    name: 'The Red Code',
    image: 'theRedCode_logo_hbl2ou',
    url: 'https://www.theredcode.it/',
  },
  // {
  //   name: 'LABFORWEB',
  //   image: 'labforweb_cgzags',
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
    image: 'ngvenice_ol9opp',
    url: 'https://ng-venice.org/',
  },
  {
    name: 'Angular Development',
    image: '408666703_198986489936632_8899525206807091161_n_1_f7ox2l',
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
    image: 'ANGULAR.LOVE_fzlp7p',
    url: 'https://www.angular.love/',
  },
  {
    name: 'WeAreDevelopers',
    image: 'WeAreDevelopers_zc70jn',
    url: 'https://www.wearedevelopers.com/',
  },
  {
    name: 'NG Asia',
    image: 'NG_Asia_bsmu5s',
    url: '',
  },
  {
    name: 'Analog',
    image: 'ANALOG_sf5n0o',
    url: 'https://analogjs.org/',
  },
  {
    name: 'GDG Campobasso',
    image: 'gdg_nuovo_logo_-_Nicola_Noviello_kt5xyz',
    url: 'https://gdg.community.dev/gdg-campobasso/',
  },
  {
    name: 'GDG Venezia',
    image: 'gdg_venezia_-_Fabio_Catinella_tms8dr',
    url: 'https://gdg.community.dev/gdg-venezia/',
  },
  {
    name: 'CityJS',
    image: 'cityjs_dqdutg',
    url: 'https://ti.to/cityjs-conference/cityjs-athens-2025/discount/ngrome',
  },
  {
    name: 'Developer Nation',
    image: 'Dn_logo_2025_powered_reg_hi-res_b0wk2e',
    url: 'https://www.developernation.net/',
  },
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
  {
    name: 'GDG Pescara',
    image: 'GDG_Pescara_c1ou7q',
    url: 'https://gdg.community.dev/gdg-pescara/',
  },
  {
    name: 'Women Tech Maker - Italia',
    image: 'wtm_italia_tbcyha',
    url: 'https://twitter.com/wtmitalia',
  },
  {
    name: 'Codemotion',
    image: 'codemotion_hac6ns',
    url: 'http://codemotion.com',
  },
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
  {
    name: 'Angular Kenia',
    image: 'angular_kenya_logo_black_-_Wayne_Gakuo_1_p7pgtq',
    url: 'https://ng-kenya.com/home',
  },
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
  {
    name: 'House of Angular',
    image: 'house_of_angular_mf0hvj',
    url: 'https://twitter.com/houseofangular',
  },
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
  {
    name: 'GDG Torino',
    image: 'logoGDGTorinofull_transparent_-_Loredana_Frontino_nkxw95',
    url: 'https://gdg.community.dev/gdg-torino/',
  },
  {
    name: 'Velletri.dev',
    image: 'IMG_7633_-_DANIELE_MARIO_AREDDU_rddrgl',
    url: 'https://www.linkedin.com/company/velletri-dev/',
  },
  // {
  //   name: 'Mindsharing.tech',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fmindsharing%201%20-%20Aldo%20Pergjergji%20(1).png?alt=media&amp;token=79a1c729-d4c3-4bbb-abec-c530136a4895',
  //   url: 'https://www.mindsharing.tech',
  // },
  {
    name: 'GDG Roma Città',
    image: 'gdg-roma-citta_tpbsil',
    url: 'https://gdg.community.dev/gdg-roma-citta/',
  },
  {
    name: 'ngGirls',
    image: 'ng_girls_s1idtn',
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
  {
    name: 'DotNetCode',
    image: 'dotnet_code_k8ygr9',
    url: 'https://www.meetup.com/it-IT/DotNetCode/',
  },
  {
    name: 'Angular Belgrade',
    image: 'angular-belgrade_kunnnk',
    url: 'https://twitter.com/angularbelgrade',
  },
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
    image: 'ANGULAR_SPACE_j4fl3q',
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
    image: 'logo-ANGULAR_ubew4u',
    url: 'https://angular.dev/',
  },
  {
    name: 'ConTe.it',
    width: 230,
    height: 97,
    image: 'logo-CONTE.IT_przqvc',
    url: 'https://www.conte.it/',
  },
  {
    name: 'Lascaux',
    width: 220,
    height: 93,
    image: 'logo-LASCAUX_rz0g7c',
    url: 'https://www.lascaux.it/',
  },
  {
    name: 'Ineo',
    image: 'logo-INEO_dy9ubn',
    width: 220,
    height: 93,
    url: 'https://www.ineo.it/',
  },
  {
    name: 'Digitouch',
    image: 'logo-DIGITOUCH_uoaz8d',
    width: 250,
    height: 105,
    url: 'https://www.gruppodigitouch.it/',
  },
  {
    name: 'Cloudinary',
    image: 'logo-CLOUDINARY_ybyx4r',
    width: 240,
    height: 101,
    url: 'https://cloudinary.com/',
  },
  {
    name: 'Fabrick',
    width: 220,
    height: 93,
    image: 'logo-FABRICK_db0ybp',
    url: 'https://www.linkedin.com/company/fabrickfinance/mycompany/',
  },
  {
    name: 'Almaviva Digitaltec',
    width: 150,
    height: 150,
    image: 'sponsor_2FAlmaviva_qy71bp',
    url: 'https://www.almaviva.it/it_IT/Societa-del-gruppo/AlmavivA_Digitaltec',
  },
  {
    name: 'Sap',
    width: 180,
    height: 89,
    image: 'sponsor_2FSAP_scrn_R_gqt5j7',
    url: 'https://www.sap.com/',
  },
  {
    name: 'Live Love App',
    width: 200,
    height: 134,
    image: 'sponsor_2FPrimary_20Logo_nyvqei',
    url: 'https://liveloveapp.com/',
  },
  {
    name: 'Keypartner',
    width: 250,
    height: 105,
    image: 'logo-KeyPartner_ztyfpd',
    url: 'https://www.keypartner.com/',
  },
  {
    name: 'ICT Group',
    height: 105,
    width: 250,
    image: 'logo-ICT-GROUP_shp3js',
    url: 'https://ict-group.it/',
  },
  {
    name: 'Namiral - Bit4ID',
    width: 250,
    height: 51,
    image: 'sponsor_2FNamirial_20-_20Bit4Id_jeyama',
    url: 'https://www.namirial.it/',
  },
  {
    name: 'Fervento',
    width: 230,
    height: 97,
    image: 'logo-FERVENTO_xrx3wd',
    url: 'https://fervento.com/',
  },
  {
    name: 'Auth0',
    height: 100,
    width: 250,
    image: 'sponsor_2Fauth0_xq4cej',
    url: 'https://auth0.com/',
  },
  {
    name: 'CyberSafe',
    width: 250,
    height: 50,
    image: 'partner_2FCybersafe_e1mkg5',
    url: 'https://cybersafe.com/',
  },
  {
    name: 'Jetbrains',
    width: 180,
    height: 180,
    image: 'partner_2Fjetbrains_p7jquw',
    url: 'https://www.jetbrains.com/',
  },
  {
    name: 'Stickermule',
    width: 180,
    height: 180,
    image: 'partner_2F02-sticker-mule-logo-light-bg-stacked_zptiif',
    url: 'https://www.stickermule.com/',
  },
  {
    name: 'Blexin',
    width: 250,
    height: 64,
    image: 'sponsor_2Fblexin_cropped_nge1n6',
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
