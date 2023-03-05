import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoadGuard implements CanLoad {
  constructor(private readonly authService: AuthService, private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService
      .isLoggedIn()
      .pipe(map((isLoggedIn: boolean) => isLoggedIn || this.router.createUrlTree([''])));
  }
}
