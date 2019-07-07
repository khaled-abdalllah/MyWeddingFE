import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AddEventTypeService} from '../services/add-event-type.service'
import {EventType} from '../../../admin/Models/EventType';

@Component({
  selector: 'app-add-event-type',
  templateUrl: './add-event-type.component.html',
  styleUrls: ['./add-event-type.component.css']
})

export class AddEventTypeComponent implements OnInit {
  
  get EventName(){
      return this.profileForm.get('EventName');
  }
  private Event_Type:EventType={
    EventName:'',
    id:0,
  };
  profileForm = new FormGroup({
    EventName: new FormControl(this.Event_Type.EventName,Validators.required),
    id: new FormControl(this.Event_Type.id),
  });

  constructor(private addEventTypeSerivce:AddEventTypeService) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // this.Event_Type.EventName='testing from angu';
    // console.warn(this.Event_Type);
    //console.warn(this.profileForm.value);
    // console.warn(this.profileForm.get("EventName").value);
    this.addEventTypeSerivce.post(this.profileForm.value).subscribe(x=>console.warn("Done"));
  }

}
