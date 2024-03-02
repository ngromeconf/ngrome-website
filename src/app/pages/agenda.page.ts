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
      [title]="'Conference Agenda'"
      subtitle="<span class='text-4xl text-slate-800'>One track, one love</span><br /><br /><span class='text-2xl'>One day with experts and passionate about Angular</span>"
    />
    <app-content />
  `,
  imports: [PageImageComponent, PageHeadComponent, ContentComponent],
})
export default class AgendaPageComponent {}
