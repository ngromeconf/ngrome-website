import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorInterface } from '../content/content.component';

@Component({
  selector: 'app-main-sponsor',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="flex mt-12   items-center justify-center">
    <div class="w-full px-10 mx-auto bg-white">
      <div class=" mx-auto space-y-6 ">
        <!-- Component starts here -->
        <h2 class="flex flex-row flex-nowrap items-center my-8">
          <span
            class="flex-grow block border-t border-red"
            aria-hidden="true"
            role="presentation"
          ></span>
          <span
            class="flex-none block mx-4 px-4 py-2.5 text-xs leading-none font-medium uppercase bg-red text-white"
          >
            MAIN SPONSOR
          </span>
          <span
            class="flex-grow block border-t border-red"
            aria-hidden="true"
            role="presentation"
          ></span>
        </h2>
        <!-- Component ends here -->
        <div class="flex flex-wrap -m-4 items-center">
          <div
            class="w-full p-4 md:w-1/1 items-center"
            *ngFor="let item of mainSponsor"
          >
            <div class="p-6">
              <a class="inline-flex items-center mb-2" [href]="item.url">
                <img
                  [alt]="item.name"
                  [src]="item.image"
                  class="flex-shrink-0 object-cover object-center w-full h-25"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
  styleUrls: ['./main-sponsor.component.css'],
})
export class MainSponsorComponent {
  public mainSponsor: SponsorInterface[] = [
    {
      name: 'Microsoft',
      image: './sponsors/Microsoft_logo.svg',
      url: 'https://microsoft.com',
    },
  ];
}
