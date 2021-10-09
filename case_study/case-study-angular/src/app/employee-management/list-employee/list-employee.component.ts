import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/employee/Employee';
import {EmployeeServiceService} from '../../service-management/employee/employee-service.service';
import {Router} from '@angular/router';




@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee []|any;
  id: number;
  name: string;
  p: number = 1;
  constructor(private employeeServiceService: EmployeeServiceService, private router: Router) {
    this.employees = this.employeeServiceService.findAll().subscribe(next => {
      console.log(next);
      this.employees = next;
    }, error => {

    }, () => {

    });
  }
  ngOnInit(): void {

  }

  sendId(id: any) {
    this.employeeServiceService.findById(id).subscribe(list => {
      this.name = list.name;
      this.id = list.id;
    });
  }

  deleteCustomer(id: number) {
    this.employeeServiceService.delete(id).subscribe(() => {
      alert('Delete Success');
      this.router.navigateByUrl('/employee/list');
    });
  }
}
