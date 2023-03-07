import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-features",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="features">
      <div class="container px-5 py-32 mx-auto lg:px-24">
        <div class="flex flex-col w-full mb-20 text-left lg:text-center">
          <h2
            class="mb-6 font-roboto text-4xl font-bold tracking-tighter text-black md:text-8xl lg:text-6xl"
          >
            5 Years of conference with international speakers
            <br class="hidden lg:block" />
            workshop days and communities around you
          </h2>
          <p class="mx-auto text-lg leading-snug text-slate-500">
            Tailwind CSS templates with a wicked design.
          </p>
        </div>
        <div
          class="flex flex-wrap -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0"
        >
          <div class="flex p-4 lg:w-1/3">
            <div
              class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-black rounded-full bg-slate-200"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h3 class="font-serif text-2xl font-semibold text-black">
                Attendee
              </h3>
              <p class="mt-6 text-lg text-slate-500">
                spiegare i vantaggi nel partecipare
              </p>
            </div>
          </div>
          <div class="flex p-4 lg:w-1/3">
            <div
              class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-black rounded-full bg-slate-200"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path
                  d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
                ></path>
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h3 class="font-serif text-2xl font-semibold text-black">
                Sponsor
              </h3>
              <p class="mt-6 text-lg text-slate-500">
                spiegare i vantaggi nel partecipare
              </p>
            </div>
          </div>
          <div class="flex p-4 lg:w-1/3">
            <div
              class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-black rounded-full bg-slate-200"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h3 class="font-serif text-2xl font-semibold text-black">
                Communities
              </h3>
              <p class="mt-6 text-lg text-slate-500">
                spiegare i vantaggi nel partecipare
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-32 overflow-hidden">
      <video
            autoplay
            loop
            muted
            autopictureinpicture="true"
            class="absolute z-10 w-auto min-w-full max-w-none"
          >
            <source
              src="https://firebasestorage.googleapis.com/v0/b/ngrome-website.appspot.com/o/assets%2F2022-conf-highlights-no-audio-final.mp4?alt=media&token=49779d7d-d2d3-4748-a417-10d56d2b1196"
              type="video/mp4"
            />
            <source
              src="https://firebasestorage.googleapis.com/v0/b/ngrome-website.appspot.com/o/assets%2F2022-conf-highlights-no-audio-final.webm?alt=media&token=14a1542a-dec0-4270-8a3c-6e17bb223296"
              type="video/webm"
            />
          </video>
      <div
        class="container relative flex flex-col items-center px-5 py-16 mx-auto lg:px-24 lg:py-24 md:flex-row"
      >   
      </div>
    </section>
  `,
  styles: [],
})
export class FeaturesComponent {}
