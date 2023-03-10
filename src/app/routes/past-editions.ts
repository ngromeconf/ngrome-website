import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/layout/header/header.component';

@Component({
  selector: 'app-past-editions',
  standalone: true,
  template: `
    <app-header />

    <section
      class="relative w-full h-screen bg-center bg-no-repeat bg-cover bg-patternTop"
    >
      
        <router-outlet></router-outlet>
      
    </section>
  `,
  imports: [RouterOutlet, HeaderComponent],
})
export default class PastEditionsComponent {}
