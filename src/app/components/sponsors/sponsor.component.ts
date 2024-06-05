import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SponsorInterface } from 'src/app/models/sponsor.model';

@Component({
  selector: 'app-sponsor',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `<div
    *ngIf="sponsors?.length"
    class="flex my-12  items-center justify-center"
  >
    <div class="w-full px-10 mx-auto bg-white">
      <div class="px-4 mx-auto space-y-6">
        <!-- Component starts here -->
        @if (showTitle) {
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
                'bg-orange-400': type === 'Technical'
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
        <div class="w-full mt-24">
          @if (itemsPerRow === 1) {
            <div class="flex flex-wrap justify-center gap-2">
              @for (item of sponsors; track $index) {
                <div class="w-1/3">
                  <a [href]="item.url ? item.url : '/sponsors'" target="_blank">
                    <img
                      [alt]="item.name"
                      [title]="item.name"
                      [ngSrc]="item.image"
                      class="flex-shrink-0 object-cover object-center w-full h-35"
                      width="504"
                      height="250"
                    />
                  </a>
                </div>
              }
            </div>
          }
          @if (itemsPerRow === 3) {
            <div class="flex flex-wrap justify-center gap-2">
              @for (item of sponsors; track $index) {
                <div class="w-1/4">
                  <a
                    class="self-center my-8"
                    [href]="item.url ? item.url : '/sponsors'"
                    target="_blank"
                  >
                    <img
                      [alt]="item.name"
                      [title]="item.name"
                      [ngSrc]="item.image"
                      class="flex-shrink-0 object-cover object-center w-full h-35"
                      width="504"
                      height="250"
                    />
                  </a>
                </div>
              }
            </div>
          }
          @if (itemsPerRow === 5) {
            <div class="flex flex-wrap justify-center gap-2">
              @for (item of sponsors; track $index) {
                <div class="w-1/5">
                  <a
                    class="flex items-center align-middle"
                    [href]="item.url ? item.url : '/sponsors'"
                    target="_blank"
                  >
                    <img
                      [alt]="item.name"
                      [title]="item.name"
                      [ngSrc]="item.image"
                      class="flex-shrink-0 object-cover object-center w-full h-25"
                      width="504"
                      height="250"
                    />
                  </a>
                </div>
              }
            </div>
          }
          @if (itemsPerRow === 6) {
            <div class="grid m-auto gap-8 grid-cols-5 md:grid-cols-7">
              @for (item of sponsors; track $index) {
                <a
                  class="flex items-center align-middle"
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
              }
            </div>
          }
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
