import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Regex} from '../../validator/Regex';
import {EmployeeDivision} from '../../model/employee/EmployeeDivision';
import {EmployeeDegree} from '../../model/employee/EmployeeDegree';
import {EmployeePosition} from '../../model/employee/EmployeePosition';
import {EmployeeDegreeServiceService} from '../../service-management/employee/employee-degree-service.service';
import {EmployeeDivisionServiceService} from '../../service-management/employee/employee-division-service.service';
import {EmployeePositionServiceService} from '../../service-management/employee/employee-position-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  degree: EmployeeDegree [] = [];
  position: EmployeePosition [] = [];
  division: EmployeeDivision [] = [];
  employeeForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(Regex.NAME_PERSON_REGEX)]),
    dOB: new FormControl('', [Validators.required]),
    identityNum: new FormControl('', [Validators.required, Validators.pattern(Regex.IDENTITY_CARD_REGEX)]),
    salary: new FormControl('', [Validators.required, this.validateSalary]),
    phoneNum: new FormControl('', [Validators.required, Validators.pattern(Regex.PHONE_NUMBER_REGEX)]),
    email: new FormControl('', [Validators.email]),
    address: new FormControl('', [Validators.required]),

  });
  constructor(private employeeDegreeService: EmployeeDegreeServiceService,
              private employeedDivisonService: EmployeeDivisionServiceService,
              private employeePositionServiceService: EmployeePositionServiceService) { }
  validateSalary(point: AbstractControl) {
    const value = point.value;
    if (value < 0 ) {
      return {invalid : true};
    } else {
      return null;
    }
  }
  ngOnInit(): void {
    this.getAllDegree();
    this.getAllDivison();
    this.getAllPosition();
  }
  getAllDivison() {
    this.employeedDivisonService.findAll().subscribe(division => {
      this.division = division;
    });
  }
  getAllPosition() {
    this.employeePositionServiceService.findAll().subscribe(position => {
      this.position = position;
    });
  }
  getAllDegree() {
    this.employeeDegreeService.findAll().subscribe(degree => {
      this.degree = degree;
    });
  }
}
