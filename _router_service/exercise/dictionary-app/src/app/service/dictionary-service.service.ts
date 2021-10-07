import { Injectable } from '@angular/core';
import {Dictionary} from '../model/Dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  dictionaries: Dictionary[];
  constructor() {
    this.dictionaries = [
      {word: 'House', meaning: 'Nhà'},
      {word: 'Father', meaning: 'Cha'},
      {word: 'Mother', meaning: 'Mẹ'},
      {word: 'Computer', meaning: 'Máy tính'},
      {word: 'Book', meaning: 'Sách'},
      {word: 'Dog', meaning: 'Chó'},
    ];
  }
  findAll(){
    return this.dictionaries;
  }
  findByWord(word: string): Dictionary {
    for (const dictionary of this.dictionaries){
      if (dictionary.word === word){
        return dictionary;
      }
    }
    return null;
  }
}
