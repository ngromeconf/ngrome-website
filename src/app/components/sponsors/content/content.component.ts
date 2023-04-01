import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SponsorInterface {
  name: string,
  image: string,
  url: string
}

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="">
      <div
        class="flex flex-col w-full mb-12 text-left lg:text-center items-center pt-24 "
      >
        <p
          class="mx-auto text-lg leading-snug text-slate-500 lg:w-1/2 text-center"
        >
          Want to join as a sponsor?
        </p>
      </div>
      <div class="flex w-full mt-6  justify-center ">
        <div class="mt-3 rounded-lg sm:mt-0">
          <a
            href="https://wicked-templates.gumroad.com/l/monotone-starter"
            class="inline-flex items-center px-8 py-3 text-lg text-white transition-all duration-500 ease-in-out transform bg-red border-2 rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:bg-green-500 focus:ring-2 ring-offset-current ring-offset-2"
          >
            CONTACT US
          </a>
        </div>
      </div>
      <div class="container px-5 py-24 mx-auto lg:px-24">
        <div class="flex flex-col w-full mb-12 text-left lg:text-center">
          <h2
            class="mb-6 font-roboto text-4xl font-bold tracking-tighter text-black md:text-8xl lg:text-6xl"
          >
            PAST EDITIONS
            <br class="hidden lg:block" />
            SPONSORS
          </h2>
          <p class="mx-auto text-lg leading-snug text-slate-500 lg:w-1/2">
            Companies that supported us int the past
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="w-full p-4 md:w-1/6" *ngFor="let item of pastEditionSponsors">
            <div class="p-6 border shadow-xl rounded-3xl">
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
    </section>
  `,
  styles: [],
})
export class ContentComponent {

  @Input() pastEditionSponsors: SponsorInterface[] = [];

}
