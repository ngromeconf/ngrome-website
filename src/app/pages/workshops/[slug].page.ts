import { RouteMeta } from '@analogjs/router';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import WorkshopDetailComponent from '../../components/workshops/workshop-detail.component';
import { WorkshopAttributes } from '../../models/workshop.model';
import {
  injectWorkshopContent,
  postMetaSlugResolver,
  postTitleResolver,
} from './resolvers';
import { LoaderService } from '../../services/loader.service';
import { LoaderComponent } from '../../components/layout/loader.component';

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
