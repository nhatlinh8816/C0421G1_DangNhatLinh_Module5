import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {EmployeeDivision} from '../../model/employee/EmployeeDivision';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDivisionServiceService {
  private url = 'http://localhost:3000/division';
  constructor(private http: HttpClient) { }
  findAll(): Observable<EmployeeDivision[]|any> {
    return this.http.get(this.url);
  }
}
