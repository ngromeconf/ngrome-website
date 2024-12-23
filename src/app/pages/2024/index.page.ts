import { Component } from '@angular/core';
import { PageHeadComponent } from '../../components/layout/pages/page-head/page-head.component';
import { PageImageComponent } from '../../components/layout/pages/main-image/page-image.component';
import { ContentComponent } from './content/content.component';
import { RouteMeta } from '@analogjs/router';
import { postMetaPageResolver, postTitleResolver } from './resolvers';

export const routeMeta: RouteMeta = {
  meta: postMetaPageResolver,
  data: { slug: 'agenda' },
  title: postTitleResolver,
};

@Component({
  standalone: true,
  template: `
    <app-page-head [title]="'Relive our 2024'" subtitle="" />
    <app-content />
  `,
  imports: [PageImageComponent, PageHeadComponent, ContentComponent],
})
export default class AgendaPageComponent {}
