import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Film} from '../../model/Film';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {
  private url = 'http://localhost:3000/film';
  constructor(private http: HttpClient) { }
  findAll(): Observable<Film[]|any> {
    return this.http.get(this.url);
  }}

