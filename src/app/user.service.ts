import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

// Tells angular that this class can be injected into a component
// Provide class at a root level, so dont have to add in app.module.ts
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/api/users";

  // inject http client into the constructor
  constructor(private http: HttpClient) { }

  // return type is observable?
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`);
  }
}
