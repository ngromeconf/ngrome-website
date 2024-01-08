import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="h-screen max-h-96 bg-right bg-cover bg-center"
      style="background-image: url(&quot;/{{ image }}&quot;);"
    ></section>
  `,
  styles: [],
})
export class PageImageComponent {
  @Input() image: string = '';
}
