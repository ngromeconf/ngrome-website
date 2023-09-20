import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorInterface } from '../content/content.component';

@Component({
  selector: 'app-silver-sponsor',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="flex mt-6  items-center justify-center">
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
            class="flex-none block mx-4 px-4 py-2.5 text-xs leading-none font-medium uppercase bg-slate-300 text-white"
          >
            SILVER SPONSOR
          </span>
          <span
            class="flex-grow block border-t border-red"
            aria-hidden="true"
            role="presentation"
          ></span>
        </h2>
        <!-- Component ends here -->
        <div class="flex flex-center -m-4 items-center">
          <div
            class="w-full p-12 items-center"
            *ngFor="let item of silverSponsor"
          >
            <div class="p-12">
              <a
                class="inline-flex items-center mb-2"
                [href]="item.url"
                target="_blank"
              >
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
  styleUrls: ['./silver-sponsor.component.css'],
})
export class SilverSponsorComponent {
  public silverSponsor: SponsorInterface[] = [
    {
      name: 'Fervento',
      image: './sponsors/fervento-logo.svg',
      url: 'https://fervento.com',
    },
  ];
}
