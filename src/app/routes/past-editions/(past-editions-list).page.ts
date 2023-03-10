import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ListItemComponent } from '../../components/past-editions/list-item/list-item.component';

@Component({
  selector: 'app-past-editions-list',
  standalone: true,
  template: `
    <section *ngFor="let item of list">
      
        <app-list-item [item]="item" />
      
    </section>
  `,

  imports: [RouterOutlet, ListItemComponent, CommonModule],
})
export default class PastEditionListComponent {
  public list = [2019, 2020, 2021, 2022];
}
