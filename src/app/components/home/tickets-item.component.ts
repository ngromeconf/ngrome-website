import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../shared/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets-item',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  template: `
    <div
      class="flex items-center bg-white justify-between max-w-3xl px-4 md:px-8 py-4 mx-auto border rounded-xl"
    >
      <div class="flex items-center">
        <span class="relative md:inline-block hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="0.5"
            stroke="white"
            class="w-7 h-7 text-gray-400 sm:h-9 sm:w-9 fill-red-ngrome"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
            />
          </svg>
        </span>

        <div
          class="flex flex-col items-center mx-5 space-y-1 max-w-12 sm:min-w-64"
        >
          <h2
            class="text-xs font-semibold text-gray-700 sm:text-2xl dark:text-gray-200"
          >
            {{ item.name }}
          </h2>
          @if (item.remains) {
            <span
              class="bg-yellow-500 rounded-full text-white px-3 py-1 text-xs uppercase"
              >{{ item.remains }} available</span
            >
          }
          <!-- <div
            class="hidden sm:flex flex-row items-center space-x-2 invisible sm:visible "
          >
            @for (feature of item.features; track $index) {
              <span
                class="inline-flex items-center py-1 text-xs font-medium text-gray-600"
                >{{ feature }}</span
              >
            }
          </div> -->
        </div>
      </div>

      <div class="flex flex-col items-center mx-5 space-y-1 ">
        <h2
          class="text-xl font-semibold text-gray-500 sm:text-4xl dark:text-gray-300"
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
            class="text-md
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
            class="text-sm
                        sm:text-md
                        font-extrabold
                        text-transparent
                        bg-clip-text
                        bg-gradient-to-r
                        from-gray-600
                        trough-gray-400
                        py-4
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
  `,
  styles: ``,
})
export class TicketsItemComponent {
  @Input() item: any;
}
