import { DatePipe, NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkshopAttributes } from 'src/app/models/workshop.model';
import { BadgeComponent } from '../shared/badge.component';
import { COLOR_RECIPIENTS } from '../shared/constant';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'workshop-row',
  standalone: true,
  imports: [DatePipe, BadgeComponent, NgIf, NgClass],
  template: `
    <section
      [ngClass]="
        past
          ? 'container flex flex-col w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800 my-4'
          : ''
      "
    >
      <div class="flex flex-row">
        <div
          class="flex justify-center  flex-col md:flex-row items-center  p-4 w-full select-none"
          [ngClass]="past ? 'flex-wrap' : 'sm:flex-nowrap '"
        >
          <div class="flex flex-row gap-4 min-w-11 ">
            @for (author of workshop.authors; track $index) {
              <div class=" flex-row w-20 h-20">
                <div class="relative block">
                  <img
                    [alt]="author.name"
                    [title]="author.name"
                    [src]="author.imageUrl"
                    class="mx-auto object-cover rounded-full h-20 w-20 "
                  />
                </div>
              </div>
            }
          </div>
          <div class="grow pl-2">
            <div
              class="font-bold text-center text-sm pt-5 dark:text-white sm:text-xl  lg:pt-0"
            >
              {{ workshop.title }}
            </div>
          </div>
          <div
            class="flex gap-4 m-auto sm:text-lg text-right my-4  sm:justify-end"
          >
            @if (!past) {
              @if (workshop?.soldOut) {
                <span
                  class="text-md
                        font-extrabold
                        text-transparent
                        bg-clip-text
                        bg-gradient-to-r
                        from-red-ngrome
                        to-pink-600
                        rotate-12
                        border-2
                        border-red-ngrome"
                >
                  SOLD OUT
                </span>
              } @else {
                <button
                  class="tito-widget-button"
                  target="_blank"
                  (click)="goToWorkshop(workshop.slug, workshop.ticket)"
                >
                  Tickets
                </button>
              }
            }
            <button
              class="tito-widget-button "
              target="_blank"
              (click)="goToWorkshop(workshop.slug, undefined)"
            >
              Detail
            </button>
          </div>
        </div>
      </div>

      <div
        class=" overflow-y-auto flex gap-4 sm:justify-end justify-center sm:text-sm text-xs text-gray-600 dark:text-gray-200  sm:text-right text-center  mx-5 mb-2"
      >
        <app-badge
          *ngIf="workshop?.tag"
          [title]="workshop.tag"
          color="blue"
        ></app-badge>
        <app-badge
          *ngIf="workshop?.time"
          [title]="workshop?.time"
          color="gray"
        ></app-badge>
        <app-badge
          *ngIf="workshop?.recipients"
          [title]="workshop?.recipients"
          [color]="colorRecipients[workshop.recipients]"
        ></app-badge>
      </div>
    </section>
  `,
})
export class WorkshopRowComponent {
  @Input() workshop!: WorkshopAttributes;
  @Input() past: boolean;
  colorRecipients = COLOR_RECIPIENTS;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  goToWorkshop(url: string | undefined, ticket: string | undefined) {
    console.log(url, ticket);
    if (url && ticket) {
      this.router.navigate([url], {
        relativeTo: this.route,
        fragment: 'TicketSection',
      });
    } else {
      this.router.navigate([url], { relativeTo: this.route });
    }
  }

  onGoToTicket() {
    if (this.router.url === '/') {
      this.router.navigate([], { fragment: 'TicketSection' });
    } else {
      this.router.navigate(['/'], { fragment: 'TicketSection' });
    }
  }
}
