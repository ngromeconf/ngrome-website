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
    <div class="md:flex block">
      @for (a of agenda; track $index) {
        <div
          *ngIf="agenda"
          class="relative wrap overflow-hidden p-4 sm:p-10 md:p-4 h-full"
        >
          <div class="text-3xl mb-4 font-bold">{{ a.title }}</div>

          @for (item of a.events | calculateTime: a.start; track $index) {
            <div class="flex justify-between w-full font-semibold agenda gap-4">
              <div class="right-timeline text-right w-40 mb-4  hidden sm:block">
                <div class="order-1 px-1 py-2">
                  <p class="mb-2 text-base text-red-600">
                    {{ item?.startTime }} - {{ item?.endTime }}
                  </p>
                </div>
              </div>
              <div class="timeline  border-2 border-red-ngrome"></div>
              <div
                class="flex-row-reverse left-timeline text-left w-full border-4  mb-4"
                [ngClass]="
                  item.type.includes('Pause')
                    ? 'rounded-xl bg-gray-50 border-red-ngrome'
                    : 'border-white'
                "
              >
                <div class="order-1 w-full px-1 py-2">
                  <p class="mb-2 text-base text-red-600 sm:hidden block">
                    {{ item?.startTime }} - {{ item?.endTime }}
                  </p>
                  <h4 class="mb-2 font-bold text-lg md:text-2xl">
                    {{ item?.title || item?.type }}
                  </h4>
                  @if (item?.speaker?.talk) {
                    <p class="mx-2 font-normal">
                      {{ item?.speaker?.talk?.description }}
                    </p>
                  }
                  @if (item?.speaker?.name) {
                    <div
                      class="flex  md:flex-row items-center flex-wrap p-4 w-full select-none justify-center"
                    >
                      <div class=" flex-row justify-center w-20 h-20">
                        <div class="relative block">
                          <img
                            [alt]="item?.speaker?.name"
                            [title]="item?.speaker?.name"
                            [src]="item?.speaker?.imageUrl"
                            class="mx-auto object-cover rounded-full h-20 w-20 "
                          />
                        </div>
                      </div>
                      <div class="grow pl-2">
                        <div class="text-sm pt-5 sm:text-xl  lg:pt-0 ">
                          <p class="font-bold">
                            {{ item?.speaker?.name }}
                          </p>
                          <span class="font-normal text-sm">{{
                            item?.speaker?.work
                          }}</span>
                        </div>
                      </div>
                    </div>
                  }
                  @if (
                    item.type.includes('Pause') && sponsors$();
                    as Sponsors
                  ) {
                    <div>Sponsors:</div>
                    <div class="container  mx-auto ">
                      <div class="grid grid-cols-12 items-center gap-4">
                        @for (item of Sponsors.Gold; track $index) {
                          <a
                            class="inline-flex items-center p-2 sm:col-span-4 col-span-12"
                            [href]="item.url ? item.url : '/sponsors'"
                            target="_blank"
                          >
                            <img
                              [alt]="item.name"
                              [title]="item.name"
                              [ngSrc]="item.image"
                              class="flex-shrink-0 object-cover object-center w-full h-25"
                              width="200"
                              height="50"
                            />
                          </a>
                        }
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      }
    </div>
  </section>`,
  styles: [
    `
      .timeline {
        width: 0px;
        left: 11rem;
        /*    @media (max-width: 425px) {
          right: 10%;
          left: 90%;
        } */
      }

      /*  @media (max-width: 425px) {
        .agenda {
          text-align: right;
        }
        .order-1 {
          order: 0;
        }
        .order-1:nth-child(odd) {
          width: 0%;
        }
        .order-1:nth-child(even) {
          width: 100%;
          margin-right: 1.5rem;
        }
      } */
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
