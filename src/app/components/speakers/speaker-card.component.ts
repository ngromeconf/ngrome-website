import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Speaker } from 'src/app/models/speaker.model';

@Component({
  selector: 'speaker-card',
  standalone: true,
  imports: [NgIf, NgClass],
  template: `
    <div
      class="group relative h-full overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg"
      (click)="speaker.slug === '...' ? null : speakerDetail(speaker)"
      [ngClass]="speaker.slug === '...' ? 'cursor-default' : 'cursor-pointer'"
    >
      <span
        class="absolute m-auto left-0 right-0 w-40 h-40  xl:w-56 xl:h-56 top-10 z-0  rounded-full  group-hover:bg-red-ngrome bg-white transition-all duration-700 group-hover:scale-[10]"
      ></span>
      <div class="relative z-10 mx-auto max-w-md" *ngIf="speaker">
        <span>
          <img
            [src]="speaker.imageUrl"
            alt=" "
            class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 object-cover"
          />
        </span>
        <div
          class="pt-5 text-base leading-7 text-slate-800 transition-all duration-300 group-hover:text-slate-200"
        >
          <h3 class="text-xl">
            {{ speaker.name }}
          </h3>
          <div class="text-sm">
            @if (speaker?.jobRole) {
              <span class="block"> {{ speaker.jobRole }} </span>
            }
            @if (speaker?.work) {
              <span class="block">{{ speaker.work }}</span>
            }
          </div>
        </div>
      </div>
    </div>
  `,
})
export class SpeakerCardComponent {
  @Input() speaker: Speaker;
  @Output() $showSpeaker: EventEmitter<Speaker> = new EventEmitter();

  speakerDetail(speaker: Speaker) {
    this.$showSpeaker.emit(speaker);
  }
}
