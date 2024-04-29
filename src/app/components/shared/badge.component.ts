import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { CLASS_COLOR_BADGE } from './constant';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [NgClass, NgIf],
  template: `<div
    *ngIf="title"
    [ngClass]="
      classColorBadge[color] +
      ' w-content text-xs font-medium  px-2.5 py-0.5 rounded-full break-all nowrap '
    "
  >
    {{ title }}
  </div>`,
  styles: [
    `
      .break-all {
        word-break: break-all;
      }
      .nowrap {
        text-wrap: nowrap;
      }
    `,
  ],
})
export class BadgeComponent {
  @Input() color: string;
  @Input() title: string | undefined;

  classColorBadge = CLASS_COLOR_BADGE;
}
