import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article-page',
  template: ` <section>
    <div
      class="container flex flex-col items-center px-5 py-24 mx-auto overflow-hidden max-w-7xl md:flex-row lg:px-20"
    >
      <div
        class="relative flex flex-col items-center mx-auto text-center lg:flex-grow md:items-start md:text-left lg:max-w-3xl"
      >
        <h2
         class="title font-sans mb-6 uppercase text-4xl font-bold tracking-tight text-black md:text-6xl"
        >
          {{ title }}
        </h2>

        <div class="content">
          <article>
            <div *ngFor="let article of articles" class="mb-6">
              <h3
                class="font-bold font-sans mb-2 md:text-2xl lg:text-4xl text-black tracking-tight uppercase"
                *ngIf="article?.title"
              >
                {{ article.title }}
              </h3>

              <p
                class="mx-auto mb-4 text-lg leading-snug text-slate-500"
                *ngFor="let paragraph of article?.paragraphs"
              >
                {{ paragraph }}
              </p>
              <ul *ngIf="article?.list" class="mb-4">
                <li
                  class="mx-auto text-lg leading-snug text-slate-500"
                  *ngFor="let item of article.list"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>`,
  styles: [
    `
      .title {
        padding-top: 20px;
      }

      .title:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 10px;
        width: 90px;
        background-color: #dd0031;
        margin-left: -20px;
      }

      ul {
        list-style: unset;
        list-style-position: inside;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule],
})
export class ArticlePageComponent {
  @Input() title: string = '';
  @Input() articles: Article[] = [];
}
