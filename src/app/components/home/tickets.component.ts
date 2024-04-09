import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal, inject } from '@angular/core';
import { ButtonComponent } from '../shared/button.component';
import { TitoService } from '../../services/tito.service';
import { WindowRef } from '../../services/window.provider';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TicketInterface } from 'src/app/models/ticket.interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tickets',
  standalone: true,
  providers: [TitoService, WindowRef],
  template: `
    <div class="bg-white dark:bg-gray-900">
      <section
        id="TicketSection"
        class="py-4 pt-10 md:py-8 bg-gray-200 text-black"
      >
        <div class="container px-5 py-32 mx-auto lg:px-24">
          <h2
            class="leading-none font-roboto tracking-tight text-4xl sm:text-5xl md:text-7xl xl:text-9xl"
          >
            Tickets<br />
          </h2>
          <p
            class="mt-12 font-roboto text-slate-500 sm:text-lg sm:leading-normal lg:text-xl lg:leading-normal xl:text-2xl xl:leading-normal"
          >
            Embark on your journey to the next level of Angular right here. Our
            tickets grant you access to an immersive experience where you'll
            gain valuable insights, network with experts, and supercharge your
            Angular skills. <br />

            <span class="italic font-semibold"
              >* If you're purchasing 3 or more tickets, don't forget to get in
              touch with us for exclusive discounts and group offers. Join us in
              shaping the future of Angular!</span
            >
          </p>

          <div class="mt-6 space-y-8 xl:mt-12">
            @for (item of ticketsList$(); track $index) {
              @if (item.visible) {
                <div
                  class="flex items-center bg-white justify-between max-w-2xl px-8 py-4 mx-auto border rounded-xl dark:border-gray-700"
                  [ngClass]="{
                    'border-1 border-red-ngrome':
                      item.popular || item.bestExperience
                  }"
                >
                  <div class="flex items-center">
                    @if (item.popular) {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="0.5"
                        stroke="white"
                        class="w-5 h-5 text-gray-400 sm:h-9 sm:w-9 fill-red-ngrome"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                        />
                      </svg>
                    } @else if (item.bestExperience) {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="0.5"
                        stroke="white"
                        class="w-5 h-5 text-gray-400 sm:h-9 sm:w-9 fill-red-ngrome"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                    } @else {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="0.5"
                        stroke="white"
                        class="w-5 h-5 text-gray-400 sm:h-9 sm:w-9 fill-red-ngrome"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                        />
                      </svg>
                    }

                    <div
                      class="flex flex-col items-center mx-5 space-y-1 min-w-64"
                    >
                      <h2
                        class="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200"
                      >
                        {{ item.name }}
                      </h2>
                    </div>
                  </div>

                  <div class="flex flex-col items-center mx-5 space-y-1 ">
                    <h2
                      class="text-4xl font-semibold text-gray-500 sm:text-3xl dark:text-gray-300"
                    >
                      €{{ item.price }}
                    </h2>
                    @if (item.realPrice) {
                      <span
                        class="px-2 text-xs text-red-500 bg-gray-100 rounded-full line-through sm:px-4 sm:py-1 dark:bg-gray-700 "
                      >
                        €{{ item.realPrice }}
                      </span>
                    }
                  </div>
                  <div class="flex justify-center">
                    @if (item.soldOut) {
                      <span
                        class="text-xl
                        font-extrabold
                        text-transparent
                        bg-clip-text
                        bg-gradient-to-r
                        from-red-ngrome
                        to-pink-600
                        rotate-12
                        border-2
                        border-red-ngrome"
                      >
                        SOLD OUT
                      </span>
                    } @else if (item.saleStart) {
                      <span
                        class="text-1xl
                        font-extrabold
                        text-transparent
                        bg-clip-text
                        bg-gradient-to-r
                        from-gray-600
                        trough-gray-400
                        to-slate-600"
                      >
                        Sales start on<br />
                        {{ item.saleStart | date: 'MMMM dd yyyy' }}
                      </span>
                    } @else {
                      <app-button
                        [eventID]="item.event"
                        [ticketID]="item.ticket"
                        [label]="'REGISTER'"
                      />
                    }
                  </div>
                </div>
              }
            }
          </div>
        </div>
      </section>
    </div>
  `,
  styles: ``,
  imports: [CommonModule, ButtonComponent],
})
export class TicketsComponent {
  private tito: any;
  public ticketsList$: Signal<TicketInterface[]> = this.getTickets();
  constructor(
    private titoService: TitoService,
    private winRef: WindowRef,
    private router: Router,
  ) {
    this.titoService.lazyLoadTito().subscribe((res) => {
      this.tito = this.winRef.nativeWindow.tito;

      // this.tito('on:widget:loaded', function (data: any) {
      //   console.log('Tito widget loaded', data);
      // });
      // this.tito('on:registration:started', function (data: any) {});
      this.tito('on:registration:finished', (data: any) => {
        console.log('Tito registration finished', data);
        this.router.navigateByUrl(`/thank-you/${data.reference}/${data.name}`);
      });
    });
  }

  getTickets() {
    const _http = inject(HttpClient);
    return toSignal(_http.get<TicketInterface[]>('/api/v1/tickets'), {
      initialValue: [],
    });
  }
}
