import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { PageHeadComponent } from '../../components/layout/pages/page-head/page-head.component';
import { WorkshopAttributes } from 'src/app/models/workshop.model';
import { PageImageComponent } from '../../components/layout/pages/main-image/page-image.component';
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
    <div class="flex flex-col" *ngIf="workshop$ | async as workshop">
      <app-page-head
        [title]="workshop.title"
        [subtitle]="workshop.description"
      />

      <app-page-image [image]="workshop.image" />

      <section class="w-full flex flex-col gap-5 p-5">
        <div
          class="w-full sm:max-w-full sm:flex"
          *ngFor="let author of workshop.authors"
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
                workshop.date | date: 'MMMM dd, YYYY'
              }}</span>
            </p>
            <a [href]="workshop.location.mapsLink" target="_blank"
              >Venue:
              <span class="text-blue-600 hover:underline">{{
                workshop.location.name
              }}</span></a
            >
          </div>
          <a
            [href]="workshop.ticket"
            target="_blank"
            class="inline-flex items-center px-8 py-3 text-lg text-white transition-all duration-500 ease-in-out transform bg-green-500 border-2 rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:bg-red focus:ring-2 ring-offset-current ring-offset-2"
          >
            {{ isWorkshopActive(workshop) ? 'RESERVE YOUR SEAT' : 'EXPIRED' }}
          </a>
        </div>
      </div>
    </div>
  `,
})
export default class ProductDetailsPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  readonly workshop$ = this.route.paramMap.pipe(
    map((params) => params.get('slug')),
    map((slug) => {
      if (!slug) {
        this.redirectTo404();
      }
      return slug!;
    }),
    switchMap((slug) => this.getWorkshop(slug)),
  );

  private getWorkshop(slug: string) {
    return this.http.get<WorkshopAttributes[] | null>(`/api/v1/workshops`).pipe(
      map((workshops) => {
        if (!workshops) {
          this.redirectTo404();
        }
        return workshops!;
      }),
      map((workshops) => workshops.find((workshop) => workshop.slug === slug)),
      map((workshop) => {
        if (!workshop) {
          this.redirectTo404();
        }
        return workshop!;
      }),
    );
  }

  private redirectTo404() {
    this.router.navigate(['/404']);
  }

  isWorkshopActive(workshop: WorkshopAttributes) {
    return new Date(workshop.date) > new Date();
  }
}
