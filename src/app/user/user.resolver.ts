import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, delay, EMPTY, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { UserInterface } from '../user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<UserInterface> {
  constructor(private readonly userSrv: UserService, private readonly router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserInterface> {
    return this.userSrv.getUser(route.params['id']).pipe(
      delay(4000),
      catchError(() => {
        this.router.navigate(['']);
        return EMPTY;
      })
    );
  }
}
