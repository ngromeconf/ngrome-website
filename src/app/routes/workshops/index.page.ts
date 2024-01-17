import { Component, Pipe, PipeTransform } from '@angular/core';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WorkshopAttributes } from '../../models/workshop.model';
import { WorkshopCardComponent } from '../../components/workshops/workshop-card.component';
import { PageHeadComponent } from '../../components/layout/pages/page-head/page-head.component';
import { injectActiveWorkshops } from './resolvers';
import { RouteMeta } from '@analogjs/router';

@Pipe({
  name: 'filterByDate',
  standalone: true,
})
export class FilterByDatePipe implements PipeTransform {
  transform(
    workshops: WorkshopAttributes[],
    propName: string,
    pastOrFuture: 'past' | 'future',
  ): WorkshopAttributes[] {
    const now = new Date();
    return workshops.filter((workshop) => {
      const date = workshop[propName] as string;
      const workshopDate = new Date(date);
      if (pastOrFuture === 'past') {
        return workshopDate < now;
      } else {
        return workshopDate > now;
      }
    });
  }
}

export const routeMeta: RouteMeta = {
  title: 'NG Rome - Workshops',
};

@Component({
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    JsonPipe,
    RouterLink,
    AsyncPipe,
    PageHeadComponent,
    WorkshopCardComponent,
    FilterByDatePipe,
  ],
  template: `
    <app-page-head
      [title]="'Workshops'"
      [subtitle]="'Level up your skills during a full-day hands-on workshop.'"
    />
    @if (workshops) {
      <div class="max-w-screen-xl p-5 mx-auto">
        <div
          class="grid grid-cols-1 justify-center gap-5 lg:grid-cols-2 sm:grid-cols-2"
        >
          @for (
            workshop of workshops | filterByDate: 'date' : 'future';
            track $index
          ) {
            <workshop-card
              [class]="
                'col-span-1 sm:col-span-' +
                workshop.col +
                ' lg:col-span-' +
                workshop.col
              "
              [workshop]="workshop"
            />
          }
        </div>
        <h2 class="my-5 pt-10 text-xl font-bold">Our Past Workshops</h2>
        <div
          class="grid grid-cols-1 justify-center gap-5 lg:grid-cols-3 sm:grid-cols-2"
        >
          @for (
            workshop of workshops | filterByDate: 'date' : 'past';
            track $index
          ) {
            <workshop-card [workshop]="workshop" />
          }
        </div>
      </div>
    }
  `,
})
export default class IndexPage {
  public workshops: WorkshopAttributes[] = injectActiveWorkshops();
  constructor() {}
}
