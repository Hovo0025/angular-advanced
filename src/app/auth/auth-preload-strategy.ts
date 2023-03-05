import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthPreloadStrategy implements PreloadingStrategy {
  constructor(private readonly authService: AuthService) {}

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return this.authService
      .isLoggedIn()
      .pipe(switchMap((isLoggedIn) => (isLoggedIn ? fn() : of(null))));
  }
}
