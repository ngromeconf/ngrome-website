import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../components/layout/header/header.component';
import { HeroComponent } from '../components/home/hero/hero.component';
import { FeaturesComponent } from '../components/home/features/features.component';
import { VenueComponent } from '../components/home/venue/venue.component';
import { SilverSponsorComponent } from '../components/sponsors/silver/silver-sponsor.component';
import { Observable } from 'rxjs';
import { Sponsors } from '../models/sponsor.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouteMeta } from '@analogjs/router';
import { TicketsComponent } from '../components/home/tickets.component';
import {  postMetaPageResolver, postTitleResolver } from './resolvers';
import { CallForPaperComponent } from '../components/home/call-for-paper.component';

export const routeMeta: RouteMeta = {
  meta: postMetaPageResolver,
  data: { slug: 'index' },
  title: postTitleResolver,
};

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-hero />
    <app-features />
    <!-- <app-venue /> -->
    <app-tickets />
    <app-call-for-paper id="ticket-section" />
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
    TicketsComponent,
    CallForPaperComponent,
  ],
})
export default class HomeComponent implements OnInit {
  /**
   * Observable representing the sponsors data.
   * @type {Observable<Sponsors>}
   */
  public Sponsors$: Observable<Sponsors>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getSponsors();
  }

  getSponsors() {
    this.Sponsors$ = this.http.get<Sponsors>(`/api/v1/sponsors`);
  }
}
