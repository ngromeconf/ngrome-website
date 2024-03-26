import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  WritableSignal,
  signal,
} from '@angular/core';
import { PageHeadComponent } from '../../components/layout/pages/page-head/page-head.component';
import { injectActiveSpeakers } from './resolvers';
import { Speaker } from 'src/app/models/speaker.model';
import { SpeakerCardComponent } from '../../components/speakers/speaker-card.component';
import { SpeakerModalComponent } from '../../components/speakers/speaker-modal.component';
import { UrlCFP } from '../../components/shared/constant';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  title: 'NG Rome - Speakers',
};

@Component({
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    DatePipe,
    PageHeadComponent,
    SpeakerCardComponent,
    SpeakerModalComponent,
  ],
  template: `
    <div class="flex flex-col">
      <app-page-head [title]="'Our speakers'" [subtitle]="''" />
      <section
        class="pb-24 container max-w-7xl w-full flex flex-col gap-5 p-5 mx-auto"
      >
        <div class="grid md:grid-cols-3  sm:grid-cols-1  xl:grid-cols-4 gap-8">
          @for (speaker of speakers; track $index) {
            <speaker-card
              [speaker]="speaker"
              ($showSpeaker)="speakerDetail($event)"
            ></speaker-card>
          }
        </div>
      </section>
    </div>
    <speaker-modal
      [speaker]="speakerSelected()"
      ($closeModal)="closeModal()"
    ></speaker-modal>
  `,
})
export default class SpeakerComponent implements AfterViewInit {
  readonly speakers: Speaker[] = injectActiveSpeakers();
  modal: Element | null = null;
  body = document.querySelector('body');
  speakerSelected: WritableSignal<Speaker | null> = signal(null);

  ngAfterViewInit() {
    this.modal = document.querySelector('.modal-speaker');
  }

  callForPapers() {
    window.open(UrlCFP, '_blank');
  }

  speakerDetail(speaker: Speaker) {
    if (speaker.slug !== 'cfp') {
      this.modal?.classList.remove('hidden');
      this.modal?.classList.add('show');

      this.speakerSelected.set(speaker);
      if (this.body) this.body.style.overflowY = 'hidden';
    } else {
      this.callForPapers();
    }
  }

  closeModal() {
    this.speakerSelected.set(null);
    this.modal?.classList.add('hidden');
    this.modal?.classList.remove('show');

    if (this.body) this.body.style.overflowY = 'auto';
  }
}
