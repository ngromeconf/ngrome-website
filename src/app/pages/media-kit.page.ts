import { Component } from '@angular/core';
import { PageHeadComponent } from '../components/layout/pages/page-head/page-head.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-media-kit',
  standalone: true,
  imports: [PageHeadComponent, NgOptimizedImage],
  providers: [],
  template: `
    <app-page-head
      [title]="'MEDIA KIT'"
      [subtitle]="'Partners copy kit, feel free to add some personalization'"
    />
    <div class="max-w-screen-xl p-6 mx-auto">
      <div class="grid grid-cols-1 justify-center gap-5">
        <div class="max-w-full px-10 my-4 py-6 bg-white rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <span class="font-light text-gray-600">Social post</span>
          </div>
          <div class="mt-2 text-left">
            <h1 class="text-2xl text-gray-700 font-bold hover:text-gray-600">
              Twitter example post
            </h1>
            <p class="mt-2 text-gray-600">
              🎉 Get ready for a new season of &commat;ngromeconf The biggest
              Angular conference in Italy!<br />
              🗓️ You will get 2 days of coding sessions, networking with
              professionals and one full day of workshops delivered by proven
              experts and developers worldwide.<br />
              <br />🎟️👉 https://ngrome.io <br />#ngrome
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
              LinkedIn example post
            </h1>
            <p class="mt-2 text-gray-600">
              🎉 Get ready for a new season of &commat;ngromeconf - The biggest
              Angular conference in Italy! <br />🗓️ You will get 2 days of
              coding sessions, networking with professionals and one full day of
              workshops about building great web applications using Angular -
              delivered by proven experts and developers worldwide.
              <br /><br />🎟️ Tickets available here 👉 https://ngrome.io
              <br /><br />#ngrome
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Image Banner -->
    <div class="max-w-screen-xl p-6 mx-auto">
      <div class="grid grid-cols-1 justify-center gap-5">
        <div class="max-w-full px-10 my-4 py-6 bg-white rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <span class="font-light text-gray-600">Image banner</span>
          </div>
          <div class="mt-2 text-left">
            <h1 class="text-2xl text-gray-700 font-bold hover:text-gray-600">
              Banner image to include in your post
            </h1>
            <p class="mt-2 text-gray-600">
              <img src="/photo/ngrome-cover-mmxxiv-social.jpg" />
            </p>
          </div>
        </div>
      </div>
    </div>
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
              <img ngSrc="./ngrome-b&w-shield.svg" width="200" height="100" />
            </div>
            <div>
              <img ngSrc="./ngrome-red-shield.svg" width="200" height="100" />
            </div>
            <div>
              <img ngSrc="./ngrome-white-shield.svg" width="200" height="100" />
            </div>
            <div>
              <img ngSrc="./ngrome-logo-red.svg" width="300" height="100" />
            </div>
            <div>
              <img ngSrc="./ngrome-full.svg" width="300" height="300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export default class MediaKitComponent {}
