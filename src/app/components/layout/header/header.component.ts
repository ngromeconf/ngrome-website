import { Component } from "@angular/core";
import { BrowserPlatformLocation, CommonModule } from "@angular/common";

import { NAV_MENU, BLACK_BUTTON, WHITE_BUTTON } from './constants';

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="border-b">
      <div
        x-data="{ open: false }"
        class="flex flex-col w-full p-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-16 lg:items-center lg:justify-between lg:flex-row md:px-6"
      >
        <div class="flex flex-row items-center justify-between">
          <a
            href="./index.html"
            class="focus:outline-none focus:shadow-outline"
          >
            <div class="object-contain h-10">
              <img src="/logo-horizontal.svg" class="h-full">  
            </div>
          </a>
          <button
            class="lg:hidden focus:outline-none"
            click="open = !open"
            aria-label="hidden"
          >
            <svg fill="#000000" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                x-show="!open"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                x-show="open"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
                style="display: none"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          :class="{'flex': open, 'hidden': !open}"
          class="flex-col items-end flex-grow hidden px-5 md:pb-0 lg:flex lg:justify-end lg:flex-row lg:space-x-4"
        >
          <a *ngFor="let item of NavMenu"
            class="{{item.type=='white' ? WhiteButton : BlackButton }}"
            [href]="item.destinationUrl"
            >{{item.name}}</a
          >
        </nav>
      </div>
    </section>
  `,
  styles: [],
})
export class HeaderComponent {

  public NavMenu = NAV_MENU;
  public WhiteButton = WHITE_BUTTON;
  public BlackButton = BLACK_BUTTON;
}
