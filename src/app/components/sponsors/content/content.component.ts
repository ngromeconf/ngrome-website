import { Component, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorComponent } from '../sponsor.component';

import { HttpClient } from '@angular/common/http';
import { Sponsors } from 'src/app/models/sponsor.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { PastEditionSponsorsComponent } from '../../shared/past-edition-sponsors';
import { SponsorshipOpportunityComponent } from '../../shared/sponsorship-opportunity.component';

@Component({
  selector: 'app-content',
  standalone: true,
  template: `
    <section class="py-12 px-4 max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Why Sponsor Our Conference?</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Partner with us and gain exclusive benefits while supporting the
          growth of our community.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (benefit of benefits; track benefit.title) {
          <div
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div class="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                [innerHTML]="benefit.icon"
              ></svg>
              <h3 class="text-xl font-semibold ml-3">{{ benefit.title }}</h3>
            </div>
            <p class="text-gray-600">{{ benefit.description }}</p>
          </div>
        }
      </div>

      <div class="mt-12 text-center">
        <p class="text-lg font-medium mb-6">
          Join our growing list of sponsors who have experienced these benefits
          firsthand.
        </p>
        <button
          class="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Become a Sponsor
        </button>
      </div>
    </section>

    <app-sponsorship-opportunity />

    <section class="">
      @if (sponsors$(); as Sponsors) {
        <app-sponsor [sponsors]="Sponsors.Main" type="Main" [itemsPerRow]="1" />
        <app-sponsor [sponsors]="Sponsors.Gold" type="Gold" [itemsPerRow]="3" />
        <!-- <app-sponsor
          [sponsors]="Sponsors.Silver"
          type="Silver"
          [itemsPerRow]="3"
        /> -->
        <app-sponsor
          [sponsors]="Sponsors.Bronze"
          type="Bronze"
          [itemsPerRow]="5"
        />
        <app-sponsor
          [sponsors]="Sponsors.Diversity"
          type="Diversity"
          [itemsPerRow]="5"
        />
        <app-sponsor
          [sponsors]="Sponsors.Technical"
          type="Technical"
          [itemsPerRow]="5"
        />
        <app-sponsor
          [sponsors]="Sponsors.Event"
          type="Event"
          [itemsPerRow]="5"
        />
        <app-sponsor
          [itemsPerRow]="6"
          [sponsors]="Sponsors.Community"
          [showTitle]="false"
          customTitle="WE BELIEVE IN COMMUNITY"
          customTitleClass="mx-auto bg-gradient-to-b from-white to-red-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl"
        />

        <app-past-edition-sponsors />
      }
    </section>
  `,
  styles: [],
  imports: [
    CommonModule,
    SponsorComponent,
    PastEditionSponsorsComponent,
    SponsorshipOpportunityComponent,
  ],
})
export class ContentComponent {
  /**
   * Signal representing the sponsors data.
   * @type {Signal<Sponsors>}
   */
  public sponsors$: Signal<Sponsors> = this.getSponsors();

  benefits = [
    {
      title: 'Reach a Highly Engaged Audience',
      description: `Showcase your company and products to hundreds of active European developers, creating significant brand exposure and generating genuine interest.`,
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />',
    },
    {
      title: 'Unlock Talent in the Eternal City',
      description: `Rome, with its rich history and growing tech scene, is a hub for talent. NGRome provides an unparalleled opportunity to connect with highly skilled Angular developers actively seeking new opportunities.`,
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />',
    },
    {
      title: 'Forge International Partnerships',
      description: `NGRome attracts a global audience, allowing you to build strategic partnerships and expand your network internationally. Engage with industry leaders and key players in the tech landscape, all against the backdrop of Rome's iconic atmosphere.`,
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />',
    },
    {
      title: 'Champion Innovation and Leadership',
      description: `Align your brand with NGRome and demonstrate your commitment to cutting-edge Angular solutions. Position your company as a leader in technological innovation and support the growth of the developer community.`,
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />',
    },
    {
      title: 'Support Inclusivity and Community',
      description: `NGRome is dedicated to fostering an inclusive environment, including supporting initiatives like ngGirls. By sponsoring NGRome, you'll contribute to empowering underrepresented groups in tech and demonstrate your commitment to a more equitable future.`,
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />',
    },
    {
      title: 'Experience the Unique Roman Atmosphere',
      description: `Leverage the unique cultural backdrop of Rome to create a memorable and impactful sponsorship experience. This isn't just an event; it's an opportunity to blend technology with the timeless charm of the Eternal City.`,
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />',
    },
  ];

  getSponsors() {
    const _http = inject(HttpClient);
    return toSignal(_http.get<Sponsors>('./api/v1/sponsors'), {
      initialValue: {},
    });
  }
}
