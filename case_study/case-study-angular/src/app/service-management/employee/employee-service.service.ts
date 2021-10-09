import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
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

  // @ts-ignore
  create(employee: Employee): Observable <any>{
    return this.http.post(this.url, employee);
  }

  findById(id: number): Observable<Employee> {
    // @ts-ignore
    return this.http.get(this.url + '/' + id);
  }
  update(id: number, employee: Employee): Observable <any>{
    return this.http.put(this.url + '/' + id, employee);
  }

  delete(id: number): Observable <any>{
    return this.http.delete(this.url + '/' + id);
  }
}
