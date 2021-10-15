import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypeCar} from '../model/TypeCar';
import {End} from '../model/End';

@Injectable({
  providedIn: 'root'
})
export class EndService {

  // private url = 'http://localhost:3000/end';
  private url = 'http://localhost:8080/end/api/v1';
  constructor(private http: HttpClient) {
  }
  findAll(): Observable<End[]|any> {
    return this.http.get(this.url);
  }
}
