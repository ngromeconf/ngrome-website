import { Component } from '@angular/core';
import { PageHeadComponent } from '../components/layout/pages/page-head/page-head.component';
import { PageImageComponent } from '../components/layout/pages/main-image/page-image.component';
import { VenueContentComponent } from '../components/venue/content.component';
import { RouteMeta } from '@analogjs/router';
import { postMetaPageResolver, postTitleResolver } from './resolvers';

export const routeMeta: RouteMeta = {
  meta: postMetaPageResolver,
  data: { slug: 'venue' },
  title: postTitleResolver,
};

@Component({
  selector: 'app-venue-page',
  standalone: true,
  template: `
    <app-page-head
      [title]="'Centro Congressi Frentani'"
      [subtitle]="
        'Nestled in the vibrant center of Rome, the Centro Congressi Frentani offers a strategic and accessible location for a wide range of events. Situated within easy reach of Termini Station, La Sapienza University, the National Research Council (CNR), Policlinico Umberto I Hospital, and the National Library, our venue provides unparalleled convenience for attendees.'
      "
    />
    <!-- <app-page-image [image]="'https://res.cloudinary.com/dp1gwjz5w/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710172530/venue/midas-hotel-Main-Entrance-Midas_galt3a.jpg?_s=public-apps'" /> -->
    <app-venue-content />
  `,
  imports: [PageHeadComponent, PageImageComponent, VenueContentComponent],
})
export default class VenuePageComponent {}
