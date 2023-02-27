import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative w-full h-screen overflow-hidden bg-center bg-no-repeat bg-cover bg-patternTop">
      <div class="container relative w-full px-8 pt-32 pb-24 mx-auto lg:px-4">
        <div class="flex flex-col w-full mb-12 text-left lg:text-center ">
          <strong class="mb-4 text-xs font-semibold tracking-widest uppercase text-slate-500">MMXXIII</strong>
          <h1 class="mb-6 font-roboto text-4xl font-bold tracking-tighter text-black md:text-8xl lg:text-6xl">
            NGROME
          </h1>
          <p class="mx-auto text-lg leading-snug text-slate-500 lg:w-1/2">
            The largest Italian Angular Conference
          </p>
        </div>
        <div class="flex w-full mt-6  justify-center ">
          <div class="mt-3 rounded-lg sm:mt-0">
            <a
              href="https://wicked-templates.gumroad.com/l/monotone-starter"
              class="inline-flex items-center px-8 py-3 text-lg text-white transition-all duration-500 ease-in-out transform bg-red-500 border-2 rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:bg-green-500 focus:ring-2 ring-offset-current ring-offset-2"
            >
              Buy for $29
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ['.bg-patternTop{background-image:url(./patternTop.svg)}'
  ]
})
export class HeroComponent {

}
