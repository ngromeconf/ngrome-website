import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Speaker } from 'src/app/models/speaker.model';
import { SocialLinksComponent } from '../shared/social-links.component';
import { DatePipe, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'speaker-modal',
  standalone: true,
  imports: [SocialLinksComponent, NgIf, DatePipe],
  styles: `
    .modal-speaker {
      z-index: 9999;
      transition: opacity 0.3s;
    }

    .modal-speaker.hidden {
      opacity: 0;
      display: block;
      overflow: hidden;
      visibility: hidden;
    }

    .modal-speaker.show {
      opacity: 1;
      visibility: visible;
    }
  `,
  template: `
    <div
      class="hidden modal-speaker h-screen w-full fixed left-0 top-0 flex justify-center sm:items-center bg-black bg-opacity-50 py-24 px-8"
    >
      <!-- modal -->
      <div
        class="bg-white rounded shadow-lg sm:w-10/12 w-full max-w-3xl sm:h-auto  overflow-y-auto"
      >
        <!-- modal header -->
        <div class="flex justify-between  p-5 sm:px-10 items-center">
          <h3 class="font-semibold text-2xl text-left">
            {{ speaker?.name }}
          </h3>
          <span class="text-end cursor-pointer" (click)="closeModal()">
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
                style="display: block"
              ></path>
            </svg>
          </span>
        </div>

        <!-- modal body -->
        <div class="overflow-y-auto ">
          <div class="sm:px-10 px-5 pb-5 container text-left">
            <div class="sm:inline-flex w-full gap-10">
              <img
                [src]="speaker?.imageUrl"
                alt=" "
                class="h-40 w-40 rounded-full xl:w-56 xl:h-56 m-auto mb-2 sm:mb-auto object-cover"
              />
              <div class="w-full">
                <p class="text-slate-500 pb-4">
                  @if (speaker?.jobRole) {
                    {{ speaker?.jobRole }}
                  }
                  @if (speaker?.work) {
                    - {{ speaker?.work }}
                  }
                  @if (speaker?.from) {
                    | {{ speaker?.from }}
                  }
                </p>
                <p class="text-slate-800">
                  {{ speaker?.biography }}
                </p>
                @if (speaker?.links) {
                  <div class="flex justify-start w-100">
                    <app-social-links
                      [links]="speaker!.links!"
                    ></app-social-links>
                  </div>
                }
              </div>
            </div>
          </div>
          @if (speaker?.events?.length) {
            <div class="sm:px-10 px-5 pb-5">
              <div
                class="grid grid-cols-1 divide-y divide-gray-500/10 container bg-gray-100 rounded text-left text-sm sm:text-base font-bold "
              >
                @for (event of speaker?.events; track $index) {
                  <div
                    class="sm:flex cursor-pointer sm:px-10 px-5 py-5 hover:underline hover:text-red-ngrome"
                    (click)="goToEvent(event.link!, event.isTalk)"
                  >
                    <div class="sm:text-left w-full m-auto uppercase">
                      <p>{{ event.title }}</p>
                    </div>
                    <div class="sm:text-right sm:w-40 mt-2 sm:mt-0">
                      <p>{{ event.date | date: 'd MMM' }}</p>
                      <p>{{ event.time }}</p>
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class SpeakerModalComponent {
  @Input() speaker!: Speaker | null;
  @Output() $closeModal: EventEmitter<void> = new EventEmitter();

  private router = inject(Router);

  closeModal() {
    this.$closeModal.emit();
  }

  goToEvent(url: string, talk: boolean = false) {
    this.$closeModal.emit();
    this.router.navigate(
      [talk ? 'agenda' : url],
      talk
        ? {
            fragment: url,
          }
        : {},
    );
  }
}
