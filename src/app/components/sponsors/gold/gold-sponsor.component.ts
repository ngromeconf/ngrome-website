import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorInterface } from '../content/content.component';

@Component({
  selector: 'app-gold-sponsor',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="flex mt-12   items-center justify-center">
    <div class="w-full px-10 mx-auto bg-white">
      <div class=" mx-auto space-y-6 ">
        <!-- Component starts here -->
        <h2 class="flex flex-row flex-nowrap items-center my-8">
          <span
            class="flex-grow block border-t border-red"
            aria-hidden="true"
            role="presentation"
          ></span>
          <span
            class="flex-none block mx-4 px-4 py-2.5 text-xs leading-none font-medium uppercase bg-yellow-400
 text-white"
          >
            GOLD SPONSOR
          </span>
          <span
            class="flex-grow block border-t border-red"
            aria-hidden="true"
            role="presentation"
          ></span>
        </h2>
        <!-- Component ends here -->
        <div class="flex flex-center -m-4 items-center">
          <div
            class="w-full p-4 items-center"
            *ngFor="let item of goldSponsors"
          >
            <div class="p-6">
              <a
                class="inline-flex items-center mb-2"
                [href]="item.url"
                target="_blank"
              >
                <img
                  [alt]="item.name"
                  [src]="item.image"
                  class="flex-shrink-0 object-cover object-center w-full h-25"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
  styleUrls: ['./gold.component.css'],
})
export class GoldSponsorComponent {
  public goldSponsors: SponsorInterface[] = [
    {
      name: 'Key Partner',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2FKeyPartner_newLogo.svg?alt=media&token=76585b8d-05e5-4d53-95df-d2217d87e9e7',
      url: '',
    },
    {
      name: 'ICT Group',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2FICTGROUP-logo.svg?alt=media&token=c38f7bea-cc9e-4533-bb4b-7b7b9911d316',
      url: '',
    },
  ];
}