import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  template: ` <router-outlet /> `,
  imports: [RouterOutlet],
})
export default class BlogPage {}
