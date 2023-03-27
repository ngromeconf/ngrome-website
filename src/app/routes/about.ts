import { Component } from '@angular/core';
import { MainAboutComponent } from '../components/about/main-about/main-about.component';
import { MainImageComponent } from '../components/about/main-image/main-image.component';
import { MainContentComponent } from "../components/about/main-content/main-content.component";

@Component({
    selector: 'app-about',
    standalone: true,
    template: `
    <app-main-about />
    <app-main-image />
    <app-main-content />
  `,
    imports: [
        MainAboutComponent,
        MainImageComponent,
        MainContentComponent
    ]
})
export default class AboutComponent {}
