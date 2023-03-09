import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/layout/header/header.component';

@Component({
  selector: 'app-past-editions',
  standalone: true,
  template: `
    <app-header />
    <h2>NGROME PAST EDITIONS</h2>

    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet, HeaderComponent],
})
export default class PastEditionsComponent {}
