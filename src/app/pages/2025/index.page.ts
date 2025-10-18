import { Component } from '@angular/core';
import { PageHeadComponent } from '../../components/layout/pages/page-head/page-head.component';
import { PageImageComponent } from '../../components/layout/pages/main-image/page-image.component';
import { ContentComponent } from './content/content.component';
import { RouteMeta } from '@analogjs/router';
import { postMetaPageResolver, postTitleResolver } from './resolvers_2025';
import { PAGE_SLUG } from './constant';

export const routeMeta: RouteMeta = {
  meta: postMetaPageResolver,
  data: { slug: 2025 },
  title: postTitleResolver,
};

@Component({
  standalone: true,
  template: `
    <app-page-head [title]="title" subtitle="" />
    <app-content />
  `,
  imports: [PageImageComponent, PageHeadComponent, ContentComponent],
})
export default class AgendaPageComponent {
  readonly PAGE_SLUG = PAGE_SLUG;
  readonly title = 'Relive our ' + PAGE_SLUG;
}
