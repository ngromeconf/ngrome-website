import {
  AsyncPipe,
  CommonModule,
  DatePipe,
  NgFor,
  NgIf,
  NgOptimizedImage,
} from '@angular/common';

import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { SocialShareComponent } from '../../components/social-share/social-share.component';
import { MarkdownComponent } from '@analogjs/content';
import { WorkshopAttributes } from 'src/app/models/workshop.model';
import { TitoService } from '../../services/tito.service';
import { WindowRef } from '../../services/window.provider';
import { Router } from '@angular/router';
import { PageHeadComponent } from '../layout/pages/page-head/page-head.component';
import { PageImageComponent } from '../layout/pages/main-image/page-image.component';

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
    PageHeadComponent,
    PageImageComponent,
    NgOptimizedImage,
  ],
  providers: [TitoService, WindowRef],
  template: ` <app-page-head
      [title]="workshop.attributes.title"
      subtitle="{{ workshop.attributes.date | date: 'MMMM dd, YYYY' }} / {{
        workshop.attributes.time
      }}"
    />

    <div class="flex flex-col" *ngIf="workshop">
      <section
        class="container max-w-7xl w-full flex flex-col gap-5 lg:px-0 px-5 mx-auto md:items-start text-left lg:max-w-3xl"
      >
        <analog-markdown [content]="workshop.content"></analog-markdown>
      </section>

      <section class="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div class="container mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Expert Trainers
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Our workshops are led by industry professionals with years of
              experience in their respective fields.
            </p>
          </div>

          <div class="flex flex-wrap justify-center gap-8">
            @for (author of workshop.attributes.authors; track $index) {
              <div
                class="h-50 w-9/12 md:w-5/12 xl:w-3/12 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div class="aspect-square relative overflow-hidden">
                  <img
                    [ngSrc]="author.imageUrl || '/assets/placeholder.svg'"
                    [alt]="author.name"
                    width="300"
                    height="300"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="p-5">
                  <h3 class="text-xl font-bold">{{ author.name }}</h3>
                  <p class="text-sm text-gray-500 mb-3">{{ author.jobRole }}</p>
                  <p class="text-gray-700">{{ author.biography }}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      @if (workshop.attributes.ticket && workshop.attributes.ticketSlug) {
        <section
          class="bg-gradient-to-r from-red-ngrome to-indigo-700 py-12 px-4 sm:px-6 md:py-16 md:px-8"
          id="TicketSection"
          #titoWidget
        ></section>
      }

      @if (isWorkshopActive(workshop.attributes)) {
        <app-social-share
          [message]="socialMessage(workshop.attributes)"
          class="py-5"
        />
      }
      <div class="sticky bottom-0 w-full bg-gray-50 px-10 py-5 border-t">
        <div
          class="flex flex-col items-center md:items-start md:flex-row gap-3 justify-between max-w-3xl mx-auto"
        >
          <div class="flex flex-col gap-2 text-center md:text-left">
            <p>
              When:
              <span class="font-semibold"
                >{{ workshop.attributes.date | date: 'MMMM dd, YYYY' }}
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
              >
                <span class="text-blue-600 hover:underline">{{
                  workshop.attributes.location?.name
                }}</span></a
              >
            } @else {
              Venue: {{ workshop.attributes.location?.name }}
            }
          </div>
          @if (isWorkshopActive(workshop.attributes)) {
            @if (
              workshop.attributes?.ticket && !workshop.attributes?.ticketSlug
            ) {
              <a
                [href]="workshop.attributes?.ticket"
                class="cursor-pointer inline-flex items-center px-8 py-3 text-sm lg:text-lg text-white transition-all duration-500 ease-in-out transform bg-green-600 border-2 rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:bg-red focus:ring-2 ring-offset-current ring-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESERVE YOUR SEAT
              </a>
            } @else if (workshop.attributes?.soldOut) {
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
                (click)="onGoToTicket()"
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
  @ViewChild('titoWidget') ticketArea: ElementRef<HTMLInputElement>;

  @Input() workshop: {
    content: string;
    attributes: WorkshopAttributes;
  };

  constructor(
    private titoService: TitoService,
    private winRef: WindowRef,
    private router: Router,
  ) {}

  ngAfterViewInit() {
    console.log('ngAfterViewInit: workshop: ', this.workshop);
    this.appendTitoWidget();
    this.loadTito();
  }

  loadTito() {
    if (this.workshop.attributes) {
      this.titoService.lazyLoadTito().subscribe((res) => {
        this.tito = this.winRef.nativeWindow.tito;
        this.tito('on:registration:finished', (data: any) => {
          console.log('Tito registration finished', data);
          this.router.navigateByUrl(
            `/thank-you/${data.reference}/${data.name}`,
          );
        });
      });
    }
  }

  appendTitoWidget() {
    console.log('appendTitoWidget: DOM: ', this.ticketArea);
    if (this.ticketArea && this.workshop.attributes.ticketSlug) {
      this.ticketArea.nativeElement.innerHTML = `
      <tito-widget
        event="${this.workshop.attributes.ticketSlug}"
        releases="${this.workshop.attributes.ticket}"
      ></tito-widget>
      `;
    }
  }
  isWorkshopActive(workshop: WorkshopAttributes): boolean {
    return new Date(workshop.date) > new Date();
  }

  socialMessage(workshop: WorkshopAttributes): string {
    return encodeURIComponent(`${workshop.socialDescription}
      ${window.location.href}`);
  }

  onGoToTicket() {
    this.router.navigate([], { fragment: 'TicketSection' });
  }
}
