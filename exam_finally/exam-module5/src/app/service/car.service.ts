import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../model/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  // private url = 'http://localhost:3000/car';
  private url = 'http://localhost:8080/car/api/v1';
  constructor(private http: HttpClient) { }
  // hien thi danh sach
  findAll(): Observable<Car[]|any> {
    return this.http.get(this.url);
  }

  // @ts-ignore
  create(car: Car): Observable <any>{
    return this.http.post(this.url, car);
  }

  findById(id: number): Observable<Car> {
    // @ts-ignore
    return this.http.get(this.url + '/' + id);
  }
  update(id: number, car: Car): Observable <any>{
    return this.http.put(this.url + '/' + id, car);
  }

  delete(id: number): Observable <any>{
    return this.http.delete(this.url + '/' + id);
  }
  findByName(name: string): Observable<Car[]|any> {
    // @ts-ignore
    return this.http.get(this.url + '/search' + '?name=' + name);
  }
}
