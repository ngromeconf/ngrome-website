import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WorkshopAttributes } from 'src/app/models/workshop.model';
import { WorkshopRowComponent } from './workshop-row.component';

@Component({
  selector: 'workshop-list',
  standalone: true,
  imports: [DatePipe, WorkshopRowComponent],
  template: `
    <div
      class="container flex flex-col w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800"
    >
      <div class="w-full px-4 py-5 border-b sm:px-6">
        <h3 class="text-2xl font-bold leading-6 text-gray-900 dark:text-white">
          {{ workshopsList.date | date: (!past ? 'MMM dd' : 'MM-dd-yyyy') }}
        </h3>
      </div>
      <ul class="flex flex-col divide-y divide">
        @for (workshops of workshopsList.events; track $index) {
          <workshop-row [workshop]="workshops"></workshop-row>
        }
      </ul>
    </div>
  `,
})
export class WorkshopListComponent {
  @Input() workshopsList: { date: string; events: WorkshopAttributes[] };
  @Input() past: boolean = false;
}
