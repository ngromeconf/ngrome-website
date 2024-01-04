import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SponsorInterface } from 'src/app/models/sponsor.model';

@Component({
  selector: 'app-silver-sponsor',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `<div class="flex mt-6  items-center justify-center">
    <div class="w-full px-10 mx-auto bg-white">
      <div class=" mx-auto space-y-6">
        <!-- Component starts here -->
        <h2 class="flex flex-row flex-nowrap items-center my-8">
          <span
            class="flex-grow block border-t border-red"
            aria-hidden="true"
            role="presentation"
          ></span>
          <span
            class="flex-none block mx-4 px-4 py-2.5 text-xs leading-none font-medium uppercase text-white"
            [ngClass]="{
              'bg-red-ngrome': type === 'Main',
              'bg-yellow-400': type === 'Gold',
              'bg-yellow-800': type === 'Bronze',
              'bg-slate-300': type === 'Silver'
            }"
          >
            {{ type }} SPONSOR
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
            class="w-full grid lg:grid-cols-[repeat(auto-fit,_23.666666%)] m-auto lg:p-24 justify-center"
          >
            @for (item of sponsors; track $index) {
              <div class="p-12 flex items-center justify-center">
                <a
                  class="inline-flex items-center mb-2"
                  [href]="item.url"
                  target="_blank"
                >
                  <img
                    [alt]="item.name"
                    [ngSrc]="item.image"
                    class="flex-shrink-0 object-cover object-center w-full h-25"
                    width="200"
                    height="50"
                  />
                </a>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  </div>`,
})
export class SilverSponsorComponent {
  @Input() sponsors: SponsorInterface[] | undefined;
  @Input() type: string | undefined;
}
