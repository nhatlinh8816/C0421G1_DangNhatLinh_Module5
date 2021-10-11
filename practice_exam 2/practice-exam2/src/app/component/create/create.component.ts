import { Component, OnInit } from '@angular/core';
import {TypeCustomer} from '../../model/TypeCustomer';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {Regex} from '../../validator/Regex';
import {CustomerService} from '../../service/customer.service';
import {TypeService} from '../../service/type.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  typeCustomer: TypeCustomer [] = [];
  customerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required, Validators.pattern(Regex.CUSTOMER_CODE_REGEX)]),
    dOB: new FormControl('', [Validators.required]),
    phoneNum: new FormControl('', [Validators.required, Validators.pattern(Regex.PHONE_NUMBER_REGEX)]),
    email: new FormControl('', [Validators.email]),
    typeCustomer: new FormControl()
  });
  constructor(private customerService: CustomerService,
              private typeService: TypeService,
              private router: Router) {}

  ngOnInit(): void {
    this.getAllType();
  }
  getAllType(){
    this.typeService.findAll().subscribe(typeCustomer => {
      console.log(this.typeCustomer);
      this.typeCustomer = typeCustomer;
    });
  }

  create() {
    console.log(this.customerForm);
    if (this.customerForm.valid) {
      this.customerService.create(this.customerForm.value).subscribe(next => {
        this.router.navigateByUrl('/customer/list');
        alert('Create Success');
      });
    }
  }
}
