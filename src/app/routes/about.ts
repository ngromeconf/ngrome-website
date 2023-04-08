import { Component } from '@angular/core';
import { PageHeadComponent } from '../components/layout/pages/page-head/page-head.component';
import { PageImageComponent } from '../components/layout/pages/main-image/page-image.component';
import { ContentComponent } from '../components/about/main-content/content.component';
import { Apollo, gql } from 'apollo-angular';
import { CommonModule } from '@angular/common';
import Page from '../models/page.model';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <app-content *ngIf="!loading" [dataPage]="page"/>
  `,
  imports: [CommonModule, PageHeadComponent, PageImageComponent, ContentComponent],
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
            page(_id: "d3ffc272-c15a-49a5-85b9-0a9158635045") {
              id
              data {
                title
                sections {
                  _id
                  header
                  description {
                    html
                  }
                  image {
                    url
                  }
                }
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result.data.page);
        this.page = result?.data?.page;
        this.loading = result.loading;
        this.error = result.error;
      });
  }

}
