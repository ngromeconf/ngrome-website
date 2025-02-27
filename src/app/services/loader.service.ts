import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loading = signal(false);

  showLoader(): void {
    this.loading.set(true);
  }

  hideLoader(): void {
    this.loading.set(false);
  }

  isLoading() {
    return this.loading;
  }
}
