import { Component } from '@angular/core';
import { PageHeadComponent } from '../components/layout/pages/page-head/page-head.component';
import { PageImageComponent } from '../components/layout/pages/main-image/page-image.component';
import { ContentComponent } from '../components/agenda/content/content.component';
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
    <app-page-head
      [title]="'Thursday'"
      subtitle="<span class='text-4xl text-slate-800'>June 27, 2024</span><br /><br /><a href='/venue' class='text-2xl'>Midas Palace Hotel (Rome)</a>"
    />
    <app-content />
  `,
  imports: [PageImageComponent, PageHeadComponent, ContentComponent],
})
export default class AgendaPageComponent {}
