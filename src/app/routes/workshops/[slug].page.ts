import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeadComponent } from '../../components/layout/pages/page-head/page-head.component';
import { PageImageComponent } from '../../components/layout/pages/main-image/page-image.component';
import { RouteMeta } from '@analogjs/router';
import { postMetaSlugResolver, postTitleResolver } from './resolvers';
import { ContentFile, injectContent } from '@analogjs/content';
import { map } from 'rxjs';
import { WorkshopAttributes } from 'src/app/models/workshop.model';

export const routeMeta: RouteMeta = {
  meta: postMetaSlugResolver,
  title: postTitleResolver,
};

@Component({
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    DatePipe,
    PageHeadComponent,
    PageImageComponent,
  ],
  template: `
    <div class="flex flex-col" *ngIf="workshop$| async as workshop">
      <app-page-head
        [title]="workshop.attributes.title "
        [subtitle]="workshop.attributes.description"
      />

      <app-page-image [image]="workshop.attributes.image || ''" />

      <section class="w-full flex flex-col gap-5 p-5">
        <div
          class="w-full sm:max-w-full sm:flex"
          *ngFor="let author of workshop.attributes?.authors"
        >
          <div
            class="h-48 sm:h-auto sm:w-48 flex-none bg-no-repeat bg-contain sm:bg-cover  bg-top sm:bg-center rounded-tl sm:rounded-l overflow-hidden border-b border-t border-l border-r sm:border-r-0 border-gray-400"
            style="background-image: url('{{ author.image }}')"
            [title]="author.name"
          ></div>
          <div
            class="w-full border-r border-b border-l border-gray-400 sm:border-l-0 sm:border-t sm:border-gray-400 bg-white rounded-b sm:rounded-b-none sm:rounded-r p-4 flex flex-col justify-between leading-normal"
          >
            <div class="mb-8 text-left">
              <p class=" text-gray-600 flex items-center">Author</p>
              <div class="text-gray-900 font-bold text-xl mb-2">
                {{ author.name }}
              </div>
              <p class="text-gray-700 text-base">
                {{ author.biography }}
              </p>
              <a
                *ngIf="author.link"
                [href]="author.link"
                target="_blank"
                class="text-blue-600 hover:underline"
                >Read more about {{ author.name }}</a
              >
            </div>
          </div>
        </div>
      </section>

      <div
        class="sticky bottom-0 w-full bg-white px-20 py-5 rounded-t-lg shadow-xl"
      >
        <div
          class="flex flex-col items-center md:items-start md:flex-row gap-5 justify-between max-w-3xl mx-auto"
        >
          <div class="flex flex-col gap-4 text-center md:text-left">
            <p>
              When:
              <span class="font-semibold">{{
                workshop.attributes.date | date : 'MMMM dd, YYYY'
              }}</span>
            </p>
            @if (workshop.attributes?.location?.mapsLink) {
            <a [href]="workshop.attributes?.location.mapsLink" target="_blank"
              >Venue:
              <span class="text-blue-600 hover:underline">{{
                workshop.attributes?.location.name
              }}</span></a
            >
            } @else { Venue: {{ workshop.attributes?.location.name }}
            }
          </div>
          <a
            [href]="workshop.attributes?.ticket"
            target="_blank"
            class="inline-flex items-center px-8 py-3 text-sm lg:text-lg text-white transition-all duration-500 ease-in-out transform bg-green-600 border-2 rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:bg-red focus:ring-2 ring-offset-current ring-offset-2"
          >
            {{ isWorkshopActive(workshop.attributes) ? 'RESERVE YOUR SEAT' : 'EXPIRED' }}
          </a>
        </div>
      </div>
    </div>`,
})
export default class ProductDetailsPageComponent {
  readonly workshop$ = injectContent<WorkshopAttributes>().pipe(map((workshop: ContentFile<WorkshopAttributes | Record<string, never>>) => {
    return {
      ...workshop, attributes: {
        ...workshop.attributes, authors: JSON.parse(workshop.attributes?.authors as unknown as string), location: JSON.parse(workshop.attributes?.location as unknown as string)
      } as WorkshopAttributes
    }
  }));

  isWorkshopActive(workshop: WorkshopAttributes) {
    return new Date(workshop.date) > new Date();
  }
}
