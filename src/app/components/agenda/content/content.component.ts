import { Component, Signal, inject } from '@angular/core';
import { CommonModule, NgFor, NgOptimizedImage } from '@angular/common';
import { Agenda, Event } from 'src/app/models/agenda.model';
import { injectAgenda } from '../../../pages/speakers/resolvers';
import { Pipe, PipeTransform } from '@angular/core';
import { Sponsors } from 'src/app/models/sponsor.model';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { SponsorComponent } from '../../sponsors/sponsor.component';

@Pipe({
  name: 'calculateTime',
  standalone: true,
})
export class CalculateTimePipe implements PipeTransform {
  transform(talks: Event[], timeStart: string): Event[] {
    let startTime = new Date(`2024-04-03T${timeStart}:00`);
    console.log(talks);
    return talks.map((talk) => {
      talk.startTime = startTime.toLocaleTimeString('it-IT', {
        hour: '2-digit',
        minute: '2-digit',
      });
      const hours = Math.floor(talk.duration / 60);
      const minutes = talk.duration % 60;
      const endTime = new Date(startTime);
      endTime.setHours(endTime.getHours() + hours);
      endTime.setMinutes(endTime.getMinutes() + minutes);
      talk.endTime = endTime.toLocaleTimeString('it-IT', {
        hour: '2-digit',
        minute: '2-digit',
      });
      startTime = endTime;
      return talk;
    });
  }
}

@Component({
  selector: 'app-content',
  standalone: true,
  template: ` <section>
    <div class="container-agenda grid mt-6 text-left px-4 pb-4">
      @for (a of agenda; track $index) {
        <div *ngIf="agenda">
          <div class="text-2xl font-bold text-center">{{ a.title }}</div>
          <div class="margin-2">
            @for (item of a.events | calculateTime: a.start; track $index) {
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
                    @if (item?.speaker?.talk) {
                      <p class="font-normal text-gray-500 margin-1">
                        {{ item?.speaker?.talk?.description }}
                      </p>
                    }
                    @if (item?.speaker?.name) {
                      <div class="margin-1 gap-3 flex items-center">
                        <img
                          [alt]="item?.speaker?.name"
                          [title]="item?.speaker?.name"
                          [src]="item?.speaker?.imageUrl"
                          class="w-12 h-12 object-cover rounded-full  "
                        />
                        <div class="">
                          <p
                            class="leading-tight font-medium m-0 text-gray-900 text-lg"
                          >
                            {{ item?.speaker?.name }}
                          </p>
                          <p class="font-normal text-gray-500 text-sm">
                            {{ item?.speaker?.work }}
                          </p>
                        </div>
                      </div>
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
  </section>`,
  styles: [
    `
      .container-sponsors {
        row-gap: 1rem;
        column-gap: 1.5rem;
      }
      .flex-1-1-0 {
        flex: 1 1 0%;
      }
      .container-agenda {
        @media (min-width: 1024px) {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 2rem;
        }
        column-gap: 4rem;
        row-gap: 3rem;
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      .event {
        @media (min-width: 640px) {
          align-items: stretch;
          flex-direction: row;
        }

        .time {
          @media (min-width: 640px) {
            text-align: right;
            width: 8rem;
          }
        }
      }

      .margin-1 {
        --tw-space-y-reverse: 0;
        margin-bottom: calc(1rem * var(--tw-space-y-reverse));
        margin-top: calc(1rem * (1 - var(--tw-space-y-reverse)));
      }

      .margin-2 {
        --tw-space-y-reverse: 0;
        margin-bottom: calc(2rem * var(--tw-space-y-reverse));
        margin-top: calc(2rem * (1 - var(--tw-space-y-reverse)));
      }
      .container-agenda {
      }

      .img-sponsor {
        width: auto;
        height: 1.75rem;
        max-width: 100%;
        display: block;
        vertical-align: middle;
        max-width: 150px;
      }
      .timeline {
        width: 1px;
        @media (min-width: 640px) {
          display: block;
          flex-shrink: 0;
        }
      }
    `,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    CalculateTimePipe,
    SponsorComponent,
    NgFor,
  ],
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
