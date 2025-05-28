import { Component, Signal, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
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
              <img
                ngSrc="{{ benefit.icon }}"
                alt="{{ benefit.title }}"
                width="60"
                height="60"
              />
              <h3 class="text-xl font-semibold text-left ml-3">
                {{ benefit.title }}
              </h3>
            </div>
            <p class="text-gray-600 text-left">{{ benefit.description }}</p>
          </div>
        }
      </div>

      <div class="mt-12 text-center">
        <p class="text-lg font-medium mb-6 flex justify-center items-center">
          Join our growing list of sponsors who have experienced these benefits
          firsthand.
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6 ml-2 animate-bounce"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
        </p>
      </div>
    </section>

    <app-sponsorship-opportunity />

    <section class="">
      @if (sponsors$(); as Sponsors) {
        <app-sponsor [sponsors]="Sponsors.Main" type="Main" [itemsPerRow]="1" />
        <app-sponsor [sponsors]="Sponsors.Gold" type="Gold" [itemsPerRow]="3" />
        <app-sponsor [sponsors]="Sponsors.Silver" type="Silver" [itemsPerRow]="3" />
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
    NgOptimizedImage,
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
      icon: 'website-assets/people-multiple-svgrepo-com_m1rjts.svg',
    },
    {
      title: 'Unlock Talent in the Eternal City',
      description: `Rome, with its rich history and growing tech scene, is a hub for talent. NGRome provides an unparalleled opportunity to connect with highly skilled Angular developers actively seeking new opportunities.`,
      icon: 'website-assets/grow-growth-hand-svgrepo-com_dlm80o.svg',
    },
    {
      title: 'Forge International Partnerships',
      description: `NGRome attracts a global audience, allowing you to build strategic partnerships and expand your network internationally. Engage with industry leaders and key players in the tech landscape, all against the backdrop of Rome's iconic atmosphere.`,
      icon: 'website-assets/partners-solid-svgrepo-com_l7vkmu.svg',
    },
    {
      title: 'Champion Innovation and Leadership',
      description: `Align your brand with NGRome and demonstrate your commitment to cutting-edge Angular solutions. Position your company as a leader in technological innovation and support the growth of the developer community.`,
      icon: 'website-assets/invention-idea-svgrepo-com_ozqjyl.svg',
    },
    {
      title: 'Support Inclusivity and Community',
      description: `NGRome is dedicated to fostering an inclusive environment, including supporting initiatives like ngGirls. By sponsoring NGRome, you'll contribute to empowering underrepresented groups in tech and demonstrate your commitment to a more equitable future.`,
      icon: 'website-assets/community-svgrepo-com_zzgr6v.svg',
    },
    {
      title: 'Experience the Unique Roman Atmosphere',
      description: `Leverage the unique cultural backdrop of Rome to create a memorable and impactful sponsorship experience. This isn't just an event; it's an opportunity to blend technology with the timeless charm of the Eternal City.`,
      icon: 'website-assets/vespa-scooter-svgrepo-com_pr6mpl.svg',
    },
  ];

  getSponsors() {
    const _http = inject(HttpClient);
    return toSignal(_http.get<Sponsors>('./api/v1/sponsors'), {
      initialValue: {},
    });
  }
}
