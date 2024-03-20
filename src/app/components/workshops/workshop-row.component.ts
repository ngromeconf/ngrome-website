import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WorkshopAttributes } from 'src/app/models/workshop.model';

@Component({
  selector: 'workshop-row',
  standalone: true,
  imports: [DatePipe],
  template: `
    <a href="{{ workshop.link }}">
      <div class="flex flex-row">
        <div class="flex items-center flex-1 p-4 cursor-pointer select-none">
          <div class="flex flex-col  justify-center w-20 h-20 mr-4">
            <div class="relative block">
              <img
                [alt]="workshop.title"
                [src]="workshop.image"
                class="mx-auto object-cover rounded-full h-20 w-20 "
              />
            </div>
          </div>
          <div class="flex-1 pl-1 ">
            <div class="font-bold sm:text-lg text-sm dark:text-white">
              {{ workshop.title }}
            </div>
            <div class="sm:text-sm text-xs text-gray-600 dark:text-gray-200">
              @for (author of workshop.authors; track $index) {
                {{ author.name }}
                @if (workshop.authors[$index + 1]) {
                  |
                }
              }
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex sm:flex-col sm:text-sm text-xs text-gray-600 dark:text-gray-200 text-right  mx-5 mb-2"
      >
        <p>{{ workshop?.tag }}</p>
      </div>
    </a>
  `,
})
export class WorkshopRowComponent {
  @Input() workshop: WorkshopAttributes;
}
