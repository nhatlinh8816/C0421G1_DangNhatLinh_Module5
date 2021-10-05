import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


function checkPassword(check: AbstractControl){
  const pass = check.value;
  if (pass.password !== pass.confirmPassword){
    return {notSame: true};
  }else {
    return null;
  }
}
@Component({
  selector: 'app-create-register-form',
  templateUrl: './create-register-form.component.html',
  styleUrls: ['./create-register-form.component.css']
})
export class CreateRegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl ('', [Validators.required, Validators.email]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
      }, {validators: checkPassword}),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)])
    });
    }

  createReactiveRegisterForm() {
    console.log(this.registerForm.value);
  }
}



