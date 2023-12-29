import { Component } from '@angular/core';
import { PageHeadComponent } from '../components/layout/pages/page-head/page-head.component';
import { PageImageComponent } from '../components/layout/pages/main-image/page-image.component';
import { ContentComponent } from '../components/about/main-content/content.component';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  meta: [
    {
      name: 'description',
      content:
        'NGRome Conference: Unleash Your Angular Expertise in the Eternal City! Connect with industry experts and network with fellow enthusiasts. June 27, 2024 / Rome, Italy',
    },
    {
      name: 'author',
      content:
        'Luciano Murruni, Valentina Ricci, Raul Valentini, Giovanni Malacaria, Giuseppe Ettorre',
    },
    {
      property: 'og:title',
      content: 'NG Rome - ABOUT NGROME CONFERENCE & THE TEAM',
    },
    {
      property: 'og:description',
      content:
        'NG-Rome is a non-profit community conference run by a team of volunteers. We are all active members of the tech community, and run or contribute to various free local meetups, workshops, and education initiatives. June 27, 2024 / Rome, Italy',
    },
    {
      property: 'og:image',
      content: '/photo/ngrome-cover-mmxxiv-social.jpg',
    },
  ],
};

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <app-page-head
      [title]="'About NGRome Conference & The TEAM'"
      [subtitle]="
        'NG-Rome is a non-profit community conference run by a team of volunteers. We are all active members of the tech community, and run or contribute to various free local meetups, workshops, and education initiatives.'
      "
    />
    <app-page-image [image]="'/photo/about-stage.jpg'" />
    <app-content />
  `,
  imports: [PageHeadComponent, PageImageComponent, ContentComponent],
})
export default class AboutComponent {}
