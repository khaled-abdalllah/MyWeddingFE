import { Component, OnInit } from '@angular/core';
import {AddEventTypeService} from '../services/add-event-type.service'
import {EventType} from '../../../admin/Models/EventType';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private addEventTypeSerivce:AddEventTypeService) { }
  
  EventTypes:EventType[];

  ngOnInit() {
    this.GetAllEventTypes();
  }
   
  GetAllEventTypes(){
    this.addEventTypeSerivce.getAll().subscribe(x=>this.EventTypes=x);
  }
}
