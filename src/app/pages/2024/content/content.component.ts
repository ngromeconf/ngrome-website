import {
  AfterViewInit,
  Component,
  Signal,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { CommonModule, NgFor, NgOptimizedImage } from '@angular/common';
import { Agenda } from 'src/app/models/agenda.model';
import { Sponsors } from 'src/app/models/sponsor.model';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

import { ActivatedRoute } from '@angular/router';
import { Speaker } from 'src/app/models/speaker.model';
import SponsorComponent from '../../sponsors.page';
import { SpeakerModalComponent } from '../../../components/speakers/speaker-modal.component';
import { injectAgenda } from '../resolvers';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    SponsorComponent,
    NgFor,
    SpeakerModalComponent,
  ],
  template: ` <section>
      <div class="container justify-between w-full mx-auto px-4 lg-px-8">
        <div class="container-agenda grid mt-6 text-left pb-4">
          @for (a of agenda; track $index) {
            <div
              *ngIf="agenda"
              [ngClass]="$index % 2 ? 'border-left' : 'border-right'"
            >
              <div class="margin-2">
                @for (item of a.events; track $index) {
                  <div
                    class="flex flex-col sm:gap-4 event border-1"
                    [id]="'talk-' + item.slug"
                  >
                    <div class="bg-gray-200 hidden sm:block timeline"></div>
                    <div class="lg:pb-8 pb-12 flex-1-1-0">
                      <div
                        [ngClass]="
                          item.type.includes('Pause')
                            ? 'rounded-lg bg-gray-100 p-4'
                            : ''
                        "
                      >
                        <h4 class="font-bold text-lg md:text-1xl">
                          {{ item?.title || item?.type }}
                        </h4>
                        @if (item?.subtitle) {
                          <h3
                            class="font-semibold text-lg md:text-1xl margin-1"
                          >
                            {{ item?.subtitle }}
                          </h3>
                        }
                        @if (item?.description) {
                          <p class="font-normal text-gray-500 margin-1">
                            {{ item?.description }}
                          </p>
                        }
                        @if (item?.videoURL) {
                          <button
                            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-right"
                            (click)="openYoutube(item?.videoURL)"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                              />
                            </svg>

                            <span>&nbsp; Watch now</span>
                          </button>
                          <a href="{{ item?.videoURL }}" target="_blank"> </a>
                        }
                        @for (
                          speaker of item?.speakers;
                          track $index;
                          let last = $last
                        ) {
                          @if (speaker?.name) {
                            <div
                              class="margin-1 gap-3 flex items-center cursor-pointer"
                              (click)="speakerDetail(speaker)"
                            >
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
                            @if (last) {
                              <hr
                                class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"
                              />
                            }
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
                              class="flex flex-wrap items-center container-sponsors"
                            >
                              @for (item of Sponsors.Main; track $index) {
                                <img
                                  class="object-contain img-sponsor"
                                  [alt]="item.name"
                                  [title]="item.name"
                                  [src]="item.image"
                                />
                              }
                            </div>
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
      </div>

      <div class="sticky bottom-0 w-full bg-gray-50 px-20 py-5 border-t">
        <div
          class="flex flex-col items-center md:items-start md:flex-row gap-5 justify-between max-w-3xl mx-auto"
        >
          <div class="flex-col gap-4 text-center md:text-left sm:flex hidden">
            <p>
              When:
              <span class="font-semibold"> June 27, 2024 | 8 AM - 7 PM </span>
            </p>
            <a href="/venue"
              >Venue:
              <span class="text-blue-600 hover:underline"
                >Midas Palace Hotel</span
              ></a
            >
          </div>
        </div>
      </div>
    </section>
    <speaker-modal
      [speaker]="speakerSelected()"
      ($closeModal)="closeModal()"
    ></speaker-modal>`,
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements AfterViewInit {
  private route: ActivatedRoute = inject(ActivatedRoute);

  public agenda: Agenda[] = injectAgenda();
  /**
   * Signal representing the sponsors data.
   * @type {Signal<Sponsors>}
   */
  public sponsors$: Signal<Sponsors> = this.getSponsors();

  modal: Element | null = null;
  body = document.querySelector('body');
  speakerSelected: WritableSignal<Speaker | null> = signal(null);

  ngAfterViewInit(): void {
    this.modal = document.querySelector('.modal-speaker');

    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        this.scrollToCenter(fragment);
      }
    });
  }

  scrollToCenter(fragment: string) {
    const element = document.getElementById('talk-' + fragment);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.scrollY;
      const middle =
        absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2;
      window.scrollTo({ top: middle, behavior: 'smooth' });
    }
  }
  getSponsors() {
    const _http = inject(HttpClient);
    return toSignal(_http.get<Sponsors>('./api/v1/sponsors'), {
      initialValue: {},
    });
  }

  speakerDetail(speaker: Speaker) {
    speaker.events = [];
    this.speakerSelected.set(speaker);
    this.modal?.classList.remove('hidden');
    this.modal?.classList.add('show');

    if (this.body) this.body.style.overflowY = 'hidden';
  }

  closeModal() {
    this.speakerSelected.set(null);
    this.modal?.classList.add('hidden');
    this.modal?.classList.remove('show');

    if (this.body) this.body.style.overflowY = 'auto';
  }

  openYoutube(url: string) {
    window.open(url, '_blank');
  }
}
