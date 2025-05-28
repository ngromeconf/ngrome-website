import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, TeamComponent],
  template: `
    <div class="relative py-16 overflow-hidden bg-white">
      <div class="relative px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-3xl">
        <div class="mx-auto text-lg">
          <blockquote class="mt-8 text-xl leading-8 text-slate-500">
            <span class="font-serif text-6xl text-black">O</span>ur mission goes
            beyond code – we're building bridges. We connect Italian and
            International developers to the global Angular ecosystem, fostering
            relationships that span cities, countries, and continents. Through
            NGRome, we're cultivating a tight-knit network of professionals who
            share knowledge, inspire innovation, and grow together. NGRome is
            more than just an event; it's the heart of Italy's Angular
            community. <br />As the largest international Angular conference in
            the country, NGRome serves as a vibrant hub where ideas flourish and
            developers from every corner of Italy and Europe converge. <br />

            Born from the passion of devoted JavaScript enthusiasts and Angular
            aficionados, our community is the driving force behind this
            extraordinary gathering. At NGRome, you'll find more than just
            technical sessions. You'll discover a welcoming family of
            like-minded individuals, all eager to learn, share, and have fun. We
            believe in the power of community to elevate skills, spark
            creativity, and create lasting friendships. <br />Join us in this
            exciting journey as we shape the future of Angular development, one
            connection at a time.
          </blockquote>
        </div>
        <div class="mx-auto mt-24 prose prose-lg text-slate-500 prose-indigo">
          <h3 class="mt-12 font-serif text-2xl font-bold leading-6 text-black">
            STAY INFORMED
          </h3>
          <p class="mt-6 text-lg text-slate-500">
            Follow us on
            <a href="https://twitter.com/ngromeconf" target="_blank">Twitter</a
            >,
            <a href="https://www.linkedin.com/company/ngrome" target="_blank"
              >Linkedin</a
            >,
            <a href="https://www.youtube.com/@ngromeconf4784" target="_blank"
              >Youtube</a
            >
            and
            <a
              href="https://www.instagram.com/ngromeconf/?hl=it"
              target="_blank"
              >Instagram</a
            >!
          </p>
        </div>
      </div>
      <app-team></app-team>
    </div>
  `,
  styles: [],
})
export class ContentComponent {}
