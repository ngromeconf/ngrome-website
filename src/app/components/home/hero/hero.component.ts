import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TICKET_URL } from '../../layout/header/constants';
import { TicketComponent } from '../../shared/ticket.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  providers: [],
  schemas: [],
  template: `
    <section
      class="relative w-full h-screen overflow-hidden bg-no-repeat bg-cover 
      bg-[url('https://firebasestorage.googleapis.com/v0/b/ngrome-website.appspot.com/o/assets%2FpatternMobile.svg?alt=media&token=7eea2949-79c7-43f2-934d-5ffc74e3efbc')]
		  md:bg-[url('https://firebasestorage.googleapis.com/v0/b/ngrome-website.appspot.com/o/assets%2FpatternTop.svg?alt=media&token=7b0d6f17-084e-47dd-8dcd-c45e42b42f57')]"
    >
      <div class="container relative w-full px-8 pt-10 pb-24 mx-auto lg:px-4">
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
              alt="NGRome MMXXIV"
              width="706"
              height="384"
              priority
            />
          </div>
          <h2
            class="text-4xl font-extrabold leading-10 tracking-tight text-slate-800 sm:text-5xl sm:leading-none md:text-6xl"
          >
            June 27
            <span class="font-bold text-red">2024</span>
          </h2>
          <p
            class="mx-auto text-lg leading-snug py-10 text-slate-500 lg:w-1/2 text-center"
          >
            Empower your network and embrace excellence. <br />Join NGRome
            MMXXIV for an Immersive dive into cutting-edge Angular and web tech
            trends where professionals of all levels thrive in Learning and
            networking excellence.
          </p>
        </div>
        <div class="flex w-full mt-6  justify-center ">
          <div class="mt-3 rounded-lg sm:mt-0">
            <app-ticket
              classList="inline-flex items-center px-8 py-3 text-lg text-white transition-all duration-500 ease-in-out transform bg-green-500 border-2 rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:bg-red focus:ring-2 ring-offset-current ring-offset-2"
            ></app-ticket>
            <!-- <tito-button
              class=""
              event="ngrome-events/test-website-conf"
              buttonLabel="Buy your ticket"
            ></tito-button> -->
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .bg-patternTop {
        background-image: url(./patternTop.svg);
      }
    `,
  ],
  imports: [CommonModule, NgOptimizedImage, TicketComponent],
})
export class HeroComponent {
  public ticketUrl = TICKET_URL;
}
