import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Pipe,
  PipeTransform,
  Signal,
  inject,
} from '@angular/core';
import { ButtonComponent } from '../shared/button.component';
import { TitoService } from '../../services/tito.service';
import { WindowRef } from '../../services/window.provider';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TicketInterface } from 'src/app/models/ticket.interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Pipe({
  name: 'filterTicketByType',
  standalone: true,
})
export class FilterTicketByDatePipe implements PipeTransform {
  transform(value: TicketInterface[], ticketTipe: string) {
    console.log(value, ticketTipe);
    return value.filter(
      (item: any) => item.category === ticketTipe || ticketTipe === 'all',
    );
  }
}

@Component({
  selector: 'app-tickets',
  standalone: true,
  providers: [TitoService, WindowRef],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
            Ticket
            <br />
          </h2>
          <p
            class="mt-12 font-roboto text-slate-500 sm:text-lg sm:leading-normal lg:text-xl lg:leading-normal xl:text-2xl xl:leading-normal"
          >
            Join a vibrant community of Angular developers and elevate your
            expertise. <br />Invest in your career and experience the future of
            Angular in the heart of Rome.
            <br />
          </p>

          <tito-widget event="ngrome-events/ngrome-conf-mmxxv"></tito-widget>
        </div>
      </section>

      <section class="py-16 px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-4">Stay Updated</h2>
          <p class="text-xl text-gray-600 mb-8">
            Don't miss any updates about ngRome 2024!
          </p>
          <tito-register-interest
            event="ngrome-events/ngrome-conf-mmxxv"
          ></tito-register-interest>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      :host ::ng-deep {
        .tito-register-interest-form {
          background: white;
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          max-width: 500px;
          margin: 0 auto;
        }

        .tito-register-interest-form label {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
          color: #4b5563;
          font-size: 0.875rem;
          width: 100%;

          @media (min-width: 640px) {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .tito-register-interest-form input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
          font-size: 1rem;
          transition: border-color 0.2s;

          @media (min-width: 640px) {
            width: 70%;
            margin-left: auto;
          }

          &:focus {
            outline: none;
            border-color: #6a7280;
            ring: 2px rgba(99, 102, 241, 0.2);
          }
        }

        .tito-register-interest-form button {
          @apply inline-flex items-center px-5 py-2.5 text-sm bg-green-600 hover:bg-red-ngrome text-slate-100 font-medium rounded-md active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300;
          width: 100%;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.375rem;
          font-weight: 500;
          margin-top: 1rem;
          justify-content: center;
        }

        .svg-inline--fa {
          display: none;
          width: 1rem;
          height: 1rem;
          color: #6a7280;

          @media (min-width: 640px) {
            display: block;
          }
        }
      }
    `,
  ],
  imports: [CommonModule],
})
export class TicketsComponent {
  private tito: any;

  constructor(
    private titoService: TitoService,
    private winRef: WindowRef,
    private router: Router,
  ) {
    this.titoService.lazyLoadTito().subscribe((res) => {
      this.tito = this.winRef.nativeWindow.tito;
      this.tito('on:registration:finished', (data: any) => {
        console.log('Tito registration finished', data);
        //this.router.navigateByUrl(`/thank-you/${data.reference}/${data.name}`);
      });
    });
  }
}
