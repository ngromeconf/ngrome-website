import { RouteMeta } from '@analogjs/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import WorkshopDetailComponent from '../../../components/workshops/workshop-detail.component';
import { WorkshopAttributes } from '../../../models/workshop.model';
import {
  injectPastWorkshopContent,
  postMetaSlugResolver,
  postTitleResolver,
} from '../resolvers';

export const routeMeta: RouteMeta = {
  meta: postMetaSlugResolver,
  title: postTitleResolver,
};

@Component({
  standalone: true,
  imports: [WorkshopDetailComponent, AsyncPipe, NgIf],
  template: `
    <app-detail-workshop
      *ngIf="workshop$ | async as workshop"
      [workshop]="workshop"
    ></app-detail-workshop>
  `,
})
export default class PastWorkshopDetailPageComponent {
  workshop$: Observable<{ content: string; attributes: WorkshopAttributes }> =
    injectPastWorkshopContent();
}
