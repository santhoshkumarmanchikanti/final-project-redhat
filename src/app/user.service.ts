// @ts-ignore

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import {SearchUserComponent} from './search-user/search-user.component';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = 'http://localhost:8082/api/v1/users';

  constructor(private httpClient: HttpClient) {

  }

  getUsersList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  // tslint:disable-next-line:ban-types
  createUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  // tslint:disable-next-line:ban-types
  deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);


  }

  // tslint:disable-next-line:ban-types
  updateUser(id: number, user: User): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }
}
