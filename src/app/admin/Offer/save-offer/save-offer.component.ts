import { Component, OnInit,Input } from '@angular/core';
import {Offer} from '../../Models/offer'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {OfferServiceService} from '../Service/offer-service.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';
import {MyErrorStateMatcher} from '../../../shared/MyErrorStateMatcher';
import {EventType} from '../../Models/EventType';
import {AddEventTypeService} from '../../EventType/services/add-event-type.service'

@Component({
  selector: 'app-save-offer',
  templateUrl: './save-offer.component.html',
  styleUrls: ['./save-offer.component.css']
})
export class SaveOfferComponent implements OnInit {
  offer:Offer;
  profileForm:FormGroup;

  constructor(private OfferService:OfferServiceService,private router: ActivatedRoute,private route: Router,
    private _snackBar: MatSnackBar,private EventTypesService:AddEventTypeService ) { }
    
    get OfferName(){    
      return this.profileForm.get('OfferName');
     }
     get ValidFrom(){
      return this.profileForm.get('ValidFrom');
     }
     get ValidTo(){
      return this.profileForm.get('ValidTo');
     }
     get Price(){
      return this.profileForm.get('Price');
     }
     get EventType_ID(){
      return this.profileForm.get('EventType_ID');
     }

     get OfferDetail(){
       return this.profileForm.get('OfferDetail');
     }

    matcher = new MyErrorStateMatcher();
  ngOnInit() {
    this.initForm();
    this.getAllItems();
  }

  initForm()
  {
    this.profileForm = new FormGroup({
      OfferName: new FormControl('',Validators.required),
      ValidFrom:new FormControl('',Validators.required),
      ValidTo:new FormControl('',Validators.required),
      Price:new FormControl('',Validators.required),
      EventType_ID:new FormControl('',Validators.required),
      OfferDetail:new FormControl('',Validators.required),
      Id: new FormControl('0')
     
    });
    // let id = this.router.snapshot.paramMap.get('id');
    // if(id){
    //   this.OfferService.getById(id)
    //   .subscribe( data => {
    //     this.profileForm.setValue(data)});
    //   this.profileForm.controls['ItemName'].setValue(this.Item.ItemName);
    //   this.profileForm.controls['ItemPrice'].setValue(this.Item.ItemPrice);
    //   this.profileForm.controls['Id'].setValue(this.Item.Id);
       
    }
   
    eventTypes: EventType[];
    

    getAllItems(){
       this.EventTypesService.getAll().subscribe(x=>this.eventTypes=x as EventType[] );
    }

    onSubmit() 
    {
      this.OfferService.post(this.profileForm.value).subscribe(x=>console.warn("Done"));
      this._snackBar.open('Date Saved Successfully', 'success', {
        duration: 10000,
      });
      this.route.navigate(['/offerIndex']);
    }


}
