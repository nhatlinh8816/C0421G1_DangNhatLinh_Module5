import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Start} from '../model/Start';

@Injectable({
  providedIn: 'root'
})
export class StartService {

  // private url = 'http://localhost:3000/start';
  private url = 'http://localhost:8080/start/api/v1';
  constructor(private http: HttpClient) {
  }
  findAll(): Observable<Start[]|any> {
    return this.http.get(this.url);
  }
}
