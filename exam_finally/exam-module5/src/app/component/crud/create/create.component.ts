import { Component, OnInit } from '@angular/core';
import {TypeCar} from '../../../model/TypeCar';
import {End} from '../../../model/End';
import {Start} from '../../../model/Start';
import {Car} from '../../../model/Car';
import {TypeService} from '../../../service/type.service';
import {CarService} from '../../../service/car.service';
import {StartService} from '../../../service/start.service';
import {EndService} from '../../../service/end.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Regex} from '../../../validator/Regex';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  type: TypeCar [] = [];
  end: End [] = [];
  start: Start [] = [];
  carForm: FormGroup = new FormGroup({
    code: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(Regex.PHONE_NUMBER_REGEX)]),
    email: new FormControl('', [Validators.email]),
    timeStart: new FormControl('', [Validators.required]),
    timeEnd: new FormControl('', [Validators.required])
  });
  constructor(private typeCarService: TypeService,
              private carService: CarService,
              private startService: StartService,
              private endService: EndService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

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

  create() {
    console.log(this.carForm);
    if (this.carForm.valid) {
      this.carService.create(this.carForm.value).subscribe (next => {
        this.router.navigateByUrl('/car/list');
        alert('Create Success');
      });
    }
  }


}
