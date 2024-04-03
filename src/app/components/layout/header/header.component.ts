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
  template: `
    <section class="pb-24">
      <nav
        class="py-6 border-b bg-white fixed w-full "
        style="top: 0; z-index: 1000;"
        aria-label="Global"
      >
        <div class="container justify-between flex w-full mx-auto px-4 lg-px-8">
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
            @for (item of NavMenu; track $index) {
              @if (!item.pastEdition && item.visible) {
                <a
                  class="leading-6 text-gray-900 p-2 transition duration-1000 ease-in-out transform font-base text-opacity-90 hover:text-slate-500 focus:outline-none focus:shadow-none focus:text-mana md:my-0 hover:border-white"
                  [href]="item.destinationUrl"
                  >{{ item.name }}</a
                >
              }
            }
            <!--  <div
              class="pastEdition cursor-default md:my-0 leading-6 text-gray-900 p-2 transition duration-1000 ease-in-out transform font-base text-opacity-90"
            >
              <a class="focus:outline-none focus:shadow-none focus:text-mana"
                >Past Editions</a
              >
              <div
                class="popover opacity-0 -left-8 absolute bg-white max-w-md overflow-hidden ring-1 ring-gray-900/5 rounded-md shadow-lg top-full w-40 z-10"
              >
                <div class="py-4">
                  @for (item of NavMenu; track $index) {
                    @if (item.pastEdition && item.visible) {
                      <a
                        [href]="item.destinationUrl"
                        target="_blank"
                        class="relative flex items-center px-4 gap-x-6 p-4 leading-6 hover:bg-red-ngrome  hover:text-white"
                      >
                        <div class="m-auto">
                          {{ item.name }}
                        </div>
                      </a>
                    }
                  }
                </div>
              </div>
            </div> -->
          </div>
          <div class="lg:contents hidden lg:contents gap-6 m-auto md:hidden">
            <button
              class="tito-widget-button"
              (click)="onGoToTicket()"
              target="_blank"
            >
              Tickets
            </button>
          </div>
        </div>
      </nav>
      <div
        x-description="Mobile menu, show/hide based on menu open state."
        class="lg:hidden"
        aria-modal="true"
      >
        <div
          *ngIf="toggleService.toggle$ | async"
          x-description="Background backdrop, show/hide based on slide-over state."
          class="fixed inset-0 z-10"
        ></div>
        <div
          [ngStyle]="{
            transform: !(toggleService.toggle$ | async)
              ? 'translateX(100%)'
              : 'translateX(0px)'
          }"
          style="z-index: 1000; transition: transform .3s ease"
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-red-ngrome py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="pr-6 pl-10 flex items-center justify-between">
            <a href="./" class="focus:outline-none focus:shadow-outline">
              <div class="object-contain h-10">
                <img
                  ngSrc="/ngrome-logos/ngrome-white-shield.svg"
                  alt="NGRome Home"
                  class="h-full"
                  width="40"
                  height="40"
                />
              </div>
            </a>
            <div
              class="bg-white px-5 py-1 rounded-3xl cursor-pointer flex"
              style="margin-left: 20%;"
              (click)="onGoToTicket()"
            >
              <a
                class="text-base  font-semibold  flex text-red-ngrome hover-ticket"
                >Tickets
                <img
                  ngSrc="/menu/ticket.svg"
                  alt="NGRome ticket"
                  class="h-full ml-2"
                  width="24"
                  height="24"
              /></a>
            </div>

            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              (click)="toggleService.updateData(false)"
              aria-label="hidden"
              *ngIf="toggleService.toggle$ | async"
            >
              <span class="sr-only">Close menu</span>
              <svg fill="#ffffff" viewBox="0 0 20 20" class="w-6 h-6">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                  style="display: block"
                ></path>
              </svg>
            </button>
          </div>
          <div class="flex items-center justify-between pr-6 pl-10 ">
            <h1 class="mt-2 font-semibold text-white text-2xl">NG ROME</h1>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 pt-20 text-left">
                @for (item of NavMenu; track $index) {
                  @if (!item.pastEdition && item.visible) {
                    <a
                      [href]="item.destinationUrl"
                      [target]="item?.pageSite ? '_self' : '_target'"
                      class="pr-6 pl-10 flex hover:bg-white hover-white"
                    >
                      <div class="w-10" style="margin: auto 0;">
                        @if (item?.icon) {
                          <div
                            [className]="item.icon"
                            style="width: 24px; height: 24px;"
                          ></div>
                        }
                      </div>
                      <span
                        class="-mx-3 block  px-3 py-2 text-base leading-7 font-semibold text-white"
                        >{{ item.name }}</span
                      >
                    </a>
                  }
                }
                <!--   <hr class="mr-6 ml-10 " />
                @for (item of NavMenu; track $index) {
                  @if (item?.pastEdition && item.visible) {
                    <a
                      [href]="item.destinationUrl"
                      [target]="item?.pageSite ? '_self' : '_target'"
                      class="flex pr-6 pl-10 hover-white hover:bg-white"
                    >
                      <div class="w-10" style="margin: auto 0;">
                        @if (item?.icon) {
                          <img
                            [ngSrc]="'/menu/' + item.icon + '.svg'"
                            [alt]="item.name"
                            class="h-full ml-2"
                            width="20"
                            height="20"
                          />
                        }
                      </div>
                      <span
                        class="-mx-3 block px-3 py-2 text-base leading-7 font-semibold text-white"
                        >{{ item.name }}</span
                      >
                    </a>
                  }
                } -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./header.component.css'],
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
