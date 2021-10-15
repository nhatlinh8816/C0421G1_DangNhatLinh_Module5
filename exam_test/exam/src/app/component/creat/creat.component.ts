import { Component, OnInit } from '@angular/core';
import {TypeProduct} from '../../model/TypeProduct';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {TypeService} from '../../service/type.service';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {
  types: TypeProduct [] = [];
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, this.validateSalary]),
    type: new FormControl('')
  });
  constructor(private typeCustomerService: TypeService, private productService: ProductService, private router: Router) { }
  validateSalary(point: AbstractControl) {
    const value = point.value;
    if (value < 0 ) {
      return {invalid : true};
    } else {
      return null;
    }
  }
  ngOnInit(): void {
    this.getAllType();
  }

  private getAllType() {
    this.typeCustomerService.findAll().subscribe(type => {
        this.types = type;
    });
  }

  create() {
    console.log(this.productForm);
    if (this.productForm.valid) {
      this.productService.create(this.productForm.value).subscribe (next => {
        this.router.navigateByUrl('/product/list');
        alert('Create Success');
      });
    }
  }
}
