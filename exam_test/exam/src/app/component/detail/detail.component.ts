import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/Product';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  productDetail: Product | null | undefined;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService)
  // tslint:disable-next-line:max-line-length
  {activatedRoute.paramMap.subscribe((param: ParamMap) => {
    const id = Number(param.get('id')) ;
    productService.findById(id).subscribe(next => {
      this.productDetail = next;
    });
  });
  }

  ngOnInit(): void {
  }

}
