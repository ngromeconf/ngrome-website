import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { TitoService } from '../../services/tito.service';
import { WindowRef } from '../../services/window.provider';
import { Router, RouterModule } from '@angular/router';
import { TicketInterface } from 'src/app/models/ticket.interface';

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

          <tito-widget
            event="ngrome-events/ngrome-conf-mmxxv"
            releases="zt7azhmk2mc,wyzmmiwne0u,85t-peutyli,ngrome-in-person-regular-june-27-2024"
          ></tito-widget>

          <!-- Workshop CTA -->
          <div class="w-full py-12 px-4 md:px-6">
            <div
              class="overflow-hidden rounded-lg border-2 border-gray-500 bg-white shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <!-- Card Header -->
              <div class="p-6 pb-0">
                <div class="flex items-center gap-2 text-red-ngrome">
                  <!-- Sparkles icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-5 w-5"
                  >
                    <path
                      d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
                    ></path>
                    <path d="M5 3v4"></path>
                    <path d="M19 17v4"></path>
                    <path d="M3 5h4"></path>
                    <path d="M17 19h4"></path>
                  </svg>
                  <span class="text-sm font-medium uppercase tracking-wide"
                    >Enhance Your Experience</span
                  >
                </div>
                <h2 class="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                  Elevate your NGRome experience with workshops
                </h2>
              </div>

              <!-- Card Content -->
              <div class="p-6 pt-4">
                <p class="text-gray-600">
                  Dive deeper into Angular topics with hands-on workshops led by
                  industry experts. Perfect your skills and get practical
                  experience to take back to your projects.
                </p>

                <div class="mt-6 space-y-4">
                  <div class="flex items-start gap-3">
                    <div
                      class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-red-ngrome"
                    >
                      <span class="text-sm font-medium">1</span>
                    </div>
                    <div>
                      <h3 class="font-medium text-left">Hands-on Learning</h3>
                      <p class="text-sm text-gray-600">
                        Practical exercises guided by Angular experts
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-3">
                    <div
                      class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-red-ngrome"
                    >
                      <span class="text-sm font-medium">2</span>
                    </div>
                    <div>
                      <h3 class="font-medium text-left">
                        Small Group Sessions
                      </h3>
                      <p class="text-sm text-gray-600">
                        Personalized attention in limited-capacity workshops
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-3">
                    <div
                      class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-red-ngrome"
                    >
                      <span class="text-sm font-medium">3</span>
                    </div>
                    <div>
                      <h3 class="font-medium text-left">Take-Home Resources</h3>
                      <p class="text-sm text-gray-600">
                        Access to workshop materials and code samples
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Card Footer -->
              <div
                class="border-t p-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div class="text-sm text-gray-600">
                  <span class="font-medium text-gray-900"
                    >Limited spots available!</span
                  >
                  Workshops are filling up quickly.
                </div>
                <a [routerLink]="'/workshops'" class="button-green">
                  Explore Workshops
                  <!-- Arrow right icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-4">Stay Updated</h2>
          <p class="text-xl text-gray-600 mb-8">
            Don't miss any updates about NGRome! News, update from the angular
            world and discount will be shared in our newsletter!
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
  imports: [CommonModule, RouterModule],
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
