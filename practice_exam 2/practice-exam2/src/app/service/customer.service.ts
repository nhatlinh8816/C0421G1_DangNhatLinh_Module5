import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/Customer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = 'http://localhost:3000/customer';
  constructor(private http: HttpClient) { }
  findAll(): Observable<Customer[]|any> {
    return this.http.get(this.url);
  }

  // @ts-ignore
  create(customer: Customer): Observable <any>{
    return this.http.post(this.url, customer);
  }

  findById(id: number): Observable<Customer> {
    // @ts-ignore
    return this.http.get(this.url + '/' + id);
  }
  update(id: number, customer: Customer): Observable <any>{
    return this.http.put(this.url + '/' + id, customer);
  }

  delete(id: number): Observable <any>{
    return this.http.delete(this.url + '/' + id);
  }
}
