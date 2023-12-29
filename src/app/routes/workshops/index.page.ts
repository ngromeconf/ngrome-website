import { Component, Pipe, PipeTransform } from '@angular/core';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { WorkshopAttributes } from '../../models/workshop.model';
import { tap } from 'rxjs';
import { WorkshopCardComponent } from '../../components/workshops/workshop-card.component';
import { PageHeadComponent } from '../../components/layout/pages/page-head/page-head.component';

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

    <div
      class="max-w-screen-xl p-5 mx-auto"
      *ngIf="workshops$ | async as workshopItems"
    >
      <div
        class="grid grid-cols-1 justify-center gap-5 lg:grid-cols-3 sm:grid-cols-2"
      >
        <workshop-card
          [class]="
            'col-span-1 sm:col-span-' +
            workshop.col +
            ' lg:col-span-' +
            workshop.col
          "
          *ngFor="
            let workshop of workshopItems | filterByDate: 'date' : 'future'
          "
          [workshop]="workshop"
        />
      </div>
      <h2 class="my-5 pt-10 text-xl font-bold">Our Past Workshops</h2>
      <div
        class="grid grid-cols-1 justify-center gap-5 lg:grid-cols-3 sm:grid-cols-2"
      >
        <workshop-card
          *ngFor="let workshop of workshopItems | filterByDate: 'date' : 'past'"
          [workshop]="workshop"
        />
      </div>
    </div>
  `,
})
export default class IndexPage {
  public workshops$: Observable<WorkshopAttributes[]>;
  constructor(private http: HttpClient) {
    this.getWorkshop();
  }

  getWorkshop() {
    this.workshops$ = this.http
      .get<WorkshopAttributes[]>('/api/v1/workshops')
      .pipe(
        tap((workshops) =>
          workshops.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          ),
        ),
      );
  }
}
