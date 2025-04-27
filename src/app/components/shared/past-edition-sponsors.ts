import { Component, inject, Signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Sponsors } from 'src/app/models/sponsor.model';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-past-edition-sponsors',
  standalone: true,
  template: `
    <div class="px-5 w-full flex flex-wrap content-center mx-auto lg:px-24">
      <section
        class="py-14 w-full md:py-24 flex flex-wrap content-center bg-white "
      >
        <div class="w-full ">
          <div class="grid grid-cols-12 mb-6 md:mb-12">
            <div class="col-span-12 text-center">
              <h2 class="text-[25px] leading-none font-bold">
                Sponsors who believed in us!!
              </h2>
            </div>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-6">
            @if (sponsors$(); as Sponsors) {
              @for (item of Sponsors.PastEdition; track $index) {
                <a [href]="item.url ? item.url : '/sponsors'" target="_blank">
                  <img
                    [alt]="item.name"
                    [title]="item.name"
                    [ngSrc]="'ngrome-sponsors/' + item.image"
                    class="w-5/12 flex-shrink-0 object-cover object-center h-auto mx-auto grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
                    width="400"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                    sizes="(max-width: 640px) 100vw,
                        (max-width: 768px) 50vw,
                        (max-width: 1024px) 33vw,
                        (max-width: 1280px) 25vw,
                        (max-width: 1536px) 20vw,
                        20vw"
                  />
                </a>
              }
            }
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [],
  imports: [CommonModule, NgOptimizedImage],
})
export class PastEditionSponsorsComponent {
  public sponsors$: Signal<Sponsors> = this.getSponsors();
  private getSponsors(): Signal<Sponsors> {
    const _http = inject(HttpClient);
    return toSignal(_http.get<Sponsors>(`/api/v1/sponsors`), {
      initialValue: {},
    });
  }
}
