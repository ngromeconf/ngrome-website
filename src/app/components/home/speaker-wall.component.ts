import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Speaker } from 'src/app/models/speaker.model';

import { injectContentFiles } from '@analogjs/content';

export function injectSpeakers(): Speaker[] {
  return (
    injectContentFiles<Speaker>((contentFile) =>
      contentFile.filename.includes('/src/content/speakers/'),
    ).map((speaker) => speaker.attributes as unknown as Speaker) || []
  );
}

@Component({
  selector: 'app-speaker-wall',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen">
      <article class="py-6 mb-8">
        <div class="container mx-auto px-4">
          <h1
            class="leading-none font-roboto tracking-tight text-4xl sm:text-5xl md:text-7xl xl:text-9xl"
          >
            Our Speakers
          </h1>
        </div>
      </article>

      <div class="container mx-auto px-4">
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          <div
            *ngFor="let speaker of visibleSpeakers; let i = index"
            class="speaker-card"
            [class.featured]="speaker.featured"
            [class.slide-in]="isSlideIn"
            [class.slide-out]="isSlideOut"
          >
            <img
              [src]="speaker.imageUrl"
              [alt]="speaker.name"
              class="speaker-image"
            />
            <div class="speaker-info">
              <h3 class="text-lg font-bold">{{ speaker.name }}</h3>
              <p class="text-sm">{{ speaker.jobRole }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @property --＠color-1 {
        syntax: '<color>';
        inherits: false;
        initial-value: rgb(92, 68, 228); /* hsl(28 100% 62%) */
      }

      @property --＠color-2 {
        syntax: '<color>';
        inherits: false;
        initial-value: rgb(241, 22, 83); /* hsl(90 100% 59%) */
      }

      @keyframes gradient-change {
        to {
          --＠color-1: rgb(241, 22, 83); /* hsl(210 100% 59%) */
          --＠color-2: rgb(133, 20, 245); /* hsl(310 100% 59%) */
        }
      }

      article {
        animation: gradient-change 2s linear infinite alternate;

        background: linear-gradient(
          to right,
          var(--＠color-1),
          var(--＠color-2)
        );

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        background-clip: text;
        color: transparent;
      }

      .speaker-card {
        @apply relative overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:scale-105;
      }

      .speaker-image {
        @apply w-full h-full object-cover transition-transform duration-300 ease-in-out;
      }

      .speaker-info {
        @apply absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 transform translate-y-full transition-transform duration-300 ease-in-out;
      }

      .speaker-card:hover .speaker-info {
        @apply translate-y-0;
      }

      .speaker-card:hover .speaker-image {
        @apply scale-110;
      }

      .featured {
        @apply col-span-2 row-span-2;
      }

      @keyframes slideIn {
        0% {
          opacity: 0;
          transform: translateX(100%);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideOut {
        0% {
          opacity: 1;
          transform: translateX(0);
        }
        100% {
          opacity: 0;
          transform: translateX(-100%);
        }
      }

      .slide-in {
        animation: slideIn 0.5s ease-in-out forwards;
      }

      .slide-out {
        animation: slideOut 0.5s ease-in-out forwards;
      }
    `,
  ],
})
export class SpeakerWallComponent implements OnInit, OnDestroy {
  readonly allSpeakers: Speaker[] = injectSpeakers()
    .filter((speaker) => speaker.visible) // return only visible === true
    .map((speaker) => {
      if (speaker.edition === 'current' && speaker.visible === true) {
        return speaker;
      }
      return undefined;
    })
    .filter((speaker): speaker is Speaker => speaker !== undefined);

  visibleSpeakers: Speaker[] = [];
  currentIndex = 0;
  isSlideIn = false;
  isSlideOut = false;
  private intervalId: any;

  ngOnInit() {
    this.updateVisibleSpeakers();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateVisibleSpeakers() {
    const endIndex = this.allSpeakers.length;
    console.log('updateVisibleSpeakers: endIndex', endIndex);
    this.visibleSpeakers = this.allSpeakers
      .slice(this.currentIndex, endIndex)
      .sort(() => Math.random() - 0.5);
  }
}
