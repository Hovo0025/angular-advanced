import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly httpClient: HttpClient) {}
  getUsers(): Observable<UserInterface[]> {
    return this.httpClient.get<UserInterface[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: string) {
    return this.httpClient.get<UserInterface>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
