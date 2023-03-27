import { Component } from '@angular/core';
import { HeaderComponent } from "../components/layout/header/header.component";

@Component({
    selector: 'app-sponsor',
    standalone: true,
    template: `
    <app-header />
    
  `,
    imports: [HeaderComponent]
})
export default class SponsorComponent {

}
