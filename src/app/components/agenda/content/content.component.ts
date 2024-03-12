import { Component, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { Agenda } from 'src/app/models/agenda.model';

@Component({
  selector: 'app-content',
  standalone: true,
  template: ` <section>
    <div
      *ngIf="agenda$()"
      class="relative wrap overflow-hidden p-10 h-full mb-10"
    >
      <div
        class="timeline m-auto absolute border-4 right-0 left-0 border-red-ngrome h-full"
      ></div>
      @for (item of agenda$(); track $index) {
        <div
          class="mb-4 flex justify-between items-center w-full font-semibold agenda"
          [ngClass]="
            $index % 2 === 0
              ? 'flex-row-reverse left-timeline text-right'
              : 'right-timeline text-left'
          "
        >
          <div class="order-1 w-5/12"></div>
          <div class="order-1 w-5/12 px-1 py-2">
            <p class="mb-2 text-base text-red-600">{{ item?.startTime }}</p>
            <h4 class="mb-2 font-semibold text-lg md:text-2xl">
              {{ item?.title || item?.type }}
            </h4>
            <span class="mx-2"> {{ item?.speaker }}</span>
          </div>
        </div>
      }
    </div>
  </section>`,
  styles: [
    `
      .timeline {
        width: 0px;
        @media (max-width: 425px) {
          right: 10%;
          left: 90%;
        }
      }

      @media (max-width: 425px) {
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
      }
    `,
  ],
  imports: [CommonModule],
})
export class ContentComponent {
  /**
   * Signal representing the agenda data.
   * @type {Signal<Agenda>}
   */
  public agenda$: Signal<Agenda[]> = this.getAgenda();

  getAgenda() {
    const _http = inject(HttpClient);
    return toSignal(_http.get<Agenda[]>('./api/v1/agenda'), {
      initialValue: [],
    });
  }
}
