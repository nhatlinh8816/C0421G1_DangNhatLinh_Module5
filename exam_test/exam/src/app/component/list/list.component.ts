import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/Product';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: Product [] | any = [];
  id: number;
  name: string;
  nameView1: string | any;
  p = 1;
  constructor(private productService: ProductService, private router: Router) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.products = this.productService.findAll().subscribe(next => {
      console.log(next);
      this.products = next;
    }, error => {

    }, () => {

    });
  }

  sendId(id: any) {
    this.productService.findById(id).subscribe(list => {
      this.name = list.name;
      this.id = list.id;
    });
  }

  deleteProduct(id: number) {
    this.productService.delete(id).subscribe(() => {
      alert('Delete Success');
      this.router.navigateByUrl('/product/list');
      this.ngOnInit();
    });
  }
}
