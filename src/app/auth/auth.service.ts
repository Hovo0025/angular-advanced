import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn(): Observable<boolean> {
    console.log('I am checking auth...');
    return of(false).pipe(delay(2500));
  }

  hasPermission(): Observable<boolean> {
    console.log('I am checking permission...');
    return of(true);
  }
}
