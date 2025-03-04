import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  providers: [],
  schemas: [],
  template: `
    <section class="relative w-full h-fit bg-no-repeat bg-cover">
      <div class="container relative w-full px-8 pt-10 pb-24 mx-auto lg:px-4">
        <div
          class="flex flex-col w-full mb-6 text-left lg:text-center items-center "
        >
          <strong
            class="mb-12 text-xs font-semibold tracking-widest uppercase text-slate-500 text-center"
            >The largest Italian Angular Conference is taking place at</strong
          >
          <div class="lg:flex mb-12">
            <img
              class="w-full md:h-96"
              ngSrc="./ngrome-vertical.svg"
              alt="NGRome Conferece MMXXIV"
              width="706"
              height="384"
              priority
            />
          </div>
          <h2
            class="text-4xl font-extrabold leading-10 tracking-tight text-slate-800 sm:text-5xl sm:leading-none md:text-6xl"
          >
            JUNE 19/20
            <span class="font-bold text-red-ngrome">2025</span>
          </h2>
          <!-- <span class="text-lg"> Workshops will be on June 25 and 26!</span>
          <a class="text-lg" href="venue" target="_self">
            <span class="text-blue-gradient-start hover:underline">
              📍 Midas Palace Hotel (Rome)</span
            ></a
          >
          <p
            class="hidden md:block mx-auto text-lg leading-snug pt-6 text-slate-500 lg:w-1/2 text-center "
          >
            Be part of the NGRome MMXXIV experience!
            <br />
            Join us for unique learning and networking opportunities in Rome.
          </p> -->
        </div>
        <div class="flex w-full py-4 justify-center ">
          <div class="rounded-lg sm:mt-0">
            <button class="tito-widget-button-large" (click)="onGoToTicket()">
              Tickets
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [``],
  imports: [CommonModule, NgOptimizedImage],
})
export class HeroComponent {
  constructor(private router: Router) {}
  onGoToTicket() {
    this.router.navigate([], { fragment: 'TicketSection' });
  }
}
