import { Component, Pipe, PipeTransform } from '@angular/core';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WorkshopAttributes } from '../../models/workshop.model';
import { PageHeadComponent } from '../../components/layout/pages/page-head/page-head.component';
import { injectActiveWorkshops } from './resolvers';
import { RouteMeta } from '@analogjs/router';
import { WorkshopListComponent } from '../../components/workshops/workshop-list.component';

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

@Pipe({
  name: 'groupByDate',
  standalone: true,
})
export class GroupByDatePipe implements PipeTransform {
  transform(
    workshops: WorkshopAttributes[],
    sort: 'asc' | 'desc' = 'asc',
  ): { date: string; events: WorkshopAttributes[] }[] {
    // Sort events by date
    workshops.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sort === 'asc'
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });

    // Group events by date
    const groupedEvents: { [key: string]: WorkshopAttributes[] } = {};
    workshops.forEach((workshop) => {
      const date = new Date(workshop.date).toDateString();
      if (!groupedEvents[date]) {
        groupedEvents[date] = [];
      }
      groupedEvents[date].push(workshop);
    });

    // Convert grouped object to array of objects { date, events }
    const result = Object.keys(groupedEvents).map((date) => ({
      date,
      events: groupedEvents[date],
    }));
    return result;
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
    WorkshopListComponent,
    FilterByDatePipe,
    GroupByDatePipe,
  ],
  template: `
    <app-page-head
      [title]="'Workshops'"
      [subtitle]="'Level up your skills during a full-day hands-on workshop.'"
    />
    @if (workshops) {
      <div class="max-w-screen-xl p-5 mx-auto">
        <div class="grid grid-cols-1 gap-5 text-left">
          @for (
            workshopDate of workshops
              | filterByDate: 'date' : 'future'
              | groupByDate;
            track $index
          ) {
            <workshop-list [workshopsList]="workshopDate"></workshop-list>
          }
        </div>
        <h2 class="my-5 pt-10 text-xl font-bold">Our Past Workshops</h2>
        <div
          class="grid grid-cols-1 gap-5 text-left lg:grid-cols-3 sm:grid-cols-2"
        >
          @for (
            workshopDate of workshops
              | filterByDate: 'date' : 'past'
              | groupByDate: 'desc';
            track $index
          ) {
            <workshop-list
              [workshopsList]="workshopDate"
              [past]="true"
            ></workshop-list>
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
