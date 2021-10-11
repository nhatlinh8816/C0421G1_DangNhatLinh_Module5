import { Component, OnInit } from '@angular/core';
import {Slot} from '../../../model/Slot';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {SlotService} from '../../../service/slot/slot.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  slotDetail: Slot | null | undefined;
  constructor(private activatedRoute: ActivatedRoute, private slotService: SlotService) {
    activatedRoute.paramMap.subscribe((param: ParamMap) => {
      const id = Number(param.get('id')) ;
      slotService.findById(id).subscribe(next => {
        this.slotDetail = next;
        console.log(this.slotDetail);
      });
    });
  }

  ngOnInit(): void {
  }

}
