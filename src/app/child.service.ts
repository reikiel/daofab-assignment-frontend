import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Child} from './child';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  private baseUrl = "http://localhost:8080/api/children";
  private parentUrl = "http://localhost:8080/api/parent"

  constructor(private http: HttpClient) { }

  getAllChildren(): Observable<Child[]> {
    return this.http.get<Child[]>(`${this.baseUrl}`);
  }

  getChildren(id): Observable<Child[]> {
    return this.http.get<Child[]>(`${this.parentUrl}/${id}`);
  }
}
