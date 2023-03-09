import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main
      class="h-screen w-full flex flex-col justify-center items-center bg-red-500"
    >
      <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div class="bg-green-500 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button class="mt-5">
        <a
          class="relative inline-block text-sm font-medium text-white group active:text-orange-500 focus:outline-none focus:ring"
        >
          <span
            class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
          ></span>

          <span
            class="relative block px-8 py-3 bg-red-500 hover:bg-green-500 border border-current"
          >
            <a href="/">Go Home</a>
          </span>
        </a>
      </button>
    </main>
  `,
})
export default class PageNotFoundComponent {}
