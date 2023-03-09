import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-past-editions-list',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2>NGROME Editions List</h2>

    <ul>
      <li><a href="/past-editions/2019">2019</a></li>
      <li><a href="/past-editions/2020">2020</a></li>
      <li><a href="/past-editions/2021">2021</a></li>
      <li><a href="/past-editions/2022">2022</a></li>
    </ul>
  `,
})
export default class PastEditionListComponent {}
