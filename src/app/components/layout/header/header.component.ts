import { Component, HostListener } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ToggleService } from '../../../services/toggle.service';
import { NAV_MENU, TICKET_URL } from './constants';
import { TicketComponent } from '../../shared/ticket.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  providers: [ToggleService],
  template: `
    <section class="header">
      <nav
        class="py-6 w-full "
        style="top: 0; z-index: 1000;"
        aria-label="Global"
        x
      >
        <div class="container justify-between flex w-full mx-auto px-4 lg-px-8">
          <div class="flex lg:flex-1">
            <a routerLink="/" class="focus:outline-none focus:shadow-outline">
              <div class="object-contain h-10">
                <svg
                  width="220"
                  height="40"
                  viewBox="0 0 809 147"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-full"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M188.028 20.3792L255.287 82.5085V25.1553H274.115V124.862L206.974 62.7329V120.126H188.028V20.3792ZM341.057 84.8374V69.4037H388.028C388.304 76.6272 387.436 83.4559 385.462 89.8504C383.489 96.2844 380.449 101.929 376.384 106.784C372.318 111.679 367.227 115.507 361.187 118.31C355.109 121.112 348.162 122.494 340.268 122.494C330.4 122.494 321.638 120.402 313.98 116.178C306.323 111.994 300.323 106.113 295.981 98.6132C291.64 91.1135 289.469 82.4296 289.469 72.601C289.469 62.7329 291.679 54.1279 296.139 46.7072C300.56 39.2864 306.678 33.5234 314.414 29.4183C322.151 25.3132 330.953 23.2606 340.82 23.2606C350.491 23.2606 358.819 25.2342 365.806 29.142C372.792 33.0892 378.436 38.339 382.778 44.9309L366.082 54.6806C363.635 50.6149 360.359 47.2598 356.254 44.6546C352.149 42.0494 347.017 40.7074 340.86 40.7074C335.176 40.7074 329.966 42.01 325.229 44.5757C320.532 47.1414 316.783 50.8123 314.02 55.549C311.257 60.2856 309.875 65.9696 309.875 72.5615C309.875 79.1534 311.217 84.8769 313.941 89.7714C316.664 94.666 320.335 98.4159 324.993 101.1C329.65 103.784 334.939 105.087 340.82 105.087C348.596 105.087 354.675 103.153 359.017 99.2448C363.358 95.3765 366.398 90.5214 368.095 84.7585H341.057V84.8374ZM461.325 85.6269V120.047H441.787V25.1948H453.747H461.365H473.838C481.337 25.1948 487.771 26.4579 493.06 28.9841C498.349 31.5103 502.415 35.0628 505.217 39.6416C508.019 44.2204 509.44 49.5097 509.44 55.549C509.44 62.2198 507.704 67.9827 504.23 72.8378C500.757 77.6534 495.783 81.1665 489.35 83.3375L515.164 120.047H491.955L469.693 85.6269H461.325ZM461.325 70.1932H472.575C477.627 70.1932 481.653 68.9695 484.653 66.4828C487.652 63.996 489.152 60.5225 489.152 56.1016C489.152 51.6017 487.652 48.0887 484.653 45.6019C481.653 43.1152 477.627 41.8916 472.575 41.8916H461.325V70.1932ZM520.69 72.6405C520.69 65.417 521.953 58.7857 524.479 52.7859C527.005 46.7861 530.557 41.5758 535.057 37.1943C539.596 32.8129 544.885 29.4183 551.003 26.971C557.121 24.5237 563.752 23.3001 570.897 23.3001C578.12 23.3001 584.79 24.5237 590.869 26.971C596.948 29.4183 602.237 32.8129 606.815 37.1943C611.394 41.5758 614.907 46.7861 617.393 52.7859C619.88 58.7857 621.143 65.417 621.143 72.6405C621.143 79.7849 619.88 86.4163 617.393 92.495C614.907 98.6132 611.433 103.863 606.934 108.363C602.434 112.823 597.145 116.297 591.066 118.784C584.948 121.27 578.238 122.494 570.897 122.494C563.555 122.494 556.845 121.27 550.727 118.784C544.609 116.297 539.32 112.823 534.86 108.363C530.36 103.902 526.887 98.6132 524.4 92.495C521.913 86.3768 520.69 79.7849 520.69 72.6405ZM541.293 72.6405C541.293 78.6797 542.557 84.0874 545.083 88.7846C547.609 93.4818 551.122 97.1528 555.543 99.8369C559.963 102.521 565.094 103.824 570.897 103.824C576.699 103.824 581.791 102.482 586.251 99.8369C590.672 97.1528 594.185 93.4818 596.711 88.7846C599.237 84.0874 600.5 78.7192 600.5 72.6405C600.5 66.5617 599.276 61.1935 596.829 56.4963C594.382 51.7991 590.948 48.1282 586.527 45.444C582.106 42.7599 576.896 41.4574 570.897 41.4574C565.094 41.4574 560.003 42.7994 555.543 45.444C551.122 48.1282 547.609 51.7991 545.083 56.4963C542.557 61.1935 541.293 66.5617 541.293 72.6405ZM654.536 67.7459L648.418 120.047H628.051L642.181 20.4186L682.086 81.5612L721.715 20.4186L736.122 120.047H715.479L709.361 67.7459L682.086 111.244L654.536 67.7459ZM767.383 77.7718V103.508H808.946V120.047H767.383H760.87H748.398V25.1948H760.87H767.383H808.946V41.7337H767.383V61.6672H806.223V77.8113H767.383V77.7718Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M67.3492 0.37125L68.4192 0L69.4675 0.37125L134.48 23.5198L136.817 24.3497L136.533 26.8392L126.618 112.664L126.443 114.258L125.024 115.044L69.9261 145.508L68.4192 146.338L66.8906 145.508L11.7927 115.044L10.395 114.258L10.1985 112.664L0.283897 26.8392L0 24.3497L2.33669 23.5198L67.3492 0.37125ZM80.6835 79.9557C80.3996 79.6718 80.0283 79.519 79.6352 79.519C78.8272 79.519 78.1502 80.1741 78.1502 81.004V84.0176H92.8034L88.6541 76.811H92.1919L96.3412 84.0176H108.789V76.6363H111.846V83.9958H123.617L123.268 87.0532H13.5524L13.203 83.9958H25.9565V76.7892H29.0139V83.9958H33.1631V81.004C33.1631 78.4926 35.1941 76.4616 37.7055 76.4616C38.9066 76.4616 40.064 76.942 40.9157 77.7937C41.7674 78.6454 42.2478 79.781 42.2478 81.004H39.1905C39.1905 80.6109 39.0376 80.2396 38.7537 79.9557C38.4698 79.6718 38.1204 79.519 37.7055 79.519C36.8975 79.519 36.2205 80.1741 36.2205 81.004V83.9958H47.1396V81.004C47.1396 79.8029 47.62 78.6454 48.4717 77.7937C49.3234 76.942 50.459 76.4616 51.682 76.4616C54.1934 76.4616 56.2243 78.4926 56.2243 81.004H53.167C53.167 80.1741 52.5118 79.519 51.682 79.519C51.2889 79.519 50.9176 79.6718 50.6337 79.9557C50.3498 80.2396 50.197 80.6109 50.197 81.004V84.0176H61.1161V81.004C61.1161 79.8029 61.5965 78.6454 62.4482 77.7937C63.2999 76.942 64.4355 76.4616 65.6584 76.4616C66.8596 76.4616 68.017 76.942 68.8687 77.7937C69.7204 78.6454 70.2008 79.781 70.2008 81.004H67.1434C67.1434 80.6109 66.9906 80.2396 66.7067 79.9557C66.4228 79.6718 66.0515 79.519 65.6584 79.519C65.2654 79.519 64.8941 79.6718 64.6102 79.9557C64.3263 80.2396 64.1734 80.6109 64.1734 81.004V84.0176H75.0929V81.004C75.0929 78.4926 77.1238 76.4616 79.6352 76.4616C80.8363 76.4616 81.9938 76.942 82.8455 77.7937C83.6972 78.6454 84.1776 79.781 84.1776 81.004H81.1202C81.1202 80.6109 80.9674 80.2396 80.6835 79.9557ZM45.3488 29.7284H23.1612V32.7857H47.1177L45.3488 29.7284ZM67.2526 56.8731H75.4419L77.2327 59.9304H23.1612V56.8731H26.022V49.317H29.0793V56.8949H33.1631V54.0778C33.1631 51.5664 35.194 49.5354 37.7054 49.5354C40.2168 49.5354 42.2478 51.5664 42.2478 54.0778H39.1904C39.1904 53.2698 38.5353 52.5928 37.7054 52.5928C36.8974 52.5928 36.2204 53.2479 36.2204 54.0778V56.8949H47.1396V54.0559C47.1396 52.8548 47.62 51.6974 48.4717 50.8457C49.3234 49.994 50.459 49.5136 51.6819 49.5136C52.883 49.5136 54.0404 49.994 54.8921 50.8457C55.7438 51.6974 56.2243 52.833 56.2243 54.0559H53.1669C53.1669 53.6628 53.014 53.2916 52.7302 53.0077C52.4463 52.7238 52.075 52.5709 51.6819 52.5709C51.2888 52.5709 50.9176 52.7238 50.6337 53.0077C50.3498 53.2916 50.1969 53.6628 50.1969 54.0559V56.8949H63.955L59.5874 49.3389H63.1252L67.4273 56.7857L67.2526 56.8731ZM60.4609 43.2901H52.4899L48.2315 35.9087H44.6937L48.974 43.2901H29.0793V35.9087H26.022V43.2901H23.1612V46.3474H62.208L60.4609 43.2901ZM82.2336 70.4356H89.1345L90.9034 73.4929H23.1612V70.4356H26.022V63.0542H29.0793V70.4356H33.1631V67.4437C33.1631 64.9323 35.194 62.9014 37.7054 62.9014C40.2168 62.9014 42.2478 64.9323 42.2478 67.4437H39.1904C39.1904 66.6139 38.5353 65.9587 37.7054 65.9587C36.8974 65.9587 36.2204 66.6139 36.2204 67.4437V70.4356H47.1396V67.4437C47.1396 66.2426 47.62 65.0852 48.4717 64.2335C49.3234 63.3818 50.459 62.9014 51.6819 62.9014C54.1933 62.9014 56.2243 64.9323 56.2243 67.4437H53.1669C53.1669 66.6139 52.5118 65.9587 51.6819 65.9587C51.2888 65.9587 50.9176 66.1116 50.6337 66.3955C50.3498 66.6794 50.1969 67.0506 50.1969 67.4437V70.4574H61.116V67.4437C61.116 66.2426 61.5965 65.0852 62.4482 64.2335C63.2999 63.3818 64.4354 62.9014 65.6584 62.9014C66.8595 62.9014 68.0169 63.3818 68.8686 64.2335C69.7203 65.0852 70.2007 66.2208 70.2007 67.4437H67.1434C67.1434 67.0506 66.9905 66.6794 66.7066 66.3955C66.4227 66.1116 66.0515 65.9587 65.6584 65.9587C65.2653 65.9587 64.8941 66.1116 64.6102 66.3955C64.3263 66.6794 64.1734 67.0506 64.1734 67.4437V70.4574H78.805L74.481 62.9451H78.0188L82.321 70.3919L82.2336 70.4356ZM114.706 59.9318V56.8744H79.0664L80.8353 59.9318H114.706ZM108.788 70.4342V63.0528H111.845V70.4342H114.706V73.4915H94.4622L92.7152 70.4342H108.788ZM44.1695 125.795V91.6617H47.2269V127.476L44.1695 125.795ZM51.7474 91.6617V129.966L54.8047 131.669V91.6617H51.7474ZM36.6136 121.602V91.6617H39.671V123.305L36.6136 121.602ZM29.0576 91.6617V117.431L32.1149 119.112V91.6617H29.0576ZM16.2389 110.333L14.0769 91.6617H16.9814V110.748L16.2389 110.333ZM66.8809 91.6617V138.33L68.4096 139.182L69.9383 138.352V91.6617H66.8809ZM21.4801 113.238V91.6617H24.5374V114.919L21.4801 113.238ZM59.3034 91.6617V134.159L62.3608 135.84V91.6617H59.3034ZM112.262 114.941V91.6617H115.32V113.238L112.262 114.941ZM74.4371 91.6617V135.862L77.4944 134.159V91.6617H74.4371ZM104.704 119.112V91.6617H107.762V117.431L104.704 119.112ZM119.818 91.6617V110.748L120.583 110.333L122.723 91.6617H119.818ZM97.1287 123.305V91.6617H100.186V121.602L97.1287 123.305ZM81.9931 91.6617V131.669L85.0504 129.988V91.6617H81.9931ZM89.5706 127.476V91.6617H92.628V125.795L89.5706 127.476Z"
                    fill="white"
                  />
                </svg>
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
              <svg fill="#fff" viewBox="0 0 20 20" class="w-6 h-6">
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div class="hidden lg:flex gap-6 m-auto md:hidden px-6">
            @for (item of NavMenu; track $index) {
              @if (!item.pastEdition && item.visible) {
                <a
                  class="leading-6 text-white p-2 transition duration-1000 ease-in-out transform font-base text-opacity-90 hover:text-slate-500 focus:outline-none focus:shadow-none focus:text-mana md:my-0 hover:border-white"
                  [routerLink]="item.destinationUrl"
                  [fragment]="item.fragment"
                  >{{ item.name }}</a
                >
              }
            }
          </div>
          <div class="lg:contents hidden lg:contents gap-6 m-auto md:hidden">
            <button
              type="button"
              class="px-5 py-2.5 text-sm font-medium text-black inline-flex items-center bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center "
              ester
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                  clip-rule="evenodd"
                />
              </svg>
              &nbsp; Tickets
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
              ? 'translateX(101%)'
              : 'translateX(0px)'
          }"
          style="z-index: 1000; transition: transform .3s ease"
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-red-ngrome py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="pr-6 pl-10 flex items-center justify-between">
            <a routerLink="/" class="focus:outline-none focus:shadow-outline">
              <div class="object-contain h-10">
                <img
                  ngSrc="/website-assets/ngrome-white-shield_scjivm.svg"
                  alt="NGRome Home"
                  class="h-full"
                  width="40"
                  height="40"
                  priority
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
                  ngSrc="website-assets/ticket_cxqaxt.svg"
                  alt="NGRome ticket"
                  class="h-full ml-2"
                  width="24"
                  height="24"
                  priority
              /></a>
            </div>

            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              (click)="toggleService.updateData(false)"
              aria-label="hamburger-menu"
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
                      (click)="onGoToPage(item.destinationUrl, item.fragment)"
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
  imports: [CommonModule, NgOptimizedImage, TicketComponent, RouterModule],
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

  onGoToPage(page: string, fragment: string) {
    this.toggleService.updateData(false);
    this.router.navigate([page], { fragment: fragment });
  }
  onGoToTicket() {
    if (this.router.url === '/') {
      this.router.navigate([], { fragment: 'TicketSection' });
    } else {
      this.router.navigate(['/'], { fragment: 'TicketSection' });
    }
  }
}
