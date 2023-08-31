import { Component } from '@angular/core';
import { HeaderComponent } from '../components/layout/header/header.component';
import { HeroComponent } from '../components/home/hero/hero.component';
import { FeaturesComponent } from '../components/home/features/features.component';
import { VenueComponent } from '../components/home/venue/venue.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-hero />
    <app-features />
    <!-- <app-venue /> -->
  `,
  imports: [HeaderComponent, HeroComponent, FeaturesComponent, VenueComponent],
})
export default class HomeComponent {}
