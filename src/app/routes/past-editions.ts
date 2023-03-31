import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/layout/header/header.component';
import { FooterComponent } from '../components/layout/footer/footer.component';

@Component({
  selector: 'app-past-editions',
  standalone: true,
  template: `
    <section
      class="relative w-full h-screen bg-center bg-no-repeat bg-cover bg-patternTop d-contents"
    >
      <router-outlet></router-outlet>
    </section>
  `,
  styles: [
    `
      .d-contents {
        display: contents;
      }
    `,
  ],
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
})
export default class PastEditionsComponent {}
