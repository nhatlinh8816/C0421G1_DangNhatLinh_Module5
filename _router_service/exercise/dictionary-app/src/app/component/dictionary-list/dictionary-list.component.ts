import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from '../../service/dictionary-service.service';
import {Dictionary} from '../../model/Dictionary';

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {

  dictionaries: Dictionary[];
  constructor(private dictionaryService: DictionaryServiceService) {
    this.dictionaries = this.dictionaryService.findAll();
  }
  ngOnInit(): void {
  }

}
