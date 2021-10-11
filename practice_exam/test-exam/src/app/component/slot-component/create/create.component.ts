import { Component, OnInit } from '@angular/core';
import {SlotService} from '../../../service/slot/slot.service';
import {FilmServiceService} from '../../../service/film/film-service.service';
import {Router} from '@angular/router';
import {Film} from '../../../model/Film';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Regex} from '../../../validator/Regex';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  film: Film[] = [];
  slotForm: FormGroup = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.pattern(Regex.SLOT_CODE_REGEX)]),
    date: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required, this.validateAmount]),
    film: new FormControl()
  });
  constructor(private slotService: SlotService, private filmService: FilmServiceService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllFilm();
  }
  validateAmount(point: AbstractControl) {
    const value = point.value;
    if (value < 0 ) {
      return {invalid : true};
    } else {
      return null;
    }
  }

  getAllFilm() {
    this.filmService.findAll().subscribe(film => {
      this.film = film;
      console.log(this.film);
    });
  }

  create() {
    if (this.slotForm.valid) {
      this.slotService.create(this.slotForm.value).subscribe (next => {
        this.router.navigateByUrl('/slot/list');
        alert('Create Success');
      });
    }
  }
}
