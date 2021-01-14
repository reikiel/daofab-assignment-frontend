import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Parent } from './parent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  private baseUrl = "http://localhost:8080/api/parents";

  constructor(private http: HttpClient) { }

  getParents(request){
    const params = request;
    return this.http.get(this.baseUrl, {params});
  }
}
