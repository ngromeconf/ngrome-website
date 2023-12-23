import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SocialShareComponent } from '../components/social-share/social-share.component';
import { RouteMeta } from '@analogjs/router';
import { postMetaResolver } from './resolvers';
import { WindowRef } from '../services/window.provider';

export const routeMeta: RouteMeta = {
  meta: postMetaResolver,
};

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [NgOptimizedImage, SocialShareComponent],
  providers: [WindowRef],
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
            <app-social-share [pageUrl]="ticketLink" [message]="message" />
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
})
export default class ThankYouComponent implements OnInit {
  public email: string;
  public name: string;
  public ticketRef: string;
  public imageSrc: string;
  public ticketLink: string;
  public message: string =
    '%F0%9F%A5%B3%20I%20will%20join%20%40ngromeconf%21%20See%20you%20there%3F%0A%F0%9F%91%87%20Get%20your%20ticket%21%20%0A%0A';
  constructor(
    private route: ActivatedRoute,
    private winref: WindowRef,
  ) {}
  ngOnInit() {
    this.ticketLink = this.winref.nativeWindow.location.href;

    this.route.params.subscribe((params: Params) => {
      this.name = encodeURIComponent(params['name']);
      this.ticketRef = encodeURIComponent(params['reference']);
      this.imageSrc = `https://myticket.ngrome.io/api/og?fullname=${this.name}&ticketref=${this.ticketRef}`;
      //this.ticketLink = `https://myticket.ngrome.io/ticket?fullname=${this.name}&ticketref=${this.ticketRef}`;
      this.message += this.ticketLink;
    });
  }
}
