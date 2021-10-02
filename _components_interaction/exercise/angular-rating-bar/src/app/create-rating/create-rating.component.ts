import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Rating} from '../../model/Rating';

@Component({
  selector: 'app-create-rating',
  templateUrl: './create-rating.component.html',
  styleUrls: ['./create-rating.component.css']
})
export class CreateRatingComponent implements OnInit {
  @Output('ratingCreate') onCreate = new EventEmitter<Rating>();
  rating: Rating;
  constructor() { }

  ngOnInit(): void {
  }

  createRating(name: string, grade: string) {
    // tslint:disable-next-line:radix
    this.rating = {name: name, grade: parseInt(grade)};
    console.log(this.rating);
    this.onCreate.emit(this.rating);
  }
}
