import { Component, inject, Signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CardComponent } from './card.component';
import { featureCardInterface } from 'src/app/models/features.model';
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
        <div class="w-full px-16 md:px-8 lg:px-28 ">
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
                    [ngSrc]="item.image"
                    class="grayscale mx-4 transition-all duration-500 ease-in-out hover:grayscale-0 pr-12 mt-6"
                    [width]="item.width"
                    [height]="item.height"
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
