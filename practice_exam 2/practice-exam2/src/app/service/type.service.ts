import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypeCustomer} from '../model/TypeCustomer';


@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private url = 'http://localhost:3000/typeCustomer';
  constructor(private http: HttpClient) {}
  // @ts-ignore
  findAll(): Observable<TypeCustomer[]|any> {
    return this.http.get(this.url);
  }
}
