import { Component } from '@angular/core';
import { HeaderComponent } from "../components/layout/header/header.component";
import { HeroComponent } from "../components/home/hero/hero.component";
import { FeaturesComponent } from '../components/home/features/features.component';

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
    <app-header />
    <app-hero />
    <app-features />
  `,
    imports: [HeaderComponent, HeroComponent, FeaturesComponent]
})
export default class HomeComponent {

}
