import { Component } from '@angular/core';
import { UrlCFP } from '../shared/constant';

@Component({
  selector: 'app-call-for-paper',
  standalone: true,
  imports: [],
  template: `
    <!-- Container for demo purpose -->
    <div class="w-full" id="callForPaper">
      <!-- Section: Design Block -->
      <section class="">
        <div
          class="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://res.cloudinary.com/dp1gwjz5w/image/upload/c_crop,ar_16:9/v1740606841/website-assets/cfp-cover_lxffkb.jpg')] h-[500px]"
        >
          <div
            class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed"
          >
            <div class="flex h-full items-center justify-center">
              <div class="px-6 text-center text-white md:px-12">
                <h2
                  class="mb-12 text-5xl font-bold leading-tight tracking-tight"
                >
                  The CFP is Open! <br /><span>Deadline to submit is </span
                  ><br />March 4, 2025.
                </h2>
                <a
                  class="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  [href]="urlCFP"
                  target="_blank"
                >
                  Submit Your Talk Today!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->
    </div>
    <!-- Container for demo purpose -->
  `,
  styles: ``,
})
export class CallForPaperComponent {
  urlCFP: string = UrlCFP;
}
