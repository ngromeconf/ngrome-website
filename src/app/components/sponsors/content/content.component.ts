import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SilverSponsorComponent } from '../silver/silver-sponsor.component';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SponsorInterface, Sponsors } from 'src/app/models/sponsor.model';

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

      @if (Sponsors$ | async; as Sponsors) {
        <!-- <app-silver-sponsor [sponsors]="Sponsors.Main" type="Main" /> -->
        <app-silver-sponsor [sponsors]="Sponsors.Gold" type="Gold" />
        <app-silver-sponsor [sponsors]="Sponsors.Silver" type="Silver" />
        <app-silver-sponsor [sponsors]="Sponsors.Bronze" type="Bronze" />

        <div class="mx-auto px-5 container flex flex-col justify-center">
          <h2
            class="block w-full pb-2 bg-gradient-to-b from-white to-red-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl"
          >
            WE BELIEVE IN COMMUNITY
          </h2>
          <app-silver-sponsor
            [sponsors]="Sponsors.Community"
            type="Community"
            [showTitle]="false"
          />
        </div>
      }

      <div class="container px-5 py-24 mx-auto lg:px-24">
        <div class="flex flex-col w-full mb-12 text-left lg:text-center">
          <p class="mx-auto text-lg leading-snug text-slate-500 lg:w-1/2">
            SPONSORS IN THE PAST BELIEVED IN US
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div
            class="w-full p-4 md:w-1/6"
            *ngFor="let item of pastEditionSponsors"
          >
            <div class="p-6 ">
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
  imports: [CommonModule, SilverSponsorComponent],
})
export class ContentComponent {
  /**
   * Represents the sponsors for past editions.
   * @type {SponsorInterface[]}
   */
  @Input() pastEditionSponsors: SponsorInterface[] = [];

  /**
   * Observable representing the sponsors data.
   * @type {Observable<Sponsors>}
   */
  public Sponsors$: Observable<Sponsors>;

  constructor(private http: HttpClient) {
    console.log('ContentComponent');
    this.getSponsors();
  }
  getSponsors() {
    console.log('getSponsors');
    this.Sponsors$ = this.http.get<Sponsors>('./api/v1/sponsors');
  }
}
