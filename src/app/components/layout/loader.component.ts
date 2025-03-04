import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (loaderService.isLoading()) {
      <div
        class="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm"
      >
        <div class="flex flex-col items-center">
          <div
            class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"
          ></div>
          <p class="mt-4 text-white font-medium">Loading...</p>
        </div>
      </div>
    }
  `,
  styles: ``,
})
export class LoaderComponent {
  constructor(public loaderService: LoaderService) {}
}
