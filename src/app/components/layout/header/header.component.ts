import { Component, HostListener } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ToggleService } from '../../../services/toggle.service';
import { NAV_MENU, TICKET_URL } from './constants';
import { TicketComponent } from '../../shared/ticket.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  providers: [ToggleService],
  template: `<header class="bg-white" style="height: 89px;">
    <nav
      class="mx-auto flex  p-6 lg:px-8 border-b justify-between"
      style="background: white; position: fixed; width: 100%; top: 0; z-index: 9999;"
      aria-label="Global"
    >
      <div class="flex lg:flex-1 contents">
        <a href="./" class="focus:outline-none focus:shadow-outline">
          <div class="object-contain h-10">
            <img
              ngSrc="./logo-horizontal.svg"
              alt="NGRome Home"
              class="h-full"
              width="242"
              height="40"
            />
          </div>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          (click)="toggleService.updateData(true)"
          aria-label="hidden"
          *ngIf="!(toggleService.toggle$ | async)"
        >
          <span class="sr-only">Open main menu</span>
          <svg fill="#000000" viewBox="0 0 20 20" class="w-6 h-6">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex gap-6 m-auto md:hidden">
        <a
          *ngFor="let item of NavMenu"
          class="font-semibold leading-6 text-gray-900 p-2 transition duration-1000 ease-in-out transform font-base text-opacity-90 hover:text-slate-500 focus:outline-none focus:shadow-none focus:text-mana md:my-0 hover:border-white"
          [href]="item.destinationUrl"
          >{{ item.name }}</a
        >
        <a
          class="font-semibold cursor-pointer inline-flex items-center px-6 py-2 text-sm text-white transition-all duration-500 ease-in-out transform bg-green-600 rounded-md hover:text-white md:mb-2 lg:mb-0 hover:border-white hover:bg-red focus:ring-2 ring-offset-current ring-offset-2"
          (click)="onGoToTicket()"
          target="_blank"
          >Tickets</a
        >
      </div>
    </nav>
    <div
      x-description="Mobile menu, show/hide based on menu open state."
      class="lg:hidden"
      aria-modal="true"
    >
      <div
        x-description="Background backdrop, show/hide based on slide-over state."
        class="fixed inset-0 z-10"
      ></div>
      <div
        [ngStyle]="{
          transform: !(toggleService.toggle$ | async)
            ? 'translateX(100%)'
            : 'translateX(0px)'
        }"
        style="background: white;  z-index: 9999; transition: transform .3s ease"
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="./" class="focus:outline-none focus:shadow-outline">
            <div class="object-contain h-10">
              <img
                ngSrc="./only-logo.svg"
                alt="NGRome Home"
                class="h-full"
                width="40"
                height="40"
              />
            </div>
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            (click)="toggleService.updateData(false)"
            aria-label="hidden"
            *ngIf="toggleService.toggle$ | async"
          >
            <span class="sr-only">Close menu</span>
            <svg fill="#000000" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
                style="display: block"
              ></path>
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                *ngFor="let item of NavMenu"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                [href]="item.destinationUrl"
                >{{ item.name }}</a
              >
              <a
                class="font-semibold cursor-pointer inline-flex items-center px-6 py-2 text-sm text-white transition-all duration-500 ease-in-out transform bg-green-600 rounded-md hover:text-white md:mb-2 lg:mb-0 hover:border-white hover:bg-red focus:ring-2 ring-offset-current ring-offset-2"
                (click)="onGoToTicket()"
                target="_blank"
                >Tickets</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>`,
  styles: [],
  imports: [CommonModule, NgOptimizedImage, TicketComponent],
})
export class HeaderComponent {
  public NavMenu = NAV_MENU;
  public TicketUrl = TICKET_URL;

  constructor(
    public toggleService: ToggleService,
    private router: Router,
  ) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: HostListener) {
    this.toggleService.updateData(false);
  }
  onGoToTicket() {
    if (this.router.url === '/') {
      this.router.navigate([], { fragment: 'TicketSection' });
    } else {
      this.router.navigate(['/'], { fragment: 'TicketSection' });
    }
  }
}
