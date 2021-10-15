import { Component, OnInit } from '@angular/core';
import {TypeCar} from '../../../model/TypeCar';
import {Car} from '../../../model/Car';
import {TypeService} from '../../../service/type.service';
import {CarService} from '../../../service/car.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Regex} from '../../../validator/Regex';
import {End} from '../../../model/End';
import {Start} from '../../../model/Start';
import {StartService} from '../../../service/start.service';
import {EndService} from '../../../service/end.service';
import {Time} from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  type: TypeCar [] = [];
  end: End [] = [];
  start: Start [] = [];
  car: Car;
  carForm: FormGroup;
  id: number;

  constructor(private typeCarService: TypeService,
              private carService: CarService,
              private startService: StartService,
              private endService: EndService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    activatedRoute.paramMap.subscribe((param: ParamMap) => {
      const id = Number(param.get('id'));
      console.log(id);
      this.getEditForm(id);
    });
  }

  ngOnInit(): void {
    this.getAllType();
    this.getAllStart();
    this.getAllEnd();
  }
  getAllType() {
    this.typeCarService.findAll().subscribe(type => {
      this.type = type;
      console.log(this.type);
    });
  }
  getAllStart() {
    this.startService.findAll().subscribe(start => {
      this.start = start;
      console.log(this.start);
    });
  }
  getAllEnd() {
    this.endService.findAll().subscribe(end => {
      this.end = end;
      console.log(this.end);
    });
  }
  getEditForm(id: number){
    return this.carService.findById(id).subscribe(car => {
      this.carForm = new FormGroup({
        id: new FormControl(car.id, [Validators.required]),
        code: new FormControl(car.code, [Validators.required]),
        type: new FormControl(car.type, [Validators.required]),
        name: new FormControl(car.name, [Validators.required]),
        start: new FormControl(car.start, [Validators.required]),
        end: new FormControl(car.end, [Validators.required]),
        phone: new FormControl(car.phone, [Validators.required, Validators.pattern(Regex.PHONE_NUMBER_REGEX)]),
        email: new FormControl(car.email, [Validators.email]),
        timeStart: new FormControl(car.timeStart, [Validators.required, this.validateTime]),
        timeEnd: new FormControl(car.timeEnd, [Validators.required])
      });
    });
  }
  validateTime(point: AbstractControl) {
    const value = point.value;
    if (value.hours > 23 || value.hours < 5 ) {
      return {invalid : true};
    } else {
      return null;
    }
  }
  update(id: number) {
    if (this.carForm.valid) {
      const car = this.carForm.value;
      id = car.id;
      console.log(car);
      this.carService.update(id, car).subscribe(() => {
        this.router.navigateByUrl('/car/list');
        alert('Update Success');
      });
    }
  }

  compareFn(a, b) {
    return a.id === b.id;
  }

}
