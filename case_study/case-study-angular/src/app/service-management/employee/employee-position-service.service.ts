import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EmployeePosition} from '../../model/employee/EmployeePosition';

@Injectable({
  providedIn: 'root'
})
export class EmployeePositionServiceService {
  private url = 'http://localhost:3000/position';
  constructor(private http: HttpClient) { }
  findAll(): Observable<EmployeePosition[]|any> {
    return this.http.get(this.url);
  }
}
