import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { WindowRef } from '../../services/window.provider';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    @if (eventID && ticketID) {
      <div
        id="tito-button-{{ ticketID }}"
        class="inline-flex items-center px-2 py-2 bg-green-600 hover:bg-red-ngrome text-white text-xs font-medium rounded-md"
        (click)="mountTitoButton()"
      ></div>
    } @else if (label) {
      <a
        [href]="destinationUrl"
        class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-slate-800 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
      >
        <span
          class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-ngrome group-hover:h-full"
        ></span>
        <span
          class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            class="w-5 h-5 text-red-ngrome"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
            />
          </svg>
        </span>
        <span
          class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            class="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
            />
          </svg>
        </span>
        <span
          class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white"
          >{{ label }}</span
        >
      </a>
    }
  `,
  styles: ``,
})
export class ButtonComponent implements OnInit {
  @Input() destinationUrl: string | undefined;
  @Input() eventID: string | undefined;
  @Input() ticketID: string | undefined;
  @Input() label: string | undefined;

  private tito: any;

  constructor(private winRef: WindowRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.mountTitoButton();
  }

  mountTitoButton() {
    this.tito = this.winRef.nativeWindow.tito;

    if (this.tito && this.eventID && this.ticketID) {
      console.log('Mounting Tito button', this.ticketID, this.eventID);
      this.tito('button.mount', {
        el: `#tito-button-${this.ticketID}`,
        event: this.eventID,
        releases: this.ticketID,
        buttonLabel: 'REGISTER',
      });
    } else {
      console.error('Tito button not mounted');
      setTimeout(() => {
        this.mountTitoButton();
      }, 1000);
    }
  }
}
