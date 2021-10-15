import { Component, OnInit } from '@angular/core';
import {TypeProduct} from '../../model/TypeProduct';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {TypeService} from '../../service/type.service';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  types: TypeProduct [] = [];
  productForm: FormGroup;
  id: number;
  // tslint:disable-next-line:max-line-length
  constructor(private typeCustomerService: TypeService, private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((param: ParamMap) => {
      const id = Number(param.get('id'));
      console.log(id);
      this.getEditForm(id);
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
  ngOnInit(): void {
    this.getAllType();
  }

  private getAllType() {
    this.typeCustomerService.findAll().subscribe(type => {
      this.types = type;
    });
  }
  getEditForm(id: number){
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name, [Validators.required]),
        code: new FormControl(product.code, [Validators.required]),
        description: new FormControl(product.description, [Validators.required]),
        price: new FormControl(product.price, [Validators.required, this.validateSalary]),
        type: new FormControl(product.type)
      });
    });
  }

  update(id: number) {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      id = product.id;
      this.productService.update(id, product).subscribe(() => {
        this.router.navigateByUrl('/product/list');
        alert('Update Success');
      });
    }
  }

  compareFn(a, b) {
    return a.id === b.id;
  }
}
