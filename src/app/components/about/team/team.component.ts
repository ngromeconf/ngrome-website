import { Component } from '@angular/core';
import { CONTRIBUTORS, Contributor } from './team.model';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from '../../shared/social-links.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, SocialLinksComponent],
  template: `
    <section class="bg-gray-900 mt-24">
      <div class="max-w-7xl mx-auto px-8 py-4 space-y-16">
        <h2 class="font-heading font-bold text-white text-4xl text-center">
          Team/Contributors
        </h2>

        <div class="grid md:grid-cols-3 gap-16">
          <div *ngFor="let contributor of contributors" class="space-y-4">
            <span class="space-y-4">
              <img
                [src]="contributor.imageUrl"
                class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
              />
              <h3 class="font-medium text-white text-2xl text-center">
                {{ contributor.name }}
              </h3>
            </span>

            <app-social-links [links]="contributor"></app-social-links>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TeamComponent {
  public contributors: Contributor[] = CONTRIBUTORS;
}
