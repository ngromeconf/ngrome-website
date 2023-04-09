import { Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';
import { PageHeadComponent } from '../components/layout/pages/page-head/page-head.component';
import { PageImageComponent } from '../components/layout/pages/main-image/page-image.component';
import { ContentComponent } from '../components/about/main-content/content.component';
import { Apollo, gql } from 'apollo-angular';
import { CommonModule } from '@angular/common';
import Page from '../models/page.model';

export const routeMeta: RouteMeta = {
  title: 'About NGRome',
  meta: [
    {
      name: 'description',
      content: 'NG-Rome is a non-profit community conference run by a team of volunteers.',
    },
    {
      name: 'author',
      content: 'NGRome Team',
    },
    {
      property: 'og:title',
      content: 'About NGRome',
    },
    {
      property: 'og:description',
      content: 'NG-Rome is a non-profit community conference run by a team of volunteers.',
    },
    {
      property: 'og:image',
      content: 'https://ngrome.stream.prepr.io/w_1920/5l2988gibhd2-ng-rome-1805-1.jpg',
    },
  ],
};


@Component({
  selector: 'app-about',
  standalone: true,
  template: ` <app-content *ngIf="!loading" [dataPage]="page" /> `,
  imports: [
    CommonModule,
    PageHeadComponent,
    PageImageComponent,
    ContentComponent,
  ],
})
export default class AboutComponent {
  page: Page | null = null;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {
    this.apollo
      .watchQuery({
        query: gql`
          query About {
            Page(id: "b3d52585-3bbf-4900-86c1-e2ada614c739") {
              _id
              title
              subtitle
              _slug
              stack {
                __typename
                ... on ImageAndText {
                  _id
                  title
                  text
                  image {
                    name
                    url
                  }
                  image_position
                }
              }
              seo {
                _id
                title
                description
                social_media_image {
                  _id
                  url
                }
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result.data.Page);
        this.page = result?.data?.Page;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}
