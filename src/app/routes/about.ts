import { Component } from '@angular/core';
import { HeaderComponent } from "../components/layout/header/header.component";
import { FooterComponent } from "../components/layout/footer/footer.component";

@Component({
    selector: 'app-about',
    standalone: true,
    template: `
    <app-header />

    

    <app-footer />
  `,
    imports: [HeaderComponent, FooterComponent]
})
export default class AboutComponent {

}
