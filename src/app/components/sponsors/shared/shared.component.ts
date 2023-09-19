import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [CommonModule],
  template: `<p>shared works!</p>`,
  styleUrls: ['./shared.component.css'],
})
export class SharedComponent {}
