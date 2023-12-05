import { H3Event, defineEventHandler } from 'h3';
import { SponsorInterface, Sponsors, sponsorType } from 'src/app/models/sponsor.model';

export default defineEventHandler((event: H3Event) => {
  if ((event.context.params?.['type'])){
    return {mainSponsor}
  }
  else return sponsors;
});

const mainSponsor: SponsorInterface[] = [
  {
    name: 'Microsoft',
    image: './sponsors/Microsoft-logo.svg',
    url: 'https://microsoft.com',
  },
];

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

const sponsors: Sponsors = {
    Main: mainSponsor,
    Gold: goldSponsors,
    Silver: silverSponsor,
    Bronze: bronzeSponsor,
    Diversity: diversitySponsor,
    technical: technicalSponsors,
};
