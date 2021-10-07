import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EmployeeDivision} from '../../model/employee/EmployeeDivision';
import {Employee} from '../../model/employee/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private url = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) { }
  // hien thi danh sach
  findAll(): Observable<Employee[]|any> {
    return this.http.get(this.url);
  }

  create(employee: Employee){
    this.http.post(this.url, employee);
  }
}
