import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SponsorInterface, sponsorType } from 'src/app/models/sponsor.model';

@Component({
  selector: 'app-sponsor',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `<div
    *ngIf="sponsors?.length"
    class="flex mt-6  items-center justify-center"
  >
    <div class="w-full px-10 mx-auto bg-white">
      <div class="mx-auto space-y-6">
        <!-- Component starts here -->
        @if (showTitle) {
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
        } @else if (customTitle) {
          <h2 class="flex flex-row flex-nowrap items-center my-8">
            <span [ngClass]="customTitleClass">
              {{ customTitle }}
            </span>
          </h2>
        }
        <!-- Component ends here -->
        <div class="flex flex-center -m-4 items-center">
          <div
            class="w-full grid  m-auto lg:p-12 justify-center"
            [ngClass]="{'lg:grid-cols-[repeat(auto-fit,_23.99%)]': itemsPerRow === 4, 'lg:grid-cols-[repeat(auto-fit,_30.99%)]': itemsPerRow === 3, 'lg:grid-cols-[repeat(auto-fit,_49.99%)]': itemsPerRow === 2, 'lg:grid-cols-[repeat(auto-fit,_99.99%)]': itemsPerRow === 1, 'lg:grid-cols-[repeat(auto-fit,_19.99%)]': itemsPerRow === 5}"
          >
            @for (item of sponsors; track $index) {
              <div
                class="w-full lg:w-1/6 md:w-1/4 sm:w-48 p-4"
                style="margin-bottom: auto; margin-top:auto;"
              >
                <div class="p-4">
                  <a
                    class="inline-flex items-center mb-2"
                    [href]="item.url ? item.url : '/sponsors'"
                    target="_blank"
                  >
                    <img
                      [alt]="item.name"
                      [title]="item.name"
                      [ngSrc]="item.image"
                      class="flex-shrink-0 object-cover object-center w-full h-25"
                      width="200"
                      height="50"
                    />
                  </a>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  </div>`,
})
export class SponsorComponent {
  @Input() sponsors: SponsorInterface[] | undefined;
  @Input() type: string | undefined;
  @Input() showTitle: boolean = true;
  @Input() customTitle: string = '';
  @Input() customTitleClass: string = '';
  @Input() itemsPerRow: number = 2;
}
