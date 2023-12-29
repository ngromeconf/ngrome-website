import { Component } from '@angular/core';
import { HeaderComponent } from '../components/layout/header/header.component';
import { FooterComponent } from '../components/layout/footer/footer.component';
import { PageHeadComponent } from '../components/layout/pages/page-head/page-head.component';
import { PageImageComponent } from '../components/layout/pages/main-image/page-image.component';
import { ContentComponent } from '../components/sponsors/content/content.component';
import { SponsorInterface } from '../models/sponsor.model';

@Component({
  selector: 'app-sponsor',
  standalone: true,
  template: `
    <app-page-head
      [title]="'Sponsors'"
      [subtitle]="
        'We want to say thank you to our Sponsors and Community Partners! They help make NG Rome Conference possible. Come and say Ciao the day of the conference.'
      "
    />
    <app-page-image [image]="'/photo/sponsor-cover.jpg'" />
    <app-content [pastEditionSponsors]="pastEditionSponsors" />
  `,
  imports: [
    HeaderComponent,
    FooterComponent,
    PageImageComponent,
    PageHeadComponent,
    ContentComponent,
  ],
})
export default class SponsorComponent {
  pastEditionSponsors: SponsorInterface[] = [
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
      name: 'Edgemony',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2FLogo-Edgemony01.png?alt=media&token=904aeff4-b737-4661-81be-e41933308987',
      url: '',
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
      name: 'Stickermule',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2Fblexin_cropped.svg?alt=media&token=e1e38c3b-396f-4810-bbcd-4ac89145055d',
      url: '',
    },
  ];
}
