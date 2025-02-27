import {
  AsyncPipe,
  CommonModule,
  DatePipe,
  NgFor,
  NgIf,
} from '@angular/common';

import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { SocialShareComponent } from '../../components/social-share/social-share.component';
import { MarkdownComponent } from '@analogjs/content';
import { WorkshopAttributes } from 'src/app/models/workshop.model';
import { TitoService } from '../../services/tito.service';
import { WindowRef } from '../../services/window.provider';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-detail-workshop',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    NgIf,
    NgFor,
    AsyncPipe,
    DatePipe,
    SocialShareComponent,
    MarkdownComponent,
  ],
  providers: [TitoService, WindowRef],
  template: ` <div class="flex flex-col" *ngIf="workshop">
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
          {{ workshop.attributes.title }}
        </h1>
      </div>
      <div
        class="h-screen max-h-96 bg-cover bg-center sm:w-[50%] w-full inline-flex items-center"
      >
        <img
          [src]="workshop.attributes.image"
          alt="workshop.title"
          [title]="workshop.attributes.title"
        />
      </div>
    </div>

    <section class="container max-w-7xl w-full flex flex-col gap-5 p-5 mx-auto">
      @for (author of workshop.attributes.authors; track $index) {
        <div class="w-full sm:max-w-full sm:flex">
          <div
            class="h-48 sm:h-auto sm:w-48 flex-none bg-no-repeat bg-contain sm:bg-cover  bg-top sm:bg-center rounded-tl sm:rounded-l overflow-hidden border-b border-t border-l border-r sm:border-r-0 border-gray-400"
            style="background-image: url('{{ author.imageUrl }}')"
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
              @if (author.links?.other || author.links?.linkedIn) {
                <a
                  [href]="author.links?.other || author.links?.linkedIn"
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
      class="bg-gradient-to-r from-red-ngrome to-indigo-700 py-12 px-4 sm:px-6 md:py-16 md:px-8"
    >
      @if (isWorkshopActive(workshop.attributes)) {
        <tito-widget
          [event]="workshop.attributes.ticketSlug"
          [releases]="workshop.attributes.ticket"
        ></tito-widget>
      }
    </section>

    <section
      class="container max-w-7xl w-full flex flex-col gap-5 lg:px-0 px-5 mx-auto md:items-start text-left lg:max-w-3xl"
    >
      <analog-markdown [content]="workshop.content"></analog-markdown>
    </section>

    @if (isWorkshopActive(workshop.attributes)) {
      <app-social-share
        [message]="socialMessage(workshop.attributes)"
        class="py-5"
      />
    }
    <div class="sticky bottom-0 w-full bg-gray-50 px-20 py-5 border-t">
      <div
        class="flex flex-col items-center md:items-start md:flex-row gap-5 justify-between max-w-3xl mx-auto"
      >
        <div class="flex flex-col gap-4 text-center md:text-left">
          <p>
            When:
            <span class="font-semibold"
              >{{ workshop.attributes.date | date: 'MMMM dd, YYYY' }}
              @if (workshop?.attributes?.time) {
                |
                {{ workshop.attributes.time }}
              }
            </span>
          </p>
          @if (workshop.attributes.location?.mapsLink) {
            <a
              [href]="workshop.attributes.location?.mapsLink"
              [target]="
                workshop.attributes.location?.mapsLink?.includes('http')
                  ? '_target'
                  : '_self'
              "
              >Venue:
              <span class="text-blue-600 hover:underline">{{
                workshop.attributes.location?.name
              }}</span></a
            >
          } @else {
            Venue: {{ workshop.attributes.location?.name }}
          }
        </div>
        @if (isWorkshopActive(workshop.attributes)) {
          @if (workshop.attributes?.soldOut) {
            <span
              class="text-md
                        font-extrabold
                        text-transparent
                        bg-clip-text
                        bg-gradient-to-r
                        from-red-ngrome
                        to-pink-600
                        rotate-12
                        border-2
                        border-red-ngrome"
            >
              SOLD OUT
            </span>
          } @else {
            <a
              [href]="workshop.attributes.ticket"
              target="_blank"
              class="cursor-pointer inline-flex items-center px-8 py-3 text-sm lg:text-lg text-white transition-all duration-500 ease-in-out transform bg-green-600 border-2 rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:bg-red focus:ring-2 ring-offset-current ring-offset-2"
            >
              RESERVE YOUR SEAT
            </a>
          }
        } @else if (workshop?.attributes?.ticket) {
          <a
            class="cursor-no-drop inline-flex items-center px-8 py-3 text-sm lg:text-lg text-white transition-all duration-500 ease-in-out transform bg-gray-300 focus:outline-none border-2 rounded-lg md:mb-2 lg:mb-0 focus:ring-2 ring-offset-current ring-offset-2"
            >EXPIRED</a
          >
        }
      </div>
    </div>
  </div>`,
})
export default class WorkshopDetailComponent {
  private tito: any;

  @Input() workshop: {
    content: string;
    attributes: WorkshopAttributes;
  };

  constructor(
    private titoService: TitoService,
    private winRef: WindowRef,
    private router: Router,
  ) {
    console.log('constructor', this.workshop);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: ', this.workshop);
    if (this.workshop.attributes) {
      this.titoService.lazyLoadTito().subscribe((res) => {
        this.tito = this.winRef.nativeWindow.tito;

        // this.tito('on:widget:loaded', function (data: any) {
        //   console.log('Tito widget loaded', data);
        // });
        // this.tito('on:registration:started', function (data: any) {});
        this.tito('on:registration:finished', (data: any) => {
          console.log('Tito registration finished', data);
          this.router.navigateByUrl(
            `/thank-you/${data.reference}/${data.name}`,
          );
        });
      });
    }
  }

  isWorkshopActive(workshop: WorkshopAttributes): boolean {
    console.log('isWorkshopActive');
    return new Date(workshop.date) > new Date();
  }

  socialMessage(workshop: WorkshopAttributes): string {
    return encodeURIComponent(`${workshop.socialDescription}
      ${window.location.href}`);
  }
}
