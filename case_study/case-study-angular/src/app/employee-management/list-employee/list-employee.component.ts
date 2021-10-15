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
  employees: Employee [] | any = [];
  id: number;
  name: string;
  nameView1: string | any;
  p = 1;

  constructor(private employeeServiceService: EmployeeServiceService, private router: Router) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.employees = this.employeeServiceService.findAll().subscribe(next => {
      console.log(next);
      this.employees = next;
    }, error => {

    }, () => {

    });
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
      this.ngOnInit();
    });
  }

  Search() {
    if (this.nameView1 !== '') {
      this.employees = this.employees.filter(res => {
        console.log(this.nameView1);
        console.log(res);
        return res.nameView1?.toLocaleLowerCase().match(this.nameView1?.toLocaleLowerCase());
      });
    } else if (this.nameView1 === '') {
      this.ngOnInit();
    }
  }
}
