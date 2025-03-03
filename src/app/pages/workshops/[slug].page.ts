import { RouteMeta } from '@analogjs/router';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import WorkshopDetailComponent from '../../components/workshops/workshop-detail.component';
import { WorkshopAttributes } from '../../models/workshop.model';
import {
  injectWorkshopContent,
  postMetaSlugResolver,
  postTitleResolver,
} from './resolvers';

export const routeMeta: RouteMeta = {
  meta: postMetaSlugResolver,
  title: postTitleResolver,
};

@Component({
  standalone: true,
  imports: [WorkshopDetailComponent, AsyncPipe],
  template: `
    @if (workshop$ | async; as workshop) {
      <app-detail-workshop [workshop]="workshop"></app-detail-workshop>
    }
  `,
})
export default class PastWorkshopDetailPageComponent {
  public workshop$: Observable<{
    content: string;
    attributes: WorkshopAttributes;
  }> = injectWorkshopContent();
}
