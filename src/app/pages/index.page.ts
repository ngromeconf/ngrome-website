import { Component, OnInit, Signal, inject } from '@angular/core';
import { HeaderComponent } from '../components/layout/header/header.component';
import { HeroComponent } from '../components/home/hero/hero.component';
import { FeaturesComponent } from '../components/home/features/features.component';
import { SponsorComponent } from '../components/sponsors/sponsor.component';
import { Sponsors } from '../models/sponsor.model';
import { CommonModule } from '@angular/common';
import { RouteMeta } from '@analogjs/router';
import { TicketsComponent } from '../components/home/tickets.component';
import { postMetaPageResolver, postTitleResolver } from './resolvers';
import { CallForPaperComponent } from '../components/home/call-for-paper.component';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

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
    <!--  <app-call-for-paper id="ticket-section" /> -->
    @if (sponsors$(); as Sponsors) {
      <app-sponsor [sponsors]="Sponsors.Main" [itemsPerRow]="1" type="Main" />
      <app-sponsor [sponsors]="Sponsors.Gold" [itemsPerRow]="3" type="Gold" />
      <app-sponsor
        [sponsors]="Sponsors.Silver"
        [itemsPerRow]="3"
        type="Silver"
      />
      <app-sponsor
        [sponsors]="Sponsors.Bronze"
        [itemsPerRow]="3"
        type="Bronze"
      />
    }
  `,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    SponsorComponent,
    TicketsComponent,
    CallForPaperComponent,
  ],
})
export default class HomeComponent {
  public sponsors$: Signal<Sponsors> = this.getSponsors();

  getSponsors(): Signal<Sponsors> {
    const _http = inject(HttpClient);
    return toSignal(_http.get<Sponsors>(`/api/v1/sponsors`), {
      initialValue: {},
    });
  }
}
