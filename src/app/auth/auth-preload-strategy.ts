import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { PreloadingStrategy, Route } from '@angular/router';
import { delay, map, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthPreloadStrategy implements PreloadingStrategy {
  constructor(private readonly authService: AuthService) {}

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    const preloadModule = (ms = 0) =>
      of(true).pipe(
        delay(ms * 1000),
        map(() => of(fn()))
      );
    if (route.data && route.data['preload']) {
      return preloadModule(route.data['loadAfterSeconds']);
    }
    return of(null);
  }

  // preload(route: Route, fn: () => Observable<any>): Observable<any> {
  //   const preloadModule = (time = 0) =>
  //     of(true).pipe(
  //       delay(time * 1000),
  //       switchMap(() => of(fn()))
  //     );
  //   // time > 0 ? delay(time * 1000).pipe(switchMap(() => of(fn()))) : of(fn());
  //
  //   if (route.data && route.data['preload']) {
  //     return preloadModule(route.data['loadAfterSeconds'] || 0);
  //   }
  //   return of(null);
  // }

  // preload(route: Route, fn: () => Observable<any>): Observable<any> {
  // const loadRoute = (delay: number) =>
  //   delay > 0 ? timer(delay * 1000).pipe(map(() => fn())) : fn();
  // if (route.data && route.data['preload']) {
  //   const delay = route.data['loadAfterSeconds'] ? route.data['loadAfterSeconds'] : 0;
  //   return loadRoute(delay);
  // }
  // return of(null);
  // }

  // preload(route: Route, load: () => Observable<any>): Observable<any> {
  //   console.log(route.data);
  //   return of(true).pipe(
  //     delay(5000),
  //     switchMap(() => of(load()))
  //   );
  //
  //   // return this.authService
  //   //   .isLoggedIn()
  //   //   .pipe(switchMap((isLoggedIn) => (isLoggedIn ? fn() : of(null))));
  // }
}
