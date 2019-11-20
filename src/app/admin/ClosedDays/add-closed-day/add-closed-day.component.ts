import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ClosedDayService} from '../closed-day.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';
import {MyErrorStateMatcher} from '../../../shared/MyErrorStateMatcher';


@Component({
  selector: 'app-add-closed-day',
  templateUrl: './add-closed-day.component.html',
  styleUrls: ['./add-closed-day.component.css']
})
export class AddClosedDayComponent implements OnInit {
  profileForm:FormGroup;

  get Day(){    
    return this.profileForm.get('Day');
   }
   get Reason(){
    return this.profileForm.get('Reason');
   }

   get Event_ID(){
    return this.profileForm.get('Event_ID');
   }

  constructor(private closedDayService:ClosedDayService,private router: ActivatedRoute,private route: Router,
    private _snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.profileForm = new FormGroup({
      ItemName: new FormControl('',Validators.required),
      ItemPrice:new FormControl('',Validators.required),
      Id: new FormControl('0'),
     
    });

    let id = this.router.snapshot.paramMap.get('id');
    if(id){
      this.closedDayService.getByID(id)
      .subscribe( data => {
        this.profileForm.setValue(data)});
    }
    
    
  }

  onSubmit() 
  {
    this.closedDayService.post(this.profileForm.value).subscribe(x=>console.warn("Done"));
    this._snackBar.open('Date Saved Successfully', 'success', {
      duration: 10000,
    });
    this.route.navigate(['/itemIndex']);
  }

}
