import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ToggleService {
  private toggleSubject$ = new BehaviorSubject<boolean>(false);
  public toggle$ = this.toggleSubject$.asObservable();

  updateData(data:boolean) {
    this.toggleSubject$.next(data);
  }
  
}
