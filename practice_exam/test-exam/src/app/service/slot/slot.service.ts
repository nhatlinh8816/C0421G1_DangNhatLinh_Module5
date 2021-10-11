import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Slot} from '../../model/Slot';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlotService {
  private url = 'http://localhost:3000/slot';
  constructor(private http: HttpClient) { }
  // @ts-ignore
  findAll(): Observable<Slot[]|any> {
    return this.http.get(this.url);
  }
  create(slot: Slot): Observable <any>{
    return this.http.post(this.url, slot);
  }

  findById(id: number): Observable<Slot> {
    // @ts-ignore
    return this.http.get(this.url + '/' + id);
  }
  update(id: number, slot: Slot): Observable <any>{
    return this.http.put(this.url + '/' + id, slot);
  }
  delete(id: number): Observable <any>{
    return this.http.delete(this.url + '/' + id);
  }
}
