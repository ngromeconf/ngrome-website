import { Component, OnInit, Signal, inject } from '@angular/core';
import { HeaderComponent } from '../components/layout/header/header.component';
import { HeroComponent } from '../components/home/hero/hero.component';
import { FeaturesComponent } from '../components/home/features/features.component';
import { VenueComponent } from '../components/home/venue/venue.component';
import { SilverSponsorComponent } from '../components/sponsors/silver/silver-sponsor.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { Sponsors } from '../models/sponsor.model';

import { CommonModule } from '@angular/common';
import { RouteMeta } from '@analogjs/router';
import { TicketsComponent } from '../components/home/tickets.component';
import { postMetaPageResolver, postTitleResolver } from './resolvers';
import { CallForPaperComponent } from '../components/home/call-for-paper.component';
import { HttpClient } from '@angular/common/http';

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
    @if (sponsors$(); as Sponsors) {
      <!-- <app-silver-sponsor [sponsors]="Sponsors.Main" type="Main" /> -->
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
export default class HomeComponent {
  
  public sponsors$: Signal<Sponsors>  = this.getSponsors();

  getSponsors(): Signal<Sponsors> {
    const _http = inject(HttpClient);
    return toSignal(_http.get<Sponsors>(`/api/v1/sponsors`), { initialValue: {} });
  }
}
