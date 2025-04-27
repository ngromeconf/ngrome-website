import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SponsorInterface } from 'src/app/models/sponsor.model';

@Component({
  selector: 'app-sponsor',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `<div
    *ngIf="sponsors?.length"
    class="px-4 py-5 w-full flex flex-wrap content-center mx-auto lg:px-14"
  >
    <section
      class="pt-10 w-full md:pt-14 flex flex-wrap content-center bg-white "
    >
      <div class="w-full mx-auto bg-white">
        <div class="md:px-4 mx-auto space-y-6">
          <!-- Component starts here -->
          <ng-container *ngIf="showTitle; else customTitleTemplate">
            <h2 class="flex flex-row flex-nowrap items-center mt-8 mb-12">
              <span
                class="flex-grow block border-t border-red"
                aria-hidden="true"
                role="presentation"
              ></span>
              <span
                class="flex-none block mx-4 px-4 py-2.5 text-lg leading-none font-medium uppercase text-white"
                [ngClass]="{
                  'bg-red-ngrome': type === 'Main',
                  'bg-yellow-400': type === 'Gold',
                  'bg-yellow-800': type === 'Bronze',
                  'bg-slate-300': type === 'Silver',
                  'bg-green-500': type === 'Diversity',
                  'bg-blue-400': type === 'Event',
                  'bg-orange-400': type === 'Technical',
                  'bg-teal-500': type === 'Community'
                }"
              >
                {{ type }} PARTNER
              </span>
              <span
                class="flex-grow block border-t border-red"
                aria-hidden="true"
                role="presentation"
              ></span>
            </h2>
          </ng-container>
          <ng-template #customTitleTemplate>
            <h2 class="flex flex-row flex-nowrap items-center my-8">
              <span [ngClass]="customTitleClass">
                {{ customTitle }}
              </span>
            </h2>
          </ng-template>
          <!-- Component ends here -->
          <div class="w-full mt-14">
            <div class="flex flex-wrap justify-center gap-2">
              <ng-container *ngFor="let item of sponsors; let i = index">
                <div
                  [ngClass]="{
                    'w-full md:w-1/3': itemsPerRow === 1,
                    'w-2/3 md:w-1/4': itemsPerRow === 3,
                    'w-3/5 md:w-1/5': itemsPerRow === 5,
                    'w-2/6 md:w-1/6': itemsPerRow === 6
                  }"
                  [class.mx-auto]="(i + 1) % itemsPerRow !== 0"
                >
                  <a [href]="item.url ? item.url : '/sponsors'" target="_blank">
                    <img
                      [alt]="item.name"
                      [title]="item.name"
                      [ngSrc]="
                        'c_pad,g_center,h_600,w_600/v1709386635/ngrome-sponsors/' +
                        item.image +
                        '.webp'
                      "
                      class="flex-shrink-0 object-cover object-center h-auto mx-auto"
                      width="400"
                      height="400"
                      [ngClass]="{
                        'w-8/12': itemsPerRow === 5,
                        'w-8/12': itemsPerRow === 6
                      }"
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                      sizes="(max-width: 640px) 100vw,
                        (max-width: 768px) 50vw,
                        (max-width: 1024px) 33vw,
                        (max-width: 1280px) 25vw,
                        (max-width: 1536px) 20vw,
                        20vw"
                    />
                  </a>
                </div>
              </ng-container>
            </div>
          </div>
        </div>
      </div>
    </section>
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
