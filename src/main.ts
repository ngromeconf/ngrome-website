import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideFileRouter } from '@analogjs/router';

import { AppComponent } from './app/app.component';
import { FooterComponent } from './app/components/layout/footer/footer.component';

bootstrapApplication(AppComponent, {
  providers: [provideFileRouter()],
});

bootstrapApplication(FooterComponent, {
  providers: [provideFileRouter()],
});
