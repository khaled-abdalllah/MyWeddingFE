import { Component, OnInit,Input } from '@angular/core';
import {Offer} from '../../Models/offer'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {OfferServiceService} from '../Service/offer-service.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';
import {MyErrorStateMatcher} from '../../../shared/MyErrorStateMatcher';
import {EventType} from '../../Models/EventType';
import {AddEventTypeService} from '../../EventType/services/add-event-type.service';
import {ItemServiceService} from '../../item/service/item-service.service';
import {Items} from '../../Models/items';
import { MatTableDataSource } from '@angular/material';
import { DIR_DOCUMENT } from '@angular/cdk/bidi';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-save-offer',
  templateUrl: './save-offer.component.html',
  styleUrls: ['./save-offer.component.css']
})
export class SaveOfferComponent implements OnInit {
  offer:Offer;
  profileForm:FormGroup;
  eventTypes: EventType[];
  AllItems :Items[];
  selectedItems:Items[];
  displayedColumns: string[] = ['Id', 'ItemName','ItemPrice','Delete'];
  dataSource ;
  itemsIDs:Number[];

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

   get ChosenItem(){
    return this.profileForm.get('ChosenItem');
   }

   get Id(){
    return this.profileForm.get('Id');
   }

  matcher = new MyErrorStateMatcher();
ngOnInit() {
  
  this.initForm();
}


  constructor(private OfferService:OfferServiceService,private router: ActivatedRoute,private route: Router,
    private _snackBar: MatSnackBar,private EventTypesService:AddEventTypeService,
    private ItemService :ItemServiceService ) 
    {
      this.getAllEventsType();
      this.getAllItems();
      this.selectedItems= [];
     }
    
    
  initForm()
  {
    this.profileForm = new FormGroup({
      OfferName: new FormControl('',Validators.required),
      ValidFrom:new FormControl('',Validators.required),
      ValidTo:new FormControl('',Validators.required),
      Price:new FormControl('',Validators.required),
      EventType_ID:new FormControl('',Validators.required),
      OfferDetail:new FormControl(''),
      ChosenItem:new FormControl('0'),
      Id: new FormControl('0')
     
    });


    let id = this.router.snapshot.paramMap.get('id');
    if(id){
      this.itemsIDs=[];
      this.OfferService.getByID(id)
      .subscribe( data =>{
                           this.profileForm.setValue(data);
                           this.itemsIDs=this.OfferDetail.value;
                            console.log(this.Id)
                         console.log(this.AllItems);
                           this.itemsIDs.forEach((obj, i) => 
                           { 
                              let zz =this.AllItems.find(x=>x.Id==obj);
                              this.selectedItems.push( zz);
                           });
                           this.dataSource = this.selectedItems;

                           
                });
      this.setDateSource();
      }

    }
   
    

    
     setDateSource(){
      //  console.log(this.itemsIDs);
    //    this.OfferDetail.value.forEach((obj, i) => { 
    //     console.log(obj);
    // });
     }

    getAllEventsType(){
       this.EventTypesService.getAll().subscribe(x=>this.eventTypes=x as EventType[] );
    }

    getAllItems(){
      this.ItemService.getAll().subscribe(x=>this.AllItems=x as Items[] );
    }

    onSubmit() 
    {
      //this.OfferDetail=this.dataSource.data;
      this.itemsIDs=[];
       this.dataSource.forEach((obj, i) => { 
        this.itemsIDs.push(obj.Id);
    });

      this.profileForm.controls['OfferDetail'].setValue(this.itemsIDs);
      this.OfferService.post(this.profileForm.value).subscribe(x=>console.warn("Done"));
      this._snackBar.open('Date Saved Successfully', 'success', {
        duration: 10000,
      });
      this.route.navigate(['/offerIndex']);
    }
    
    addItem(){
      if(this.ChosenItem.value==0){
        this._snackBar.open('please select item to add', 'warning', {
          duration: 10000,
        });
        return;
      }
          
      if (!this.selectedItems.some(item => item.Id == this.ChosenItem.value)) 
      {
         let zz=this.AllItems.find(x=>x.Id==this.ChosenItem.value);
         this.selectedItems.push( zz);
         this.dataSource = this.selectedItems;
         this.dataSource = [...this.dataSource];
         
    }else{
          this._snackBar.open('Item Already Exist', 'warning', {
          duration: 10000,
      });
    }
      
      
    }

    removeItem(id){
      this.selectedItems = this.selectedItems.filter(order => order.Id !== id);   
      let zz=this.AllItems.find(x=>x.Id==id);
      this.dataSource = this.selectedItems;
      this.dataSource = [...this.dataSource];   
      
    }

    getTotalPrice() {
      return this.selectedItems.map(t => t.ItemPrice).reduce((acc, value) => acc + value, 0);
    }
}
