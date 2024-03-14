import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-venue-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="howitworks">
      <div class="container items-center px-5 py-24 mx-auto lg:px-24">
        <div class="flex flex-col w-full mb-6 text-left lg:text-center">
          <h2 class="mb-6 font-roboto text-4xl font-bold tracking-tighter text-black md:text-8xl lg:text-6xl">
            Awesome location
            <br class="hidden lg:block" />
            For a special day.
          </h2>
          <p class="mx-auto text-lg leading-snug text-slate-500 lg:w-1/2">Tailwind CSS templates with a wicked design.</p>
        </div>
        <div class="grid flex-wrap items-center justify-between w-full grid-cols-1 pt-20 mx-auto lg:grid-cols-2">
          <div class="max-w-lg">
            <div>
              <ol role="list" class="overflow-hidden">
                <li class="relative pb-10">
                  <div class="relative flex items-start group">
                    <div class="flex items-center h-9">
                      <span class="relative z-10 flex items-center justify-center w-8 h-8 text-white bg-black rounded-full group-hover:bg-red-500"> 1 </span>
                    </div>
                    <span class="flex flex-col min-w-0 ml-4 space-y-4">
                      <h3 class="font-roboto text-2xl font-semibold text-black">Historical neighborhood</h3>
                      <p class="mt-6 text-lg text-slate-500">
                        Do more meaningful work by dividing your time into intervals and by taking regular breaks to get more work or studying done. .
                      </p>
                    </span>
                  </div>
                </li>
                <li class="relative pb-10">
                  <div class="relative flex items-start group" aria-current="step">
                    <div class="flex items-center h-9">
                      <span class="relative z-10 flex items-center justify-center w-8 h-8 text-white bg-black rounded-full group-hover:bg-red-500"> 2 </span>
                    </div>
                    <span class="flex flex-col min-w-0 ml-4 space-y-4">
                      <h3 class="font-roboto text-2xl font-semibold text-black">Awesome ...</h3>
                      <p class="mt-6 text-lg text-slate-500">
                        Block Websites that distract and make you unproductive. Adding sites to the block list will block sites when the work timer is on.
                      </p>
                    </span>
                  </div>
                </li>
                <li class="relative pb-10">
                  <div class="relative flex items-start group">
                    <div class="flex items-center h-9">
                      <span class="relative z-10 flex items-center justify-center w-8 h-8 text-white bg-black rounded-full group-hover:bg-red-500"> 3 </span>
                    </div>
                    <span class="flex flex-col min-w-0 ml-4 space-y-4">
                      <h3 class="font-roboto text-2xl font-semibold text-black">More space for sponsors</h3>
                      <p class="mt-6 text-lg text-slate-500">
                        App introduces a point-based reward system to make work a bit more fun and also remind you every action has a price.
                      </p>
                    </span>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div>
            <img class="h-auto p-10 mt-12 rounded-lg md:mt-0" src="/location/piantina-removebg.png" alt="step" />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export default class VenueHomeComponent {

}
