import { Component, OnInit } from '@angular/core';
import {Dictionary} from '../../model/Dictionary';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryServiceService} from '../../service/dictionary-service.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionariesMeaning: Dictionary;
  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryServiceService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word');
      this.dictionariesMeaning = this.dictionaryService.findByWord(word);
    });
  }

  ngOnInit(): void {
  }

}
