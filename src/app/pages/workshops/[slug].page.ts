import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SocialShareComponent } from '../../components/social-share/social-share.component';
import { RouteMeta } from '@analogjs/router';
import { postMetaSlugResolver, postTitleResolver } from './resolvers';
import { injectContent } from '@analogjs/content';
import { map } from 'rxjs';
import { WorkshopAttributes } from 'src/app/models/workshop.model';

export const routeMeta: RouteMeta = {
  meta: postMetaSlugResolver,
  title: postTitleResolver,
};

@Component({
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, DatePipe, SocialShareComponent],
  template: ` <div class="flex flex-col" *ngIf="workshop$ | async as workshop">
    <div
      class="sm:flex px-5 pb-6 pt-10 mx-auto overflow-hidden max-w-7xl md:flex-row lg:px-20 w-full items-center"
    >
      <div
        class="sm:w-[50%] w-full mx-auto text-center lg:flex-grow md:items-start md:text-left lg:max-w-3xl"
        style="word-wrap: break-word;"
      >
        <h1
          class="font-sans uppercase text-4xl font-bold tracking-tight text-black md:text-6xl"
        >
          {{ workshop.title }}
        </h1>
      </div>
      <div
        class="h-screen max-h-96 bg-cover bg-center sm:w-[50%] w-full inline-flex items-center"
      >
        <img
          [src]="workshop.image"
          alt="workshop.title"
          [title]="workshop.title"
        />
      </div>
    </div>

    <section class="container max-w-7xl w-full flex flex-col gap-5 p-5 mx-auto">
      @for (author of workshop.authors; track $index) {
        <div class="w-full sm:max-w-full sm:flex">
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
              @if (author.link) {
                <a
                  [href]="author.link"
                  target="_blank"
                  class="text-blue-600 hover:underline"
                  >Read more about {{ author.name }}</a
                >
              }
            </div>
          </div>
        </div>
      }
    </section>
    <section
      class="container max-w-7xl w-full flex flex-col gap-5 lg:px-0 px-5 mx-auto md:items-start text-left lg:max-w-3xl"
    >
      <div
        class="text-lg md:text-left leading-snug text-slate-500"
        [innerHTML]="workshop.description"
      ></div>
    </section>
    @if (isWorkshopActive(workshop)) {
      <app-social-share [message]="socialMessage(workshop)" class="py-5" />
    }
    <div class="sticky bottom-0 w-full bg-gray-50 px-20 py-5 border-t">
      <div
        class="flex flex-col items-center md:items-start md:flex-row gap-5 justify-between max-w-3xl mx-auto"
      >
        <div class="flex flex-col gap-4 text-center md:text-left">
          <p>
            When:
            <span class="font-semibold"
              >{{ workshop.date | date: 'MMMM dd, YYYY' }}
              @if (workshop?.time) {
                |
                {{ workshop.time }}
              }
            </span>
          </p>
          @if (workshop.location?.mapsLink) {
            <a
              [href]="workshop.location?.mapsLink"
              [target]="
                workshop.location?.mapsLink?.includes('http')
                  ? '_target'
                  : '_self'
              "
              >Venue:
              <span class="text-blue-600 hover:underline">{{
                workshop.location?.name
              }}</span></a
            >
          } @else {
            Venue: {{ workshop.location?.name }}
          }
        </div>
        @if (isWorkshopActive(workshop)) {
          <a
            [href]="workshop.ticket"
            target="_blank"
            class="cursor-pointer inline-flex items-center px-8 py-3 text-sm lg:text-lg text-white transition-all duration-500 ease-in-out transform bg-green-600 border-2 rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:bg-red focus:ring-2 ring-offset-current ring-offset-2"
          >
            RESERVE YOUR SEAT
          </a>
        } @else if (workshop?.ticket) {
          <a
            class="cursor-no-drop inline-flex items-center px-8 py-3 text-sm lg:text-lg text-white transition-all duration-500 ease-in-out transform bg-gray-300 focus:outline-none border-2 rounded-lg md:mb-2 lg:mb-0 focus:ring-2 ring-offset-current ring-offset-2"
            >EXPIRED</a
          >
        }
      </div>
    </div>
  </div>`,
})
export default class ProductDetailsPageComponent {
  readonly workshop$ = injectContent<WorkshopAttributes>({
    param: 'slug',
    subdirectory: 'workshops',
  }).pipe(map((workshop) => workshop.attributes as WorkshopAttributes));

  isWorkshopActive(workshop: WorkshopAttributes): boolean {
    return new Date(workshop.date) > new Date();
  }

  socialMessage(workshop: WorkshopAttributes): string {
    return encodeURIComponent(`${workshop.socialDescription}
      ${window.location.href}`);
  }
}
