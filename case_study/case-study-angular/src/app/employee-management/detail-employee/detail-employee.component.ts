import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Employee} from '../../model/employee/Employee';
import {EmployeeServiceService} from '../../service-management/employee/employee-service.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {
  employeeDetail: Employee | null | undefined;
  constructor(private activatedRoute: ActivatedRoute, private employeeServiceService: EmployeeServiceService)
  // tslint:disable-next-line:max-line-length
  {activatedRoute.paramMap.subscribe((param: ParamMap) => {
    const id = Number(param.get('id')) ;
    employeeServiceService.findById(id).subscribe(next => {
      this.employeeDetail = next;
    });
  });
  }

  ngOnInit(): void {
  }

}
