import { Component } from '@angular/core';
import {Rating} from '../model/Rating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rating-bar';
  rating: Rating[] = [
    {name: 'Tuan', grade: 5}
  ];

  getNewRating(value: Rating) {
    this.rating.push(value);
  }
}
