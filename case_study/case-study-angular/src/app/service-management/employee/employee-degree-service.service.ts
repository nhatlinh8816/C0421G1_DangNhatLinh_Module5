import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EmployeeDegree} from '../../model/employee/EmployeeDegree';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDegreeServiceService {
  private url = 'http://localhost:3000/degree';
  constructor(private http: HttpClient) {
  }
  findAll(): Observable<EmployeeDegree[]|any> {
    return this.http.get(this.url);
  }

}
