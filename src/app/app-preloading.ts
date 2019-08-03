import { PreloadingStrategy, Route } from '@angular/router';

import { Observable, of, timer } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

export class AppPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        return route.data && route.data.preload
            ? timer(200).pipe(mergeMap(() => load() ))
            : of(null);
      }
}