import { Injectable, Inject } from '@angular/core';
import { ReplaySubject, Observable, forkJoin } from 'rxjs';
import { DOCUMENT } from '@angular/common';

const TITO_URL = 'https://js.tito.io/v2/with/inline,';
const TITO_DEV_MODE = 'development_mode,';
const TITO_TEST_MODE = 'test_mode,';

@Injectable()
export class TitoService {
  private _loadedLibraries: { [url: string]: ReplaySubject<any> } = {};

  constructor(@Inject(DOCUMENT) private readonly document: any) {
    console.log('TitoService Constructor');
  }

  lazyLoadTito(): Observable<any> {
    return forkJoin([
      this.loadScript(TITO_URL + TITO_DEV_MODE + TITO_TEST_MODE),
    ]);
  }

  private loadScript(url: string): Observable<any> {
    if (this._loadedLibraries[url]) {
      return this._loadedLibraries[url].asObservable();
    }

    this._loadedLibraries[url] = new ReplaySubject();

    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;
    script.onload = () => {
      this._loadedLibraries[url].next(true);
      this._loadedLibraries[url].complete();
    };

    this.document.body.appendChild(script);

    return this._loadedLibraries[url].asObservable();
  }
}
