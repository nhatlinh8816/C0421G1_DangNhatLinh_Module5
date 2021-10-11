import { Component, OnInit } from '@angular/core';
import {SlotService} from '../../../service/slot/slot.service';
import {FilmServiceService} from '../../../service/film/film-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Film} from '../../../model/Film';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Slot} from '../../../model/Slot';
import {Regex} from '../../../validator/Regex';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  film: Film;
  slotForm: FormGroup;
  slot: Slot;
  id:number;
  // tslint:disable-next-line:max-line-length
  constructor(private slotService: SlotService, private filmService: FilmServiceService, private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((param: ParamMap) => {
      const id = Number(param.get('id'));
      console.log(id);
      this.getEditForm(id);
    });
  }

  ngOnInit(): void {
    this.getAllFilm();
  }
  getAllFilm() {
    this.filmService.findAll().subscribe(film => {
      this.film = film;
      console.log(this.film);
    });
  }
  private getEditForm(id: number) {
    return this.slotService.findById(id).subscribe(slot =>{
      this.slotForm = new FormGroup({
        id: new FormControl(slot.id),
        code: new FormControl(slot.code, [Validators.required, Validators.pattern(Regex.SLOT_CODE_REGEX)]),
        date: new FormControl(slot.date, [Validators.required]),
        amount: new FormControl(slot.amount, [Validators.required, this.validateAmount]),
        film: new FormControl(slot.film)
      });
    });
  }
  validateAmount(point: AbstractControl) {
    const value = point.value;
    if (value < 0 ) {
      return {invalid : true};
    } else {
      return null;
    }
  }
  compareFn(a, b) {
    return a.id === b.id;
  }

  update(id: number) {
    if (this.slotForm.valid){
      const slot = this.slotForm.value;
      id = slot.id;
      this.slotService.update(id, slot).subscribe(() => {
        this.router.navigateByUrl('slot/list');
        alert('Update Success');
      });
    }
  }
}
