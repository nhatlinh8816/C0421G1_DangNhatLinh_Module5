import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../../service-management/employee/employee-service.service';
import {EmployeeDegreeServiceService} from '../../service-management/employee/employee-degree-service.service';
import {EmployeeDivisionServiceService} from '../../service-management/employee/employee-division-service.service';
import {EmployeePositionServiceService} from '../../service-management/employee/employee-position-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {EmployeeDegree} from '../../model/employee/EmployeeDegree';
import {EmployeePosition} from '../../model/employee/EmployeePosition';
import {EmployeeDivision} from '../../model/employee/EmployeeDivision';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Regex} from '../../validator/Regex';
import {Employee} from '../../model/employee/Employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  degree: EmployeeDegree [] = [];
  position: EmployeePosition [] = [];
  division: EmployeeDivision [] = [];
  employeeForm: FormGroup;
  employee: Employee;
  id: number;

  constructor(private employeeDegreeService: EmployeeDegreeServiceService,
              private employeedDivisonService: EmployeeDivisionServiceService,
              private employeePositionServiceService: EmployeePositionServiceService,
              private employeeService: EmployeeServiceService, private activatedRoute: ActivatedRoute,
              private router: Router) {
    activatedRoute.paramMap.subscribe((param: ParamMap) => {
      const id = Number(param.get('id'));
      console.log(id);
      this.getEditForm(id);
    });

  }

  ngOnInit(): void {
    this.getAllDegree();
    this.getAllDivision();
    this.getAllPosition();
  }
  getAllDivision() {
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

  getEditForm(id: number){
    return this.employeeService.findById(id).subscribe(employee => {
      this.employeeForm = new FormGroup({
        id: new FormControl(employee.id, [Validators.required]),
        name: new FormControl(employee.name, [Validators.required]),
        dOB: new FormControl(employee.dOB, [Validators.required]),
        identityNum: new FormControl(employee.identityNum, [Validators.required, Validators.pattern(Regex.IDENTITY_CARD_REGEX)]),
        salary: new FormControl(employee.salary, [Validators.required, this.validateSalary]),
        phoneNum: new FormControl(employee.phoneNum, [Validators.required, Validators.pattern(Regex.PHONE_NUMBER_REGEX)]),
        email: new FormControl(employee.email, [Validators.email]),
        address: new FormControl(employee.address, [Validators.required]),
        division: new FormControl(employee.division),
        degree: new FormControl(employee.degree),
        position: new FormControl(employee.position)
      });
    });
  }
  validateSalary(point: AbstractControl) {
    const value = point.value;
    if (value < 0 ) {
      return {invalid : true};
    } else {
      return null;
    }
  }

  update(id: number) {
    if (this.employeeForm.valid) {
      const employee = this.employeeForm.value;
      id = employee.id;
      console.log(employee);
      this.employeeService.update(id, employee).subscribe(() => {
        this.router.navigateByUrl('/employee/list');
        alert('Update Success');
      });
    }
  }

  compareFn(a, b) {
    return a.id === b.id;
  }
}
