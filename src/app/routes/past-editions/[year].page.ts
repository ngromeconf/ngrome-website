import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';

import { map } from 'rxjs';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: `
    <h1 class="mb-6 font-roboto text-4xl font-bold tracking-tighter text-black md:text-8xl lg:text-6xl">
            Let's see the edition:
            <br class="hidden lg:block" />
            {{ year$ | async }}
          </h1>

    
  `,
})
export default class ProductDetailsPageComponent {
  private readonly route = inject(ActivatedRoute);

  readonly year$ = this.route.paramMap.pipe(
    map((params) => params.get('year'))
  );
}
