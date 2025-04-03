import { Component, signal, WritableSignal } from '@angular/core';
import { Speaker } from 'src/app/models/speaker.model';
import { injectActiveSpeakers } from '../../pages/speakers/resolvers';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-speaker-wall',
  imports: [NgOptimizedImage, CommonModule],
  template: `
    <section id="speakers" class="min-h-screen bg-gray-100">
      <div class="container mx-auto px-4 py-12">
        <h2
          class="leading-none font-roboto tracking-tight text-4xl sm:text-5xl md:text-7xl xl:text-9xl my-12"
        >
          Speakers<br />
        </h2>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          @for (speaker of speakers; track $index) {
            @if (speaker.imageUrl) {
              <div
                class="speaker-card group relative overflow-hidden rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-xl"
              >
                <div class="aspect-square relative overflow-hidden">
                  <img
                    [ngSrc]="
                      'c_pad,w_600,h_600/v1742481275/' + speaker.imageUrl
                    "
                    [alt]="speaker.name"
                    width="400"
                    height="400"
                    class="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                  <div
                    class="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <h3 class="text-white text-xl font-semibold">
                      {{ speaker.name }}
                    </h3>
                    <p class="text-white/80 text-sm">{{ speaker.jobRole }}</p>
                  </div>
                </div>
                <div
                  class="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-lg transition-colors duration-300"
                ></div>
              </div>
            }
          }
        </div>
      </div>
    </section>
  `,
  styles: [``],
  standalone: true,
})
export class SpeakerWallComponent {
  readonly speakers: Speaker[] = injectActiveSpeakers();
  modal: Element | null = null;
  speakerSelected: WritableSignal<Speaker | null> = signal(null);

  public getImageUrl(imageUrl: string): string {
    const baseUrlToRemove = 'https://res.cloudinary.com/dp1gwjz5w/image/upload';
    return imageUrl.startsWith(baseUrlToRemove)
      ? imageUrl.replace(baseUrlToRemove, '')
      : imageUrl;
  }
}
