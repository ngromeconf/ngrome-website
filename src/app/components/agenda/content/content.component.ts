import { Component, Signal, inject } from '@angular/core';
import { CommonModule, NgFor, NgOptimizedImage } from '@angular/common';
import { Agenda } from 'src/app/models/agenda.model';
import { injectAgenda } from '../../../pages/speakers/resolvers';
import { Sponsors } from 'src/app/models/sponsor.model';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { SponsorComponent } from '../../sponsors/sponsor.component';

@Component({
  selector: 'app-content',
  standalone: true,
  template: ` <section>
    <div class="text-center max-w-3xl mx-auto">
      <h2
        class="tracking-tight text-gray-900 leading-5 text-4xl font-extrabold"
      >
        Thursday
      </h2>
      <p class="margin-1 text-gray-500 leading-5 font-medium text-lg">
        June 27, 2024
      </p>
      <span
        class="bg-primary-100 text-primary-800 margin-1 font-medium text-center inline-flex text-xs px-2.5 rounded py-0.5 XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk ay0ziTPUL4Ag5d1DkSY7 neyUwteEn7DOg9pBSJJE cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR YPSoR6AXtPgkmylUmcbT dark:bg-primary-900 dark:text-primary-300"
      >
        <svg
          aria-hidden="true"
          class="w-3 h-3 mr-1 m-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Central European Summer Time (GMT+2)
      </span>
    </div>
    <div class="container-agenda grid mt-6 text-left px-4 pb-4">
      @for (a of agenda; track $index) {
        <div *ngIf="agenda">
          <div class="text-2xl font-bold text-center">{{ a?.title }}</div>
          <div class="margin-2">
            @for (item of a.events; track $index) {
              <div class="flex flex-col gap-4 event">
                <p
                  class="flex-shrink-0 font-medium  text-gray-500 text-sm time"
                >
                  {{ item?.startTime }} - {{ item?.endTime }}
                </p>
                <div class="bg-gray-200 hidden sm:block timeline"></div>
                <div class="lg:pb-8 pb-12 flex-1-1-0">
                  <div
                    [ngClass]="
                      item.type.includes('Pause')
                        ? 'rounded-lg bg-gray-100 p-4'
                        : ''
                    "
                  >
                    <h4 class="font-bold text-lg md:text-2xl">
                      {{ item?.title || item?.type }}
                    </h4>
                    @if (item?.subtitle) {
                      <h3 class="font-semibold text-lg md:text-1xl margin-1">
                        {{ item?.subtitle }}
                      </h3>
                    }
                    @if (item?.description) {
                      <p class="font-normal text-gray-500 margin-1">
                        {{ item?.description }}
                      </p>
                    }
                    @for (speaker of item?.speakers; track $index) {
                      @if (speaker?.name) {
                        <div class="margin-1 gap-3 flex items-center">
                          <img
                            [alt]="speaker?.name"
                            [title]="speaker?.name"
                            [src]="speaker?.imageUrl"
                            class="w-12 h-12 object-cover rounded-full  "
                          />
                          <div class="">
                            <p
                              class="leading-tight font-medium m-0 text-gray-900 text-lg"
                            >
                              {{ speaker?.name }}
                            </p>
                            <p class="font-normal text-gray-500 text-sm">
                              {{ speaker?.jobRole }}
                              @if (speaker?.work) {
                                - {{ speaker?.work }}
                              }
                            </p>
                          </div>
                        </div>
                      }
                    }
                    @if (
                      item.type.includes('Pause') && sponsors$();
                      as Sponsors
                    ) {
                      <div class="margin-not-hidden">
                        <p class="font-medium text-base text-gray-500">
                          Sponsors:
                        </p>
                        <div
                          class="flex flex-wrap items-center mt-2 container-sponsors"
                        >
                          @for (item of Sponsors.Gold; track $index) {
                            <img
                              class="object-contain img-sponsor"
                              [alt]="item.name"
                              [title]="item.name"
                              [src]="item.image"
                            />
                          }
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      }
    </div>
    <div class="sticky bottom-0 w-full bg-gray-50 px-20 py-5 border-t">
      <div
        class="flex flex-col items-center md:items-start md:flex-row gap-5 justify-between max-w-3xl mx-auto"
      >
        <div class="flex flex-col gap-4 text-center md:text-left">
          <p>
            When:
            <span class="font-semibold"> June 27, 2024 | 8am-7pm </span>
          </p>
          <a href="/venue"
            >Venue:
            <span class="text-blue-600 hover:underline"
              >Midas Palace Hotel</span
            ></a
          >
        </div>
        <a
          href="/#TicketSection"
          class="cursor-pointer inline-flex items-center px-8 py-3 text-sm lg:text-lg text-white transition-all duration-500 ease-in-out transform bg-green-600 border-2 rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:bg-red focus:ring-2 ring-offset-current ring-offset-2"
        >
          Tickets
        </a>
      </div>
    </div>
  </section>`,
  styleUrls: ['./content.component.scss'],
  imports: [CommonModule, NgOptimizedImage, SponsorComponent, NgFor],
})
export class ContentComponent {
  public agenda: Agenda[] = injectAgenda();
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
