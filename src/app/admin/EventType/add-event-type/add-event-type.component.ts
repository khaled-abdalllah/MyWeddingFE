import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AddEventTypeService} from '../services/add-event-type.service'
import {EventType} from '../../../admin/Models/EventType';
import {MyErrorStateMatcher} from '../../../shared/MyErrorStateMatcher'
import { ActivatedRoute } from "@angular/router";
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-event-type',
  templateUrl: './add-event-type.component.html',
  styleUrls: ['./add-event-type.component.css']
})

export class AddEventTypeComponent implements OnInit {
 
  Event_Type:EventType;
  profileForm:FormGroup;

  constructor(private addEventTypeSerivce:AddEventTypeService,private router: ActivatedRoute,private route: Router,
    private _snackBar: MatSnackBar) {
   }

  get EventName(){
      return this.profileForm.get('EventName');
  }
 
  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.profileForm = new FormGroup({
      EventName: new FormControl('',Validators.required),
      id: new FormControl('0'),
    });
    let id = this.router.snapshot.paramMap.get('id');
    if(id){
      this.addEventTypeSerivce.getById(id)
      .subscribe( data => {
        this.profileForm.setValue(data)});
      this.profileForm.controls['EventName'].setValue(this.Event_Type.EventName);
    }
    
  }

  onSubmit() 
  {
    this.addEventTypeSerivce.post(this.profileForm.value).subscribe(x=>console.warn("Done"));
    this._snackBar.open('Date Saved Successfully', 'success', {
      duration: 10000,
    });
    this.route.navigate(['/EventTypeIndex']);
  }

}
