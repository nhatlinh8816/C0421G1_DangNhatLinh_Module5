import { Component, OnInit } from '@angular/core';
import {SlotService} from '../../../service/slot/slot.service';
import {Router} from '@angular/router';
import {Slot} from '../../../model/Slot';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  slot: Slot []|any;
  id: number;
  code: string;

  constructor(private slotService: SlotService, private routes: Router) {}

  ngOnInit(): void {
    this.slot = this.slotService.findAll().subscribe(next => {
      console.log(next);
      this.slot = next;
    }, error => {

    }, () => {

    });
  }

  sendId(id: any) {
    this.slotService.findById(id).subscribe(list => {
      this.code = list.code;
      this.id = list.id;
    });
  }
  deleteSlot(id: number) {
    this.slotService.delete(id).subscribe(() => {
      alert('Delete Success');
      this.routes.navigateByUrl('/slot/list');
      this.ngOnInit();
    });
  }
}
