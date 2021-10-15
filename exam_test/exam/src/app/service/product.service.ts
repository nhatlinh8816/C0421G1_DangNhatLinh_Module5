import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:3000/product';
  constructor(private http: HttpClient) { }
  // hien thi danh sach
  findAll(): Observable<Product[]|any> {
    return this.http.get(this.url);
  }

  // @ts-ignore
  create(product: Product): Observable <any>{
    return this.http.post(this.url, product);
  }

  findById(id: number): Observable<Product> {
    // @ts-ignore
    return this.http.get(this.url + '/' + id);
  }
  update(id: number, product: Product): Observable <any>{
    return this.http.put(this.url + '/' + id, product);
  }

  delete(id: number): Observable <any>{
    return this.http.delete(this.url + '/' + id);
  }
}
