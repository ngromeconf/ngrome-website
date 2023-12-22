import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SocialShareComponent } from '../components/social-share/social-share.component';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  template: `<!-- component -->
    <div class="relative flex justify-center items-center">
      <div
        class="2xl:container 2xl:mx-auto px-4 md:px-28 flex justify-center items-center"
      >
        <div
          class="w-96 md:w-auto relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36"
        >
          <div role="banner">
            <img [ngSrc]="imageSrc" width="1200" height="630" alt="thank-you" />
          </div>
          <div class="mt-12">
            <h1
              role="main"
              class="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800"
            >
              See you at NGROME MMXXIV!
            </h1>
          </div>
          <div class="mt">
            <p
              class="mt-6 sm:w-80 text-base leading-7 text-center text-gray-800"
            >
              Remember to assign the ticket, and share it on social!
            </p>
            <app-social-share
              [ticketLink]="ticketLink"
              message="https://twitter.com/intent/tweet?text=%F0%9F%A5%B3%20I%20will%20join%20%40ngromeconf%21%20See%20you%20there%3F%0A%F0%9F%91%87%20Get%20your%20ticket%21%20%0A%0Ahttps://myticket.ngrome.io/ticket%3Fname%3Dluciano%26surname%3Dmurruni"
            />
          </div>
        </div>
      </div>
    </div>
    <script>
      let menu = document.getElementById('menu');
      const showMenu = (flag) => {
        menu.classList.toggle('hidden');
      };
    </script>`,
  styles: ``,
  imports: [NgOptimizedImage, SocialShareComponent],
})
export default class ThankYouComponent implements OnInit {
  public email: string;
  public name: string;
  public ticketRef: string;
  public imageSrc: string;
  public ticketLink: string;
  public message: string =
    '%F0%9F%A5%B3%20I%20will%20join%20%40ngromeconf%21%20See%20you%20there%3F%0A%F0%9F%91%87%20Get%20your%20ticket%21%20%0A%0A';
  constructor(private route: ActivatedRoute) {
    // console.log('thank-you-constructor:',route.snapshot.data);
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log('thank-you-params:', params);
      this.name = params['name'];
      this.ticketRef = params['reference'];
      this.imageSrc = `https://myticket.ngrome.io/api/og?fullname=${this.name}&ticketref=${this.ticketRef}`;
      this.ticketLink = `https://myticket.ngrome.io/og?name=${this.name}&ticketref=${this.ticketRef}`;
      this.message += this.ticketLink;
    });
  }
}
