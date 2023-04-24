import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeadComponent } from '../../layout/pages/page-head/page-head.component';
import { PageImageComponent } from '../../layout/pages/main-image/page-image.component';
import { Page } from 'src/app/models/page.model';


@Component({
  selector: 'app-content',
  standalone: true,
  template: `
    <app-page-head [title]="dataPage?.title" [subtitle]="dataPage?.subtitle" />
  
    <div *ngFor="let item of dataPage?.stack">
      <div *ngFor="let image of item.image">
        <app-page-image [image]="image.url" />
      </div>

      <div class="relative py-16 overflow-hidden bg-white">
        <div class="relative px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-3xl">
          <div class="mx-auto text-lg">
            <blockquote class="mt-8 text-xl leading-8 text-slate-500">
              <!-- <span class="font-serif text-6xl text-black"> NG</span>Rome event -->
              {{item.text}}
            </blockquote>
          </div>
          <div class="mx-auto mt-24 prose prose-lg text-slate-500 prose-indigo">
            <h3
              class="mt-12 font-serif text-2xl font-bold leading-6 text-black"
            >
              STAY INFORMED
            </h3>
            <p class="mt-6 text-lg text-slate-500">
              Follow us on Twitter and Instagram!
            </p>

            <blockquote class="twitter-tweet">
              <p lang="en" dir="ltr">
                A taste of
                <a
                  href="https://twitter.com/hashtag/NGRomeMMXIX?src=hash&amp;ref_src=twsrc%5Etfw"
                  >#NGRomeMMXIX</a
                >
                🇮🇹
                <a href="https://t.co/9gaoN3AJer">pic.twitter.com/9gaoN3AJer</a>
              </p>
              &mdash; NGRomeConf (@ngromeconf)
              <a
                href="https://twitter.com/ngromeconf/status/1131316168487317505?ref_src=twsrc%5Etfw"
                >May 22, 2019</a
              >
            </blockquote>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
  imports: [CommonModule, PageHeadComponent, PageImageComponent],
})
export class ContentComponent {
  @Input() dataPage: Page | null = null;
}
