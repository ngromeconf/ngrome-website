import { Component } from '@angular/core';
import { PageHeadComponent } from '../components/layout/pages/page-head/page-head.component';
import { PageImageComponent } from '../components/layout/pages/main-image/page-image.component';
import { ContentComponent } from '../components/about/main-content/content.component';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <app-page-head
      [title]="'About NGRome Conference & The TEAM'"
      [subtitle]="
        'NG-Rome is a non-profit community conference run by a team of volunteers.
            We are all active members of the tech community, and run or contribute to various free local meetups, workshops, and education initiatives.'
      "
    />
    <app-page-image [image]="'/photo/about-stage.jpg'" />
    <app-content />
  `,
  imports: [PageHeadComponent, PageImageComponent, ContentComponent],
})
export default class AboutComponent {}
