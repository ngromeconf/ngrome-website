import { Component } from '@angular/core';
import { PageHeadComponent } from '../components/layout/pages/page-head/page-head.component';

@Component({
  selector: 'app-agenda',
  standalone: true,
  template: `
    <app-page-head
      [title]="'AGENDA'"
      [subtitle]="
        'One track, one day, filled with talks of the Angular engineers who build the most performant apps and web experiences.'
      "
    />
    <div class="flex items-center justify-center  bg-white">
      <div class="col-span-12">
        <div class="overflow-auto lg:overflow-visible ">
          <div class="max-w-xl p-8 mx-auto dark:bg-gray-800 dark:text-gray-100">
            <ul class="space-y-5">
              <li class="flex items-start space-x-31 bg-red p-3 rounded-xl min-w-full">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  class="flex items-center h-8 text-sm hover:underline text-white"
                  >8.00 --> 9.00</a
                >
                <div class="flex-1 space-y-2 text-white">
                  <div
                    class="flex items-center justify-between space-x-4 dark:text-gray-400"
                  >
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      class="inline-flex items-center px-3 my-1 space-x-2 text-sm"
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#ffffff"
                        class="mr-3"
                      >
                        <path
                          d="M17 11.6V15a6 6 0 01-6 6H9a6 6 0 01-6-6v-3.4a.6.6 0 01.6-.6h12.8a.6.6 0 01.6.6zM12 9c0-1 .714-2 2.143-2v0A2.857 2.857 0 0017 4.143V3.5M8 9v-.5a3 3 0 013-3v0a2 2 0 002-2V3"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M16 11h2.5a2.5 2.5 0 010 5H17"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      Registration & Coffee
                    </a>
                    <span class="text-xs whitespace-nowrap">1h</span>
                  </div>
                </div>
              </li>
              <li class="flex items-start space-x-1 bg-red p-3 rounded-xl text-white">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  class="flex items-center h-8 text-sm hover:underline text-white"
                  >9.00 --> 9.10</a
                >
                <div class="flex-1 space-y-2">
                  <div
                    class="flex items-center justify-between space-x-4 dark:text-gray-400"
                  >
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      class="inline-flex items-center px-3 my-1 space-x-2 text-sm text-white"
                    >
                      <svg
                        width="24px"
                        height="24px"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#000000"
                        class="mr-3"
                      >
                        <rect
                          x="9"
                          y="2"
                          width="6"
                          height="12"
                          rx="3"
                          stroke="#ffffff"
                          stroke-width="1.5"
                        ></rect>
                        <path
                          d="M5 10v1a7 7 0 007 7v0a7 7 0 007-7v-1M12 18v4m0 0H9m3 0h3"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg> Opening Remarks
                    </a>
                    <span class="text-xs whitespace-nowrap">10m</span>
                  </div>
                  
                </div>
              </li>
              <li class="flex items-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  class="flex items-center h-8 text-sm hover:underline"
                  >9.10 --> 9.50</a
                >
                <div class="flex-1 space-y-2">
                  <div
                    class="flex items-center justify-between space-x-4 dark:text-gray-400"
                  >
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      class="inline-flex items-center px-3 my-1 space-x-2 text-sm "
                    >
                      <svg
                        width="24px"
                        height="24px"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#000000"
                      >
                        <rect
                          x="9"
                          y="2"
                          width="6"
                          height="12"
                          rx="3"
                          stroke="#000000"
                          stroke-width="1.5"
                        ></rect>
                        <path
                          d="M5 3v2M1 2v4m18-3v2m4-3v4M5 10v1a7 7 0 007 7v0a7 7 0 007-7v-1M12 18v4m0 0H9m3 0h3"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                    <span class="text-xs whitespace-nowrap">40m</span>
                  </div>
                  <div class="space-y-2">Opening Keynote</div>
                </div>
              </li>
              <li class="flex items-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  class="flex items-center h-8 text-sm hover:underline"
                  >9.10 --> 9.50</a
                >
                <div class="flex-1 space-y-2">
                  <div
                    class="flex items-center justify-between space-x-4 dark:text-gray-400"
                  >
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      class="inline-flex items-center px-3 my-1 space-x-2 text-sm"
                    >
                      <svg
                        width="24px"
                        height="24px"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#000000"
                      >
                        <rect
                          x="9"
                          y="2"
                          width="6"
                          height="12"
                          rx="3"
                          stroke="#000000"
                          stroke-width="1.5"
                        ></rect>
                        <path
                          d="M5 3v2M1 2v4m18-3v2m4-3v4M5 10v1a7 7 0 007 7v0a7 7 0 007-7v-1M12 18v4m0 0H9m3 0h3"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                    <span class="text-xs whitespace-nowrap">40m</span>
                  </div>
                  <div class="space-y-2">Talk 1</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  imports: [PageHeadComponent],
})
export default class AgendaComponent {}
