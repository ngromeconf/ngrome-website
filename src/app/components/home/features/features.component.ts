import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { featureCardInterface } from 'src/app/models/features.model';

@Component({
  selector: 'app-features',
  standalone: true,
  template: `
    <section id="features">
      <div class="container px-5 py-32 mx-auto lg:px-24">
        <div class="flex flex-col w-full mb-10 text-left lg:text-center">
          <h2
            class="mb-6 font-roboto text-4xl font-bold tracking-tighter text-black md:text-8xl lg:text-6xl"
          >
            7 Years of conference
            <br class="hidden lg:block" />
            International speakers
            <br class="hidden lg:block" />
          </h2>
          <span class="text-4l text-red-ngrome md:text-6xl lg:text-4xl"
            >Workshops days and Communities around you!</span
          >
        </div>
        <div
          class="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 bg-white "
        >
          @for (card of cards; track $index) {
            <app-card [details]="card"></app-card>
          }
        </div>
      </div>
    </section>
    <section class="pt-8 overflow-hidden">
      <video
        autoplay
        muted
        loop
        playsinline
        class="w-full h-full mx-auto rounded"
        poster="./video-poster.jpg"
        preload="none"
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/ngrome-website.appspot.com/o/assets%2F2022-conf-highlights-no-audio-final-2.mp4?alt=media&token=a5f0f01f-a589-4deb-b636-ef4395d30af5"
          type="video/mp4"
        />
        <source
          src="https://firebasestorage.googleapis.com/v0/b/ngrome-website.appspot.com/o/assets%2F2022-conf-highlights-no-audio-final.webm?alt=media&token=14a1542a-dec0-4270-8a3c-6e17bb223296"
          type="video/webm"
        />
      </video>
    </section>
  `,
  styles: [],
  imports: [CommonModule, CardComponent],
})
export class FeaturesComponent {
  public cards: featureCardInterface[] = [
    {
      title: 'Attendee',
      description:
        'Attend for valuable insights, knowledge sharing, and extensive networking opportunities with industry experts and peers.',
      button: 'Get your ticket!',
      link: '#TicketSection',
    },
    {
      title: 'Communities',
      description:
        'Connect with like-minded people, welcome new members, and foster collaboration among developers and leaders within the community.',
      button: 'Contact us!',
      link: 'about',
    },
    {
      title: 'Sponsor',
      description:
        'Gain visibility, boost employer branding, and showcase your products or services to a targeted audience. Join us as a sponsor!',
      button: 'Become a sponsor!',
      link: 'sponsors',
    },
    {
      title: 'Speakers',
      description:
        'Join inspiring speakers who connect with the audience and foster networking, creating a dynamic atmosphere at our event.',
      button: 'Apply to speak!',
      link: '#callForPaper',
    },
  ];
}
