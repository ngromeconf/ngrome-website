import { CommonModule } from '@angular/common';
import { Component, Pipe, PipeTransform, Signal, inject } from '@angular/core';
import { ButtonComponent } from '../shared/button.component';
import { TitoService } from '../../services/tito.service';
import { WindowRef } from '../../services/window.provider';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TicketInterface } from 'src/app/models/ticket.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { TicketsItemComponent } from './tickets-item.component';
import { tick } from '@angular/core/testing';

@Pipe({
  name: 'filterTicketByType',
  standalone: true,
})
export class FilterTicketByDatePipe implements PipeTransform {
  transform(value: TicketInterface[], ticketTipe: string) {
    console.log(value, ticketTipe);
    return value.filter((item: any) => (item.category === ticketTipe || ticketTipe === 'all') );
  }
}

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

          <div class="grid grid-cols-3 gap-4 py-8">
            <button
              class="p-4 rounded shadow-md"
              [ngClass]="{
                'bg-red-ngrome text-gray-100': filterby === 'conference',
                'bg-white text-red-ngrome': filterby !== 'conference'
              }"
              (click)="updateTicketFilter('conference')"
            >
              Conference
            </button>
            <button
              class="p-4 rounded shadow-md"
              [ngClass]="{
                'bg-red-ngrome text-gray-100': filterby === 'combo',
                'bg-white text-red-ngrome': filterby !== 'combo'
              }"
              (click)="updateTicketFilter('combo')"
            >
              Combo
            </button>
            <button
              class="p-4 rounded shadow-md"
              [ngClass]="{
                'bg-red-ngrome text-gray-100': filterby === 'workshop',
                'bg-white text-red-ngrome': filterby !== 'workshop'
              }"
              (click)="updateTicketFilter('workshop')"
            >
              Workshop
            </button>
          </div>
          <div class="">
            <div class="mt-2 space-y-4 xl:mt-4">
              @for (
                item of ticketsList$() | filterTicketByType: filterby;
                track $index
              ) {
                @if (item.visible) {
                  <app-tickets-item
                    [item]="item"
                    class="px-4 md:px-8"
                  ></app-tickets-item>
                }
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: ``,
  imports: [
    CommonModule,
    ButtonComponent,
    TicketsItemComponent,
    FilterTicketByDatePipe,
  ],
})
export class TicketsComponent {
  private tito: any;
  public ticketsList$: Signal<TicketInterface[]> = this.getTickets();
  filterby: string = 'all';
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

  updateTicketFilter(filter: string) {
    this.filterby = filter;
    console.log(this.filterby);
  }
}
