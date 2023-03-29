import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialShareComponent } from "../../social-share/social-share.component";

@Component({
    selector: 'app-main-about',
    standalone: true,
    template: `
    <section>
      <div
        class="container flex flex-col items-center px-5 py-24 mx-auto overflow-hidden max-w-7xl md:flex-row lg:px-20"
      >
        <div
          class="flex flex-col items-center mx-auto text-center lg:flex-grow md:items-start md:text-left lg:max-w-3xl"
        >
          <h1
            class="mb-8 font-serif text-4xl font-bold tracking-tight text-black md:text-6xl"
          >
            About NGRome & The TEAM
          </h1>

          <p class="mx-auto text-lg leading-snug text-slate-500">
            NG-Rome is a non-profit community conference run by a team of volunteers.
We are all active members of the tech community, and run or contribute to various free local meetups, workshops, and education initiatives.
          </p>
       
          <app-social-share />
        </div>
      </div>
    </section>
  `,
    styles: [],
    imports: [CommonModule, SocialShareComponent]
})
export class MainAboutComponent {}
