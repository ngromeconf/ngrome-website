import { Component } from '@angular/core';
import { HeaderComponent } from '../components/layout/header/header.component';
import { FooterComponent } from '../components/layout/footer/footer.component';
import { PageHeadComponent } from '../components/layout/pages/page-head/page-head.component';
import { PageImageComponent } from '../components/layout/pages/main-image/page-image.component';
import { ContentComponent } from '../components/sponsors/content/content.component';
import { RouteMeta } from '@analogjs/router';
import { postMetaPageResolver, postTitleResolver } from './resolvers';

export const routeMeta: RouteMeta = {
  meta: postMetaPageResolver,
  data: { slug: 'sponsors' },
  title: postTitleResolver,
};

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
    <app-content />
  `,
  imports: [
    HeaderComponent,
    FooterComponent,
    PageImageComponent,
    PageHeadComponent,
    ContentComponent,
  ],
})
export default class SponsorComponent {}
