import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <section
      class="relative w-full h-screen overflow-hidden bg-no-repeat bg-cover 
      bg-[url('https://firebasestorage.googleapis.com/v0/b/ngrome-website.appspot.com/o/assets%2FpatternMobile.svg?alt=media&token=7eea2949-79c7-43f2-934d-5ffc74e3efbc')]
		  md:bg-[url('https://firebasestorage.googleapis.com/v0/b/ngrome-website.appspot.com/o/assets%2FpatternTop.svg?alt=media&token=7b0d6f17-084e-47dd-8dcd-c45e42b42f57')]"
    >
      <div class="container relative w-full px-8 pt-32 pb-24 mx-auto lg:px-4">
        <div
          class="flex flex-col w-full mb-12 text-left lg:text-center items-center "
        >
          <strong
            class="mb-12 text-xs font-semibold tracking-widest uppercase text-slate-500 text-center"
            >The largest Italian Angular Conference is taking place at</strong
          >
          <div class="lg:flex mb-12">
            <img
              class="w-full md:h-96"
              ngSrc="./ngrome-hero.svg"
              width="706"
              height="384"
              priority
            />
          </div>
          <p
            class="mx-auto text-lg leading-snug text-slate-500 lg:w-1/2 text-center"
          >
            Whether you are a beginner, intermediate, or an expert, this will be
            the best opportunity to learn about the latest trends in the Angular
            world and web technologies.
          </p>
        </div>
        <div class="flex w-full mt-6  justify-center ">
          <div class="mt-3 rounded-lg sm:mt-0">
            <a
              href="https://ti.to/ngrome-events/ngrome-conf-mmxxiv"
              target="_blank"
              class="inline-flex items-center px-8 py-3 text-lg text-white transition-all duration-500 ease-in-out transform bg-green-500 border-2 rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:bg-red focus:ring-2 ring-offset-current ring-offset-2"
            >
              REGISTER NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ['.bg-patternTop{background-image:url(./patternTop.svg)}'],
})
export class HeroComponent {}
