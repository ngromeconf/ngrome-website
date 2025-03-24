import { Component } from '@angular/core';
import { PageHeadComponent } from '../components/layout/pages/page-head/page-head.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-media-kit',
  standalone: true,
  imports: [PageHeadComponent, NgOptimizedImage],
  providers: [],
  template: `
    <app-page-head [title]="'MEDIA KIT'" [subtitle]="subtitle" />
    <div class="max-w-screen-xl p-6 mx-auto">
      <div class="grid grid-cols-1 justify-center gap-5">
        <div class="max-w-full px-10 my-4 py-6 bg-white rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <span class="font-light text-gray-600"
              >Social post example to use:</span
            >
          </div>
          <div class="mt-2 text-left">
            <h1 class="text-2xl text-gray-700 font-bold hover:text-gray-600">
              Twitter example post
            </h1>
            <p class="mt-2 text-gray-600">
              Angular + Rome = YES, PLEASE! 🇮🇹🍕 <br />
              Partnering with &#x40;ngromeconf, Italy's biggest Angular bash!
              <br /><br />
              Get ready for coding, connections, and eat the Italian best food!
              🇮🇹🍕
              <br /><br />🎟️👉 https://ngrome.io <br />#NGRome #NGRomeMMXXV
            </p>
            <p class="mt-2 text-gray-600">
              <img
                ngSrc="/v1742854380/2025/NGRome_social_preview_1_1_gdylq4.jpg"
                width="617"
                height="323"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- LinkedIn -->
    <div class="max-w-screen-xl p-6 mx-auto">
      <div class="grid grid-cols-1 justify-center gap-5">
        <div class="max-w-full px-10 my-4 py-6 bg-white rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <span class="font-light text-gray-600">Social post</span>
          </div>
          <div class="mt-2 text-left">
            <h1 class="text-2xl text-gray-700 font-bold hover:text-gray-600">
              LinkedIn / Instagram post
            </h1>
            <p class="mt-2 text-gray-600">
              Angular in Rome? YES, PLEASE! 🇮🇹🍕 <br /><br />We're SO pumped to
              be partnering with NGRome, Italy's biggest Angular bash! 🎉 <br />
              Get ready for coding, connections, and eat the Italian best food.
              🇮🇹🍕
              <br />
              Think of it: top-notch Angular workshops and Conference + the
              magic of Rome. What's not to love? 😉 <br /><br />
              Grab your tickets and join the fun! 🎟️👉
              <a href="https://ngrome.io/#TicketSection">ngrome.io</a
              ><br /><br />
              #NGRome #Angular #Rome #TechEvent #WebDev #PartnerLove
              #CodingAdventures
            </p>
            <div class="max-w-screen-xl p-6 mx-auto">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="w-full">
                  <img
                    ngSrc="/v1742854380/2025/NGRome_social_preview_1_1_gdylq4.jpg"
                    width="617"
                    height="323"
                    class="w-full h-auto rounded-lg shadow-md"
                    alt="Conference preview 1"
                  />
                </div>
                <div class="w-full">
                  <img
                    ngSrc="/v1742854380/2025/IG_POST_rqehgg.jpg"
                    width="617"
                    height="323"
                    class="w-full h-auto rounded-lg shadow-md"
                    alt="Conference preview 2"
                  />
                </div>
                <div class="w-full">
                  <img
                    ngSrc="/v1742854382/2025/IG_STORY_zm5i1q.jpg"
                    width="617"
                    height="323"
                    class="w-full h-auto rounded-lg shadow-md"
                    alt="Conference preview 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Image Banner -->

    <!-- NGROME Logos -->
    <div class="max-w-screen-xl p-6 mx-auto">
      <div class="grid grid-cols-1 justify-center gap-5">
        <div class="max-w-full px-10 my-4 py-6 bg-white rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <span class="font-light text-gray-600">NGRome logos</span>
          </div>
          <div class="mt-2 text-left">
            <h1 class="text-2xl text-gray-700 font-bold hover:text-gray-600">
              Add our logo in your post or communities page
            </h1>
          </div>
          <div class="grid grid-cols-3 grid-flow-row justify-center gap-4 p-12">
            <div>
              <img
                ngSrc="v1741331127/website-assets/ngrome-shield_rbvclr.svg"
                width="200"
                height="100"
              />
            </div>
            <div>
              <img
                ngSrc="v1741331289/website-assets/ngrome-vertical_lwa2zg.svg"
                width="300"
                height="100"
              />
            </div>
            <div>
              <img
                ngSrc="c_scale,w_300/v1741331352/website-assets/ngrome-full_sz0bsb.svg"
                width="300"
                height="66"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export default class MediaKitComponent {
  public subtitle = `Thank you for helping us promote NGRome!<br> On this page, you'll find essential information, helpful links, and pre-written copy to make sharing about the conference easy. Let's make NGRome a resounding success together!`;
}
