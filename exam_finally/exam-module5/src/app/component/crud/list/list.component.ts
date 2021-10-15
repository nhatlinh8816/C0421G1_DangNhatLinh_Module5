import { Component, OnInit } from '@angular/core';
import {Car} from '../../../model/Car';
import {CarService} from '../../../service/car.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cars: Car [] | any = [];
  id: number;
  code: string;
  p = 1;
  name = '';

  constructor(private carService: CarService, private router: Router) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.cars = this.carService.findAll().subscribe(next => {
      console.log(next);
      this.cars = next;
    }, error => {

    }, () => {

    });
  }

  sendId(id: any) {
    this.carService.findById(id).subscribe(list => {
      this.code = list.code;
      this.id = list.id;
    });
  }

  deleteCustomer(id: number) {
    this.carService.delete(id).subscribe(() => {
      alert('Delete Success');
      this.router.navigateByUrl('/car/list');
      this.ngOnInit();
    });
  }

  Search() {
    console.log(this.name);
    this.cars = this.carService.findByName(this.name).subscribe(next => {
      console.log(next);
      this.cars = next;
    }, error => {

    }, () => {

    });
  }
}
