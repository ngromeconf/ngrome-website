import { Component } from '@angular/core';
import { HeaderComponent } from '../components/layout/header/header.component';
import { HeroComponent } from '../components/home/hero/hero.component';
import { FeaturesComponent } from '../components/home/features/features.component';
import { VenueComponent } from '../components/home/venue/venue.component';
import { MainSponsorComponent } from '../components/sponsors/main/main-sponsor.component';
import { GoldSponsorComponent } from '../components/sponsors/gold/gold-sponsor.component';
import { SilverSponsorComponent } from '../components/sponsors/silver/silver-sponsor.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-hero />
    <app-features />
    <!-- <app-venue /> -->
    <app-main-sponsor />
    <app-gold-sponsor />
    <app-silver-sponsor />
  `,
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    VenueComponent,
    MainSponsorComponent,
    GoldSponsorComponent,
    SilverSponsorComponent,
  ],
})
export default class HomeComponent {}
