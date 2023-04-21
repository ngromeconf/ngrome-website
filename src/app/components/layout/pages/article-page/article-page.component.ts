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
          class="title mb-8 font-sans uppercase text-4xl font-bold tracking-tight text-black md:text-6xl"
        >
          {{ title }}
        </h2>

        <div class="content">
          <article>
            <div *ngFor="let article of articles">
              <h3 *ngIf="article?.title">
                {{ article.title }}
              </h3>

              <p *ngFor="let paragraph of article?.paragraphs">
                {{ paragraph }}
              </p>
              <ul *ngIf="article?.list">
                <li *ngFor="let item of article.list">{{ item }}</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>`,
  styles: [
    `
      p {
        font-size: 17px;
        line-height: 1.6;
        margin-bottom: 32px;
      }

      h3 {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 12px;
        line-height: 1;
      }

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
        font-size: 17px;
        line-height: 1.6;
        margin-bottom: 32px;
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
