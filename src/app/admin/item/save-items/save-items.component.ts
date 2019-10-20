import { Component, OnInit,Input } from '@angular/core';
import {Items} from '../../Models/items'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ItemServiceService} from '../service/item-service.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';
import {MyErrorStateMatcher} from '../../../shared/MyErrorStateMatcher';


@Component({
  selector: 'app-save-items',
  templateUrl: './save-items.component.html',
  styleUrls: ['./save-items.component.css']
})
export class SaveItemsComponent implements OnInit {

  Item:Items;
  profileForm:FormGroup;

  constructor(private ItemSerivce:ItemServiceService,private router: ActivatedRoute,private route: Router,
    private _snackBar: MatSnackBar) {
   }

   get ItemName(){    
    return this.profileForm.get('ItemName');
   }
   get ItemPrice(){
    return this.profileForm.get('ItemPrice');
   }
  matcher = new MyErrorStateMatcher();

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
      this.ItemSerivce.getById(id)
      .subscribe( data => {
        this.profileForm.setValue(data)});
      // this.profileForm.controls['ItemName'].setValue(this.Item.ItemName);
      // this.profileForm.controls['ItemPrice'].setValue(this.Item.ItemPrice);
      // this.profileForm.controls['Id'].setValue(this.Item.Id);
    }
    
    
  }

  onSubmit() 
  {
    this.ItemSerivce.post(this.profileForm.value).subscribe(x=>console.warn("Done"));
    this._snackBar.open('Date Saved Successfully', 'success', {
      duration: 10000,
    });
    this.route.navigate(['/itemIndex']);
  }
}
