import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypeProduct} from '../model/TypeProduct';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private url = 'http://localhost:3000/typeProduct';
  constructor(private http: HttpClient) {
  }
  findAll(): Observable<TypeProduct[]|any> {
    return this.http.get(this.url);
  }
}
