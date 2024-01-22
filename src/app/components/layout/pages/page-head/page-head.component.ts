import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialShareComponent } from '../../../social-share/social-share.component';

@Component({
  selector: 'app-page-head',
  standalone: true,
  template: `
    <section>
      <div
        class="container flex flex-col items-center px-5 py-24 mx-auto overflow-hidden max-w-7xl md:flex-row lg:px-20"
      >
        <div
          class="flex flex-col items-center mx-auto text-center lg:flex-grow md:items-start md:text-left lg:max-w-3xl"
        >
          <h1
            class="mb-8 font-sans uppercase text-4xl font-bold tracking-tight text-black md:text-6xl"
          >
            {{ title }}
          </h1>

          <p
            class="text-lg md:text-left leading-snug text-slate-500"
            [innerHtml]="subtitle"
          ></p>

          <!-- <app-social-share /> -->
        </div>
      </div>
    </section>
  `,
  styles: [],
  imports: [CommonModule, SocialShareComponent],
})
export class PageHeadComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
