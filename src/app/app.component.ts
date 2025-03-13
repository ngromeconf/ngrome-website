import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <app-header />

    <router-outlet></router-outlet>

    <app-footer />`,
  styles: [
    `
      :host {
        max-width: 1280px;
        margin: 0 auto;
        text-align: center;
      }
    `,
  ],
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
})
export class AppComponent {}
