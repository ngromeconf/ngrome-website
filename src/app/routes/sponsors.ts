import { Component } from '@angular/core';
import { HeaderComponent } from "../components/layout/header/header.component";
import { FooterComponent } from "../components/layout/footer/footer.component";
import { PageHeadComponent } from "../components/pages/page-head/page-head.component";
import { PageImageComponent } from "../components/pages/main-image/page-image.component";

@Component({
    selector: 'app-sponsor',
    standalone: true,
    template: `
      <app-page-head [title]="'Sponsors'"
      [subtitle]="
        'We want to say thank you to our Sponsors and Community Partners! They help make NG Rome Conference possible. Come and say Ciao the day of the conference.'
      "/>
      <app-page-image
      [image]="
        'https://lh3.googleusercontent.com/pw/AMWts8BavlqwkJVPfGU8ws7-kiN91t00Brb_kXTlrUDf3YhUt4YWoa25-dBzvYaKG8j2hl-yddz2Oeov6LhJGXkSWv2czapgK2s5Nd1CyV7r_8bucd2W3V0ueMsl85OHcglRwgWtdy3l2zcBafbnnPfqE9-5=w3138-h2092-s-no?authuser=0'
      "
    />
  `,
    imports: [HeaderComponent, FooterComponent, PageImageComponent, PageHeadComponent]
})
export default class SponsorComponent {

}
