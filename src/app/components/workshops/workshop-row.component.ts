import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkshopAttributes } from 'src/app/models/workshop.model';

@Component({
  selector: 'workshop-row',
  standalone: true,
  imports: [DatePipe],
  template: `
    <section>
      <div class="flex flex-row">
        <div
          class="flex flex-col md:flex-row items-center flex-wrap p-4 w-full select-none justify-center"
        >
          <div class="flex flex-row gap-4 min-w-11">
            @for (author of workshop.authors; track $index) {
              <div class=" flex-row justify-center w-20 h-20">
                <div class="relative block">
                  <img
                    [alt]="author.name"
                    [title]="author.name"
                    [src]="author.image"
                    class="mx-auto object-cover rounded-full h-20 w-20 "
                  />
                </div>
              </div>
            }
          </div>
          <div class="grow pl-2">
            <div class="font-bold text-center text-sm pt-5 dark:text-white sm:text-xl  lg:pt-0 ">
              {{ workshop.title }}
            </div>
          </div>
          <div class="flex gap-4 m-auto sm:text-lg text-right my-4 mx-2">
            @if (!past) {
              <button
                class="tito-widget-button"
                target="_blank"
                (click)="goToWorkshop(workshop.ticket)"
              >
                Tickets
              </button>
            }
            <button
              class="tito-widget-button "
              target="_blank"
              (click)="goToWorkshop(workshop.slug)"
            >
              Detail
            </button>
          </div>
        </div>
      </div>

      <div
        class="flex sm:flex-col sm:text-sm text-xs text-gray-600 dark:text-gray-200 text-right  mx-5 mb-2"
      >
        <span class="">
          {{ workshop?.tag }}
        </span>
      </div>
    </section>
  `,
})
export class WorkshopRowComponent {
  @Input() workshop: WorkshopAttributes;
  @Input() past: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  goToWorkshop(url: string | undefined) {
    if (url && url.startsWith('http')) {
      window.location.href = url;
    } else {
      this.router.navigate([url], { relativeTo: this.route });
    }
  }
}
