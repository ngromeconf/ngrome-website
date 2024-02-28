import { Component, Input, OnInit, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorComponent } from '../sponsor.component';

import { HttpClient } from '@angular/common/http';
import { Sponsors } from 'src/app/models/sponsor.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-content',
  standalone: true,
  template: `
    <section class="">
      <div class="relative mx-auto max-w-5xl mt-20">
        <div
          class="rounded-xl p-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
        >
          <div class="rounded-lg bg-black/80 backdrop-blur">
            <div
              class="flex w-full flex-wrap items-center justify-between gap-4 px-8 py-10 sm:px-16 lg:flex-nowrap"
            >
              <div class="lg:max-w-xl">
                <h2
                  class="block w-full pb-2 bg-gradient-to-b from-white to-red-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl"
                >
                  SPONSORSHIP OPPORTUNITY
                </h2>
                <p
                  class="my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-400"
                >
                  As a sponsor you gain significant visibility and demonstrate
                  your support for NGRome in facilitating the international
                  exchange of information relating to the Angular platform.
                </p>
              </div>
              <div class="flex flex-wrap items-center justify-center gap-6 ">
                <a
                  href="https://forms.gle/FGRUKbigLn8BjePW7"
                  target="_blank"
                  class="inline-flex items-center px-8 py-3 text-lg text-white transition-all duration-500 ease-in-out transform bg-red border-2 rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:bg-green-500 focus:ring-2 ring-offset-current ring-offset-2"
                >
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      @if (sponsors$(); as Sponsors) {
        <!-- <app-sponsor [sponsors]="Sponsors.Main" type="Main" /> -->
        <app-sponsor [sponsors]="Sponsors.Gold" type="Gold" />
        <app-sponsor [sponsors]="Sponsors.Silver" type="Silver" />
        <app-sponsor
          [sponsors]="Sponsors.Bronze"
          type="Bronze"
          [itemsPerRow]="3"
        />
        <app-sponsor
          [itemsPerRow]="5"
          [sponsors]="Sponsors.Community"
          [showTitle]="false"
          customTitle="WE BELIEVE IN COMMUNITY"
          customTitleClass="mx-auto bg-gradient-to-b from-white to-red-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl"
        />
        <app-sponsor
          [itemsPerRow]="5"
          [sponsors]="Sponsors.PastEdition"
          [showTitle]="false"
          customTitle="SPONSORS IN THE PAST BELIEVED IN US"
          customTitleClass="text-slate-500 text-2xl mx-auto"
        />
      }
    </section>
  `,
  styles: [],
  imports: [CommonModule, SponsorComponent],
})
export class ContentComponent {
  /**
   * Signal representing the sponsors data.
   * @type {Signal<Sponsors>}
   */
  public sponsors$: Signal<Sponsors> = this.getSponsors();

  getSponsors() {
    const _http = inject(HttpClient);
    return toSignal(_http.get<Sponsors>('./api/v1/sponsors'), {
      initialValue: {},
    });
  }
}
