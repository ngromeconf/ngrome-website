import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../shared/button.component';
import { TitoService } from '../../services/tito.service';
import { WindowRef } from '../../services/window.provider';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TicketInterface } from 'src/app/models/ticket.interface';

@Component({
  selector: 'app-tickets',
  standalone: true,
  providers: [TitoService, WindowRef],
  template: `
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
          tickets grant you access to an immersive experience where you'll gain
          valuable insights, network with experts, and supercharge your Angular
          skills. <br />

          <span class="italic font-semibold"
            >* If you're purchasing 3 or more tickets, don't forget to get in
            touch with us for exclusive discounts and group offers. Join us in
            shaping the future of Angular!</span
          >
        </p>

        @if (ticketsList$ | async; as TicketsList) {
          <div
            class="grid lg:grid-cols-2 xl:grid-cols-3 px-8 gap-10 text-zinc-800 mt-10"
          >
            @for (item of TicketsList; track $index) {
              @if (item.visible) {
                <div
                  class="flex flex-col items-center bg-slate-100 p-4 rounded-lg shadow-lg"
                  [ngClass]="{
                    'bg-gradient-to-br from-white via-gray-200 to-white rounded-lg shadow-lg relative border-4 border-red-ngrome max-w-sm':
                      item.popular || item.bestExperience
                  }"
                >
                  @if (item.popular) {
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="0.5"
                      stroke="white"
                      class="w-20 h-20 absolute -top-11 -left-11 fill-red-ngrome"
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

                    <p
                      class="mono text-sm absolute -top-4 bg-red-ngrome text-zinc-100 py-0.5 px-2 font-bold tracking-wider rounded"
                    >
                      BEST VALUE
                    </p>
                  }
                  @if (item.bestExperience) {
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="0.5"
                      stroke="white"
                      class="w-20 h-20 absolute -top-11 -left-11 fill-red-ngrome"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>

                    <p
                      class="mono text-sm absolute -top-4 bg-red-ngrome text-zinc-100 py-0.5 px-2 font-bold tracking-wider rounded"
                    >
                      BEST EXPERIENCE
                    </p>
                  }
                  <div>
                    <h2 class="font-extrabold text-3xl text-center mb-2">
                      {{ item.name }}
                    </h2>
                    <p class="opacity-60 text-center">
                      {{ item.subtitle }}
                    </p>
                    <div class="flex flex-col items-center my-8">
                      <p class="font-extrabold text-4xl">€{{ item.price }}</p>
                      @if (item.realPrice) {
                        <span class="line-through">€{{ item.realPrice }}</span>
                      }
                    </div>
                  </div>
                  <div class="flex justify-center mt-2 mb-8 ">
                    @if (item.soldOut) {
                      <span
                        class="text-3xl
                        font-extrabold
                        text-transparent
                        bg-clip-text
                        bg-gradient-to-r
                        from-red-ngrome
                        to-pink-600
                        rotate-12"
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
                        Sales start on
                        {{ item.saleStart | date: 'dd MMMM yyyy' }}
                      </span>
                    } @else {
                      <app-button
                        [eventID]="item.event"
                        [ticketID]="item.ticket"
                        [label]="'REGISTER'"
                      />
                    }
                  </div>
                  <div class="flex flex-col gap-1">
                    @for (feature of item.features; track $index) {
                      <p class="flex items-start text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="w-4 h-4 mr-2 text-green-600"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <b>{{ feature }}</b>
                      </p>
                    }
                  </div>
                </div>
              }
            }
          </div>
        }
      </div>
    </section>
  `,
  styles: ``,
  imports: [CommonModule, ButtonComponent],
})
export class TicketsComponent implements OnInit {
  private tito: any;
  public ticketsList$: Observable<TicketInterface[]>;
  constructor(
    private titoService: TitoService,
    private winRef: WindowRef,
    private router: Router,
    private http: HttpClient,
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

  ngOnInit() {
    this.getTickets();
  }

  getTickets() {
    this.ticketsList$ = this.http.get<TicketInterface[]>('/api/v1/tickets');
  }
}
