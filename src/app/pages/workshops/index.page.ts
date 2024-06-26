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
  ): {
    year: string;
    dates: { date: string; events: WorkshopAttributes[] }[];
  }[] {
    // Sort events by date
    workshops.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sort === 'asc'
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });

    // Group events by date
    const groupedEvents: {
      [year: string]: { [key: string]: WorkshopAttributes[] };
    } = {};
    workshops.forEach((workshop) => {
      const date = new Date(workshop.date);
      const year = date.getFullYear().toString();
      const dateString = date.toDateString();
      if (!groupedEvents[year]) {
        groupedEvents[year] = {};
      }
      if (!groupedEvents[year][dateString]) {
        groupedEvents[year][dateString] = [];
      }
      groupedEvents[year][dateString].push(workshop);
    });

    // Convert grouped object to array of objects { date, events }
    const result = Object.keys(groupedEvents).map((year) => ({
      year,
      dates: Object.keys(groupedEvents[year]).map((date) => ({
        date,
        events: groupedEvents[year][date],
      })),
    }));
    result.sort((a, b) => {
      return +b.year - +a.year;
    });
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
            @for (workshopsList of workshopDate.dates; track $index) {
              <workshop-list [workshopsList]="workshopsList"></workshop-list>
            }
          }
        </div>
        <h2 class="my-5 pt-10 text-3xl font-bold">Our Past Workshops</h2>
        @for (
          workshopDate of workshops
            | filterByDate: 'date' : 'past'
            | groupByDate: 'asc';
          track $index
        ) {
          <div class="flex flex-col w-full">
            <h2
              class="text-2xl font-bold leading-6 text-gray-900 dark:text-white my-7"
            >
              {{ workshopDate.year }}
            </h2>
            <div
              class="grid grid-cols-1 gap-5 text-left lg:grid-cols-3 sm:grid-cols-2"
            >
              @for (workshopList of workshopDate.dates; track $index) {
                <workshop-list
                  [workshopsList]="workshopList"
                  [past]="true"
                ></workshop-list>
              }
            </div>
          </div>
        }
      </div>
    }
  `,
})
export default class IndexPage {
  public workshops: WorkshopAttributes[] = injectActiveWorkshops();
  public year: string = new Date().getFullYear().toString();
  constructor() {}
}
