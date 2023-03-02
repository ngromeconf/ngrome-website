import { Component } from '@angular/core';
import { HeaderComponent } from "../components/layout/header/header.component";
import { HeroComponent } from "../components/home/hero/hero.component";

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
    <app-header />
    <app-hero />
  `,
    imports: [HeaderComponent, HeroComponent]
})
export default class HomeComponent {

}
