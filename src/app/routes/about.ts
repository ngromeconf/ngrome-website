import { Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';
import { PageHeadComponent } from '../components/layout/pages/page-head/page-head.component';
import { PageImageComponent } from '../components/layout/pages/main-image/page-image.component';
import { ContentComponent } from '../components/about/main-content/content.component';
import { NgIf, AsyncPipe } from '@angular/common';
import { Page } from '../models/page.model';
import { postMetaResolver, postTitleResolver, resolvePageData } from '../services/resolvers';
import { Observable } from 'rxjs';

export const routeMeta: RouteMeta = {
  title: postTitleResolver,
  meta: postMetaResolver,
};


@Component({
  selector: 'app-about',
  standalone: true,
  template: ` <app-content [dataPage]="page$ | async" /> `,
  imports: [
    NgIf,
    AsyncPipe,
    PageHeadComponent,
    PageImageComponent,
    ContentComponent,
  ],
})
export default class AboutComponent {
  documentID = 'b3d52585-3bbf-4900-86c1-e2ada614c739';
  page$: Observable<Page> | null = resolvePageData(this.documentID);
  
}
