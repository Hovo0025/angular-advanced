import { Injectable } from '@angular/core';
import { CanMatch, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserPermissionsService } from './utils/user-permissions.service';

@Injectable({
  providedIn: 'root',
})
export class CanMatchGuard implements CanMatch {
  constructor(private readonly userPermissionsService: UserPermissionsService) {}
  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userPermissionsService.isAdmin$;
  }
}
