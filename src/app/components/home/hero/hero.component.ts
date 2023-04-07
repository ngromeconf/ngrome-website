import { AfterViewInit, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConfettiService } from "./confetti.service";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  providers: [ConfettiService],
  template: `
    <section id="hero-container" class="relative w-full h-screen overflow-hidden bg-no-repeat bg-cover">
      <div class="container relative w-full px-8 pt-32 pb-24 mx-auto lg:px-4 z-20">
        <div
          class="flex flex-col w-full mb-12 text-left lg:text-center items-center "
        >
          <strong
            class="mb-12 text-xs font-semibold tracking-widest uppercase text-slate-500 text-center"
            >The largest Italian Angular Conference is taking place at</strong
          >
          <div class="lg:flex mb-12" id="event-title-container">
            <img class="w-full md:h-96" src="./ngrome-mmxxiii.svg" />
          </div>
          <p
            class="mx-auto text-lg leading-snug text-slate-500 lg:w-1/2 text-center"
          >
            Whether you are a beginner, intermediate, or an expert, this will be
            the best opportunity to learn about the latest trends in the Angular
            world and web technologies.
          </p>
        </div>
        <div class="flex w-full mt-6  justify-center ">
          <div class="mt-3 rounded-lg sm:mt-0">
            <a
              href="https://wicked-templates.gumroad.com/l/monotone-starter"
              class="inline-flex items-center px-8 py-3 text-lg text-white transition-all duration-500 ease-in-out transform bg-red border-2 rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:bg-green-500 focus:ring-2 ring-offset-current ring-offset-2"
            >
              Reserve your seat
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [".bg-patternTop{background-image:url(./patternTop.svg)}"],
})
export class HeroComponent implements AfterViewInit {
  constructor(
    private confettiService: ConfettiService
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => this.confettiService.parallaxOver('#hero-container', { avoid: '#event-title-container' }), 1000)
  }
}
