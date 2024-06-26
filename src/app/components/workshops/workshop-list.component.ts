import { DatePipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WorkshopAttributes } from 'src/app/models/workshop.model';
import { WorkshopRowComponent } from './workshop-row.component';

@Component({
  selector: 'workshop-list',
  standalone: true,
  imports: [DatePipe, WorkshopRowComponent, NgClass],
  template: `
    <div
      class="container flex flex-col w-full mx-auto"
      [ngClass]="past ? '' : 'bg-white rounded-lg shadow dark:bg-gray-800'"
      id="workshops"
    >
      <div class="w-full px-4 py-5 border-b sm:px-6">
        <h3 class="text-2xl leading-6 text-gray-900 dark:text-white">
          {{ workshopsList.date | date: (past ? 'MMM dd' : 'MMM dd, yyyy') }}
        </h3>
      </div>
      <ul class="flex flex-col divide" [ngClass]="past ? '' : 'divide-y'">
        @for (workshops of workshopsList.events; track $index) {
          <workshop-row [workshop]="workshops" [past]="past"></workshop-row>
        }
      </ul>
    </div>
  `,
})
export class WorkshopListComponent {
  @Input() workshopsList: { date: string; events: WorkshopAttributes[] };
  @Input() past: boolean = false;
}
