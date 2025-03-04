import { Injectable, Inject, inject } from '@angular/core';
import { ReplaySubject, Observable, forkJoin } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';

const TITO_URL = 'https://js.tito.io/v2/with/inline,';
//const TITO_DEV_MODE = 'development_mode,';
const TITO_DEV_MODE = '';
//const TITO_TEST_MODE = 'test_mode,';
const TITO_TEST_MODE = '';
const TITO_KEY = 'public_TobWnmMJc48u15ZAYXxG';

@Injectable({
  providedIn: 'root',
})
export class TitoService {
  private _loadedLibraries: { [url: string]: ReplaySubject<any> } = {};

  constructor(
    @Inject(DOCUMENT) private readonly document: any,
    private http: HttpClient,
  ) {}

  lazyLoadTito(): Observable<any> {
    return forkJoin([
      this.loadScript(TITO_URL + TITO_TEST_MODE + TITO_DEV_MODE),
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

  public getConferenceReleases(): Observable<any> {
    return this.http.get(
      'https://api.tito.io/v3/ngrome-events/ngrome-conf-mmxxiv/releases',
      {
        headers: { Authorization: `Token token=${TITO_KEY}` },
      },
    );
  }
  public helloTito(): Observable<any> {
    return this.http.get('https://api.tito.io/v3/hello', {
      headers: { Authorization: `Token token=${TITO_KEY}` },
    });
  }
}
