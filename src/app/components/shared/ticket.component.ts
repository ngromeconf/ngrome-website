import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TitoService } from '../../services/tito.service';
import { WindowRef } from '../../services/window.provider';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [TitoService, WindowRef],
  template: `
    <tito-button
      [class]="classList"
      [event]="event"
      buttonLabel="Buy your ticket"
    ></tito-button>
  `,
  styles: ``,
})
export class TicketComponent {
  @Input() classList: string = '';
  @Input() event: string = 'ngrome-events/test-website-conf';

  private tito: any;

  constructor(
    titoService: TitoService,
    winRef: WindowRef,
    private router: Router,
  ) {
    // getting the native window obj

    titoService.lazyLoadTito().subscribe((res) => {
      this.tito = winRef.nativeWindow.tito;

      // this.tito('on:widget:loaded', function (data: any) {
      //   console.log('Tito widget loaded', data);
      // });
      // this.tito('on:registration:started', function (data: any) {});
      this.tito('on:registration:finished', (data: any) => {
        console.log('Tito registration finished', data);
        this.router.navigateByUrl(`/thank-you/${data.reference}/${data.name}`);
      });
    });
  }
}
