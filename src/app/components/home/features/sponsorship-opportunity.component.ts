import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsorship-opportunity',
  standalone: true,
  imports: [NgFor],
  template: `<!-- Sponsorship CTA Section -->

    <section
      class="bg-gradient-to-r from-red-ngrome to-indigo-700 py-12 px-4 sm:px-6 md:py-16 md:px-8"
    >
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-xl shadow-xl overflow-hidden">
          <div class="p-6 sm:p-10">
            <div class="flex flex-col md:flex-row items-center">
              <!-- Left content -->
              <div class="flex-1 mb-8 md:mb-0 md:pr-8">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  We're Looking for Sponsors
                </h2>
                <p class="text-lg text-gray-600 mb-6">
                  Partner with us to reach our engaged audience and support our
                  mission. Sponsorship packages available for businesses of all
                  sizes.
                </p>
                <ul class="space-y-2 mb-6">
                  @for (item of benefits; track $index) {
                    <li class="flex items-center text-gray-600">
                      <svg
                        class="w-5 h-5 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {{ item }}
                    </li>
                  }
                </ul>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfrzLiGk0jkwaVp1RkXlXGB0EJKtEQ30zUaA8Od4h7mgS42iw/viewform"
                  class="inline-block px-6 py-3 tito-widget-button-large font-medium rounded-lg text-center transition duration-150 ease-in-out shadow-md hover:shadow-lg"
                >
                  Become a Sponsor
                </a>
              </div>

              <!-- Right content/image -->
              <div class="flex-shrink-0 w-full md:w-1/3">
                <div class="bg-indigo-100 rounded-lg p-6 text-center">
                  <svg
                    class="w-24 h-24 mx-auto text-indigo-500 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                  <p class="text-indigo-700 font-medium">
                    Join our growing list of partners
                  </p>
                  <div class="mt-4 flex justify-center space-x-3">
                    <span class="w-3 h-3 bg-red-ngrome rounded-full"></span>
                    <span class="w-3 h-3 bg-purple-600 rounded-full"></span>
                    <span class="w-3 h-3 bg-indigo-600 rounded-full"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div
            class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center"
          >
            <p class="text-sm text-gray-500 mb-2 sm:mb-0"></p>
            <a
              href="https://docs.google.com/presentation/d/e/2PACX-1vRIbPluuyv_vvjRYr5-HS0pwLxFbbV_DbUarfxEB4A2dg5bbLOFnqocITf0Y-eVk1tILjJ73eDzexbR/pub?start=true&loop=true&delayms=5000&slide=id.g31e2e9c24f5_1_0"
              target="_blank"
              class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              View sponsorship packages →
            </a>
          </div>
        </div>
      </div>
    </section>`,
})
export class SponsorshipOpportunityComponent {
  // Component logic goes here
  public benefits = [
    'Brand visibility to our community',
    'Access to exclusive events',
    'Engagement with our audience',
    'Network with potential partners',
  ];
}
