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
    <app-page-image
      [image]="
        'https://lh3.googleusercontent.com/pw/AMWts8BYmzSzQS2EFjUySyYrcez0cHtqfiJVtqwMEMlCsKvmHy14sXwBWaarzHuJAps67u30-OOd58sC8DvF3Avl9aHeR_2-aRDLRefcY02nLbD-dg3fZgm6G73V-vF04CIaewWBq8j3StOwjrtXyK_lCHad=w3138-h2092-s-no?authuser=0'
      "
    />
    <app-content />
  `,
    imports: [PageHeadComponent, PageImageComponent, ContentComponent]
})
export default class AboutComponent {}
