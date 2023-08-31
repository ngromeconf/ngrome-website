import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="features">
      <div class="container px-5 py-32 mx-auto lg:px-24">
        <div class="flex flex-col w-full mb-10 text-left lg:text-center">
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
          <div class="flex p-4 lg:w-1/4">
            <div
              class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-black rounded-full bg-slate-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                width="24"
                height="24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h3 class="font-roboto text-2xl font-semibold text-black">
                Attendee
              </h3>
              <p class="mt-6 text-lg text-slate-500">
                spiegare i vantaggi nel partecipare
              </p>
            </div>
          </div>
          <div class="flex p-4 lg:w-1/4">
            <div
              class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-black rounded-full bg-slate-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                width="24"
                height="24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h3 class="font-roboto text-2xl font-semibold text-black">
                Sponsor
              </h3>
              <p class="mt-6 text-lg text-slate-500">
                spiegare i vantaggi nel partecipare
              </p>
            </div>
          </div>
          <div class="flex p-4 lg:w-1/4">
            <div
              class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-black rounded-full bg-slate-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                width="24"
                height="24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                />
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h3 class="font-roboto text-2xl font-semibold text-black">
                Communities
              </h3>
              <p class="mt-6 text-lg text-slate-500">
                spiegare i vantaggi nel partecipare
              </p>
            </div>
          </div>
          <div class="flex p-4 lg:w-1/4">
            <div
              class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-black rounded-full bg-slate-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                width="24"
                height="24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h3 class="font-roboto text-2xl font-semibold text-black">
                Speakers
              </h3>
              <p class="mt-6 text-lg text-slate-500">
                spiegare i vantaggi nel partecipare
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-8 overflow-hidden">
      <video
        playsinline
        autoplay
        loop
        muted
        class="w-full h-full mx-auto rounded"
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/ngrome-website.appspot.com/o/assets%2F2022-conf-highlights-no-audio-final-2.mp4?alt=media&token=a5f0f01f-a589-4deb-b636-ef4395d30af5"
          type="video/mp4"
        />
        <source
          src="https://firebasestorage.googleapis.com/v0/b/ngrome-website.appspot.com/o/assets%2F2022-conf-highlights-no-audio-final.webm?alt=media&token=14a1542a-dec0-4270-8a3c-6e17bb223296"
          type="video/webm"
        />
      </video>
    </section>
  `,
  styles: [],
})
export class FeaturesComponent {}
