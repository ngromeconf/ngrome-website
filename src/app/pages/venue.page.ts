import { Component } from '@angular/core';
import { PageHeadComponent } from '../components/layout/pages/page-head/page-head.component';
import { PageImageComponent } from '../components/layout/pages/main-image/page-image.component';
import { ContentComponent } from '../components/venue/content.component';
import { RouteMeta } from '@analogjs/router';
import { postMetaPageResolver, postTitleResolver } from './resolvers';

export const routeMeta: RouteMeta = {
  meta: postMetaPageResolver,
  data: { slug: 'about' },
  title: postTitleResolver,
};

@Component({
  selector: 'app-venue',
  standalone: true,
  template: `
    <app-page-head
      [title]="'CONFERENCE VENUE'"
      [subtitle]="
        'Midas Palace Hotel (Rome) - Located a few kilometers from the center of Rome Midas Palace Hotel four-star hotel and Convention Center is the combination of business and relaxation'
      "
    />
    <!-- <app-page-image [image]="'https://res.cloudinary.com/dp1gwjz5w/image/upload/f_auto,q_auto/v1/venue/kouclpg2l8bkgbsbzkul'" /> -->
    <app-page-image [image]="'https://res.cloudinary.com/dp1gwjz5w/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710172530/venue/midas-hotel-Main-Entrance-Midas_galt3a.jpg?_s=public-apps'" />
    <app-content />
  `,
  imports: [PageHeadComponent, PageImageComponent, ContentComponent],
})
export default class VenueComponent {}
