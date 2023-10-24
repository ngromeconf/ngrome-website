import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHeadComponent } from '../components/layout/pages/page-head/page-head.component';

@Component({
  standalone: true,
  template: `
    <app-page-head
      [title]="'Workshops'"
      [subtitle]="'Level up your skills during a full-day hands-on workshop.'"
    />

    <router-outlet />
  `,
  imports: [RouterOutlet, PageHeadComponent],
})
export default class BlogPage {}
