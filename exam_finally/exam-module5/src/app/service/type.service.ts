import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypeCar} from '../model/TypeCar';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  // private url = 'http://localhost:3000/type';
  private url = 'http://localhost:8080/type/api/v1';
  constructor(private http: HttpClient) {
  }
  findAll(): Observable<TypeCar[]|any> {
    return this.http.get(this.url);
  }
}
