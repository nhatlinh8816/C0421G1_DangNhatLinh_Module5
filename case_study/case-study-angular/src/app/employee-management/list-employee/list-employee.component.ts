import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/employee/Employee';
import {EmployeeServiceService} from '../../service-management/employee/employee-service.service';
import {EmployeeDegreeServiceService} from '../../service-management/employee/employee-degree-service.service';
import {EmployeeDivisionServiceService} from '../../service-management/employee/employee-division-service.service';
import {EmployeePositionServiceService} from '../../service-management/employee/employee-position-service.service';
import {EmployeeDegree} from '../../model/employee/EmployeeDegree';
import {EmployeePosition} from '../../model/employee/EmployeePosition';
import {EmployeeDivision} from '../../model/employee/EmployeeDivision';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee []|any;
  constructor(private employeeServiceService: EmployeeServiceService) {
    this.employees = this.employeeServiceService.findAll().subscribe(next => {
      console.log(next);
      this.employees = next;
    }, error => {

    }, () => {

    });
  }
  ngOnInit(): void {

  }

}
