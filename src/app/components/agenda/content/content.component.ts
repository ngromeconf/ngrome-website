import {
  AfterViewInit,
  Component,
  Signal,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { EVENT_YEAR } from '../../../config/site.constants';
import { Agenda } from 'src/app/models/agenda.model';
import {
  injectJSAgenda,
  injectNGAgenda,
} from '../../../pages/speakers/resolvers';
import { Sponsors } from 'src/app/models/sponsor.model';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { EventItemComponent } from '../event-item.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Speaker } from 'src/app/models/speaker.model';
import { SpeakerModalComponent } from '../../speakers/speaker-modal.component';

@Component({
  selector: 'app-content',
  standalone: true,
  template: ` <section>
      <div class="container justify-between w-full mx-auto px-4 lg-px-8">
        <div class="text-center max-w-3xl mx-auto">
          <h2
            class="tracking-tight text-gray-900 leading-5 text-4xl font-extrabold"
          >
            Friday
          </h2>
          <p class="margin-1 text-gray-500 leading-5 font-medium text-lg">
            June 18,19, {{ EVENT_YEAR }}
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
        <div class="container-agenda grid mt-6 text-left pb-4 gap-8">
          <div class="grid grid-cols-1 gap-8">
            @if (jsAgenda) {
              <div>
                <div class="text-2xl font-bold text-center">
                  JSConf — June 18 {{ EVENT_YEAR }}
                </div>
                <div class="margin-2">
                  @for (a of jsAgenda; track $index) {
                    @for (item of a.events; track $index) {
                      <app-event-item
                        [item]="item"
                        (selectSpeaker)="speakerDetail($event)"
                      ></app-event-item>
                    }
                  }
                </div>
              </div>
            }
          </div>
          <div class="grid grid-cols-1 gap-8">
            @if (ngAgenda) {
              <div>
                <div class="text-2xl font-bold text-center">
                  Angular — June 19, {{ EVENT_YEAR }}
                </div>
                <div class="margin-2">
                  @for (a of ngAgenda; track $index) {
                    @for (item of a.events; track $index) {
                      <app-event-item
                        [item]="item"
                        (selectSpeaker)="speakerDetail($event)"
                      ></app-event-item>
                    }
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      <div class="sticky bottom-0 w-full bg-gray-50 px-20 py-5 border-t">
        <div
          class="flex flex-col items-center md:items-start md:flex-row gap-5 justify-between max-w-3xl mx-auto"
        >
          <div class="flex-col gap-4 text-center md:text-left sm:flex hidden">
            <p>
              When:
              <span class="font-semibold"> June 18,19 2026 | 8 AM - 6 PM </span>
            </p>
            <a [routerLink]="'/venue'"
              >Venue: Centro Congresso Frentani - Roma ( Italy )</a
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
    </section>
    <speaker-modal
      [speaker]="speakerSelected()"
      ($closeModal)="closeModal()"
    ></speaker-modal>`,
  styleUrls: ['./content.component.scss'],
  imports: [
    CommonModule,
    SpeakerModalComponent,
    RouterLink,
    EventItemComponent,
  ],
})
export class ContentComponent implements AfterViewInit {
  private route: ActivatedRoute = inject(ActivatedRoute);

  public jsAgenda: Agenda[] = injectJSAgenda();
  public ngAgenda: Agenda[] = injectNGAgenda();
  public readonly EVENT_YEAR = EVENT_YEAR;
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
}
