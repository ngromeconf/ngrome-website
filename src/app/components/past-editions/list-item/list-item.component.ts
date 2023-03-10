import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="container flex flex-col items-center px-5 py-24 mx-auto max-w-7xl md:flex-row lg:px-20"
    >
      <div class="w-full mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
        <img
          class="object-cover object-center shadow-monotone rounded-2xl"
          alt="hero"
          src="https://images.unsplash.com/photo-1599824701954-d1d141704de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        />
      </div>
      <div
        class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left"
      >
        <h1
          class="mb-8 font-roboto text-4xl font-bold tracking-tight text-black md:text-6xl"
        >
          {{ item }}
        </h1>
        <div class="flex items-center mt-6">
          <div class="flex-shrink-0">
            <a href="#">
              <span class="sr-only">Antonio Sandiego </span>
              <img
                class="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1599824701954-d1d141704de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt=""
              />
            </a>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-slate-500">
              <a href="#" class="hover:underline">By Antonio Sandiego </a> in
              <a href="#" class="text-black underline hover:text-blue-600"
                >Careers
              </a>
            </p>
            <div class="flex space-x-1 text-sm text-slate-500">
              <time datetime="2020-03-16"> Mar 16, 2020 </time>
              <span aria-hidden="true"> &middot; </span>
              <span> 6 min read </span>
            </div>
          </div>
        </div>
        <span class="z-0 mt-8 lg:inline-flex lg:space-x-4">
          <button
            type="button"
            class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium rounded border text-slate-500 bg-white hover:bg-trueGray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-4 h-4 mr-2"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                fill="currentColor"
              />
            </svg>
            <span>Tweet</span>
          </button>

          <button
            type="button"
            class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium rounded border text-slate-500 bg-white hover:bg-trueGray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-4 h-4 mr-2"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                fill="currentColor"
              />
            </svg>
            <span>Tweet</span>
          </button>

          <button
            type="button"
            class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium rounded border text-slate-500 bg-white hover:bg-trueGray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-4 h-4 mr-2"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"
                fill="currentColor"
              />
            </svg>
            <span>Copy</span>
          </button>
        </span>
      </div>
    </div>
  `,
  styles: [],
})
export class ListItemComponent {
  @Input() item: number = 1999; // decorate the property with @Input()
}
