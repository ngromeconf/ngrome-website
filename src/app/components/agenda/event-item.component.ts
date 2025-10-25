import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Event as AgendaEvent } from 'src/app/models/agenda.model';
import { Speaker } from 'src/app/models/speaker.model';

@Component({
  selector: 'app-event-item',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div
      class="flex flex-col sm:gap-4 event border-1"
      [id]="'talk-' + item.slug"
    >
      <p class="flex-shrink-0 font-medium  text-gray-500 text-sm time">
        {{ item.startTime }} - {{ item.endTime }}<br />
        <span
          class=" w-content text-xs font-medium px-2.5 py-0.5 rounded-full break-all nowrap"
          [ngClass]="
            item.track?.includes('Community')
              ? 'bg-red-100 text-red-800 border-red-400'
              : 'bg-blue-100 text-blue-800 border-blue-400'
          "
        >
          {{ item.track }}
        </span>
      </p>
      <div class="bg-gray-200 hidden sm:block timeline"></div>
      <div class="lg:pb-8 pb-12 flex-1-1-0">
        <div
          [ngClass]="
            item.type.includes('Pause') ? 'rounded-lg bg-gray-100 p-4' : ''
          "
        >
          <h4 class="font-bold text-lg md:text-1xl">
            {{ item.title || item.type }}
          </h4>
          <ng-container *ngIf="item.subtitle">
            <h3 class="font-semibold text-lg md:text-1xl margin-1">
              {{ item.subtitle }}
            </h3>
          </ng-container>
          <!-- <ng-container *ngIf="item.description">
            <p class="font-normal text-gray-500 margin-1">
              {{ item.description }}
            </p>
          </ng-container> -->

          <ng-container *ngFor="let speaker of item.speakers; let last = last">
            <ng-container *ngIf="speaker?.name">
              <div
                class="margin-1 gap-3 flex items-center cursor-pointer"
                (click)="selectSpeaker.emit(speaker)"
              >
                <img
                  [alt]="speaker?.name"
                  [title]="speaker?.name"
                  [ngSrc]="speaker?.imageUrl || ''"
                  width="200"
                  height="200"
                  class="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <p
                    class="leading-tight font-medium m-0 text-gray-900 text-lg"
                  >
                    {{ speaker?.name }}
                  </p>
                  <p class="font-normal text-gray-500 text-sm">
                    {{ speaker?.jobRole
                    }}<ng-container *ngIf="speaker?.work">
                      - {{ speaker?.work }}</ng-container
                    >
                  </p>
                </div>
              </div>
              <ng-container *ngIf="last">
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              </ng-container>
            </ng-container>
          </ng-container>
        </div>
      </div>
    </div>
  `,
})
export class EventItemComponent {
  @Input() item!: AgendaEvent;
  @Output() selectSpeaker = new EventEmitter<Speaker>();
}
