import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WorkshopAttributes } from 'src/app/models/workshop.model';

@Component({
  selector: 'workshop-card',
  standalone: true,
  imports: [DatePipe],
  template: `
    <a href="{{ workshop.link }}">
      <div
        class="relative flex items-end justify-start w-full text-left bg-top bg-cover h-96 dark:bg-gray-500"
        style="background-image: url(&quot;{{ workshop.image }}&quot;);"
      >
        <div
          class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"
        ></div>

        <div
          class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3 text-white"
        >
          {{ workshop.tag }}
          <div class="flex flex-col justify-start text-center text-white">
            <span class="text-3xl font-semibold leadi tracki">{{
              workshop.date | date: 'd'
            }}</span>
            <span class="leadi uppercase">{{
              workshop.date | date: 'LLL'
            }}</span>
          </div>
        </div>
        <h2
          class="z-10 p-5 text-white font-bold text-2xl bg-black opacity-75 hover:bg-white hover:text-black dark:bg-gray-900 dark:text-white dark:opacity-75"
        >
          {{ workshop.title }}
        </h2>
      </div></a
    >
  `,
})
export class WorkshopCardComponent {
  @Input() workshop: WorkshopAttributes;
}
