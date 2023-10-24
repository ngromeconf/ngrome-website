import { Component } from '@angular/core';
import { AsyncPipe, DatePipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WorkshopAttributes } from 'src/app/models/workshop.model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  standalone: true,
  imports: [NgFor, NgIf, JsonPipe, RouterLink, AsyncPipe, DatePipe],
  template: `
    <div
      class="max-w-screen-xl p-5 mx-auto dark:text-gray-100"
      *ngIf="workshops$ | async as workshopItems"
    >
      <div
        class="grid grid-cols-1 justify-center gap-5 lg:grid-cols-3 sm:grid-cols-2"
      >
        <div
          *ngFor="let workshop of workshopItems"
          class="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
          style="background-image: url(&quot;{{ workshop.image }}&quot;);"
        >
          <div
            class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"
          ></div>
          <div
            class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3"
          >
            <a
              rel="noopener noreferrer"
              href="{{ workshop.link }}"
              target="_blank"
              class="px-3 py-2 text-xs font-semibold tracki uppercase dark:text-gray-100 bgundefined"
              >{{ workshop.tag }}</a
            >
            <div
              class="flex flex-col justify-start text-center dark:text-gray-100"
            >
              <span class="text-3xl font-semibold leadi tracki">{{
                workshop.workshopDate | date : 'd'
              }}</span>
              <span class="leadi uppercase">{{
                workshop.workshopDate | date : 'LLL'
              }}</span>
            </div>
          </div>
          <h2 class="z-10 p-5">
            <a
              rel="noopener noreferrer"
              href="{{ workshop.link }}"
              target="_blank"
              class="font-medium text-md hover:underline dark:text-gray-100"
            >
              {{ workshop.title }}</a
            >
          </h2>
        </div>
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
    this.workshops$ = this.http.get<WorkshopAttributes[]>('/api/v1/workshops');
  }
}
