import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="h-screen bg-right bg-cover lg:bg-top"
      style="
        background-image: url({{image}});
      "
    ></section>
  `,
  styles: [
  ]
})
export class PageImageComponent {

  @Input() image:string = '';

}
