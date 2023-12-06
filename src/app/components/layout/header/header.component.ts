import { Component, HostListener } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ToggleService } from '../../../services/toggle.service';
import { NAV_MENU, TICKET_URL } from './constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  providers: [ToggleService],
  template: `
    <section class="border-b">
      <div
        class="flex flex-col w-full p-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-16 lg:items-center lg:justify-between lg:flex-row md:px-6"
      >
        <div class="flex flex-row items-center justify-between">
          <a
            href="./index.html"
            class="focus:outline-none focus:shadow-outline"
          >
            <div class="object-contain h-10">
              <img ngSrc="/logo-horizontal.svg" alt="NGRome Home" class="h-full" width="242" height="40" />
            </div>
          </a>
          <button
            class="lg:hidden focus:outline-none"
            (click)="toggleService.updateData(false)"
            aria-label="hidden"
            *ngIf="toggleService.toggle$ | async"
          >
            <svg fill="#000000" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
                style="display: block"
              ></path>
            </svg>
          </button>
          <button
            class="lg:hidden focus:outline-none"
            (click)="toggleService.updateData(true)"
            aria-label="hidden"
            *ngIf="!(toggleService.toggle$ | async)"
          >
            <svg fill="#000000" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          [ngClass]="{
            flex: toggleService.toggle$ | async,
            hidden: !(toggleService.toggle$ | async)
          }"
          class="flex-col items-end flex-grow hidden px-5 md:pb-0 lg:flex lg:justify-end lg:flex-row lg:space-x-4"
        >
          <a
            *ngFor="let item of NavMenu"
            class="p-2 text-black transition duration-1000 ease-in-out transform font-base text-opacity-90 hover:text-slate-500 focus:outline-none focus:shadow-none focus:text-mana md:my-0 hover:border-white"
            [href]="item.destinationUrl"
            >{{ item.name }}</a
          >
          <a
            class="inline-flex items-center px-6 py-2 text-sm text-white transition-all duration-500 ease-in-out transform bg-green-500 rounded-md hover:text-white md:mb-2 lg:mb-0 hover:border-white hover:bg-red focus:ring-2 ring-offset-current ring-offset-2"
            [href]="TicketUrl"
            target="_blank"
            >Tickets</a
          >
        </nav>
      </div>
    </section>
  `,
  styles: [],
})
export class HeaderComponent {
  public NavMenu = NAV_MENU;
  public TicketUrl = TICKET_URL;

  constructor(public toggleService: ToggleService) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: HostListener) {
    this.toggleService.updateData(false);
  }
}
