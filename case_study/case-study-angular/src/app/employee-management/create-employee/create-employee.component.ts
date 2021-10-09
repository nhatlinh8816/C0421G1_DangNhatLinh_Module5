import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Regex} from '../../validator/Regex';
import {EmployeeDivision} from '../../model/employee/EmployeeDivision';
import {EmployeeDegree} from '../../model/employee/EmployeeDegree';
import {EmployeePosition} from '../../model/employee/EmployeePosition';
import {EmployeeDegreeServiceService} from '../../service-management/employee/employee-degree-service.service';
import {EmployeeDivisionServiceService} from '../../service-management/employee/employee-division-service.service';
import {EmployeePositionServiceService} from '../../service-management/employee/employee-position-service.service';
import {EmployeeServiceService} from '../../service-management/employee/employee-service.service';
import {Router} from '@angular/router';

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
    name: new FormControl('', [Validators.required]),
    dOB: new FormControl('', [Validators.required]),
    identityNum: new FormControl('', [Validators.required, Validators.pattern(Regex.IDENTITY_CARD_REGEX)]),
    salary: new FormControl('', [Validators.required, this.validateSalary]),
    phoneNum: new FormControl('', [Validators.required, Validators.pattern(Regex.PHONE_NUMBER_REGEX)]),
    email: new FormControl('', [Validators.email]),
    address: new FormControl('', [Validators.required]),
    division: new FormControl(),
    degree: new FormControl(),
    position: new FormControl()
  });
  constructor(private employeeDegreeService: EmployeeDegreeServiceService,
              private employeedDivisonService: EmployeeDivisionServiceService,
              private employeePositionServiceService: EmployeePositionServiceService,
              private employeeService: EmployeeServiceService, private router: Router) { }
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
      console.log(this.division);
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

  create() {
    console.log(this.employeeForm);
    if (this.employeeForm.valid) {
      this.employeeService.create(this.employeeForm.value).subscribe (next => {
        this.router.navigateByUrl('/employee/list');
        alert('Create Success');
      });
    }
  }
}
