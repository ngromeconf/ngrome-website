import { Component } from '@angular/core';
import { HeaderComponent } from '../components/layout/header/header.component';
import { HeroComponent } from '../components/home/hero/hero.component';
import { FeaturesComponent } from '../components/home/features/features.component';
import { VenueComponent } from '../components/home/venue/venue.component';
import { SilverSponsorComponent } from '../components/sponsors/silver/silver-sponsor.component';
import { Observable } from 'rxjs';
import { Sponsors } from '../models/sponsor.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-hero />
    <app-features />
    <!-- <app-venue /> -->
    @if (Sponsors$ | async; as Sponsors) {
      <app-silver-sponsor [sponsors]="Sponsors.Main" type="Main" />
      <app-silver-sponsor [sponsors]="Sponsors.Gold" type="Gold" />
      <app-silver-sponsor [sponsors]="Sponsors.Silver" type="Silver" />
      <app-silver-sponsor [sponsors]="Sponsors.Bronze" type="Bronze" />
    }
  `,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    VenueComponent,
    SilverSponsorComponent,
  ],
})
export default class HomeComponent {
  /**
   * Observable representing the sponsors data.
   * @type {Observable<Sponsors>}
   */
  public Sponsors$: Observable<Sponsors>;

  constructor(private http: HttpClient) {
    console.log('ContentComponent');
    this.getSponsors();
  }
  getSponsors() {
    console.log('getSponsors');
    this.Sponsors$ = this.http.get<Sponsors>('/api/v1/sponsors');
  }
}
