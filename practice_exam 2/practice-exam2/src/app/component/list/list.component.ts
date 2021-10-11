import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {Customer} from '../../model/Customer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customers: Customer[]|any;
  constructor(private customerService: CustomerService, private routes: Router) {
    this.customers = this.customerService.findAll().subscribe(next => {
      console.log(next);
      this.customers = next;
    }, error => {}, () => {});
  }

  ngOnInit(): void {
  }

}
