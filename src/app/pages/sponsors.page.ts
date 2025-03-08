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
    <app-page-head [title]="title" [subtitle]="subtitle" />
    <app-page-image
      [image]="
        'https://res.cloudinary.com/dp1gwjz5w/image/upload/t_cover-page-image/v1741439284/website-assets/sponsor-cover_ogqlsn.jpg'
      "
    />
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
export default class SponsorComponent {
  public title =
    'Become a Sponsor of NGRome: Connect with the Heart of European Angular Development';
  public subtitle = `NGRome isn't just another Angular conference; it's the premier gathering in the Eternal City, drawing hundreds of passionate developers and tech innovators from across Europe and beyond. By becoming a sponsor, you'll position your company at the forefront of the Angular community, right here in the vibrant heart of Rome.`;
}
