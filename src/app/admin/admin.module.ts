import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventTypeComponent } from './EventType/add-event-type/add-event-type.component';
import {ReactiveFormsModule} from '@angular/forms';
import { routes } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './EventType/index/index.component';
import {MatButtonModule} from '@angular/material/button';
import { MaterialModule } from '../shared/material/material.module';
import {AdminRoutingModule} from './admin-routing.module';
import { SaveItemsComponent } from './item/save-items/save-items.component';
import { IndexItemComponent } from './item/index-item/index-item.component';
import { IndexOfferComponent } from './Offer/index-offer/index-offer.component';
import { SaveOfferComponent } from './Offer/save-offer/save-offer.component';
import { AddClosedDayComponent } from './ClosedDays/add-closed-day/add-closed-day.component';
import { IndexClosedDayComponent } from './ClosedDays/index-closed-day/index-closed-day.component'




@NgModule({
  
  declarations: [AddEventTypeComponent,IndexComponent, SaveItemsComponent, IndexItemComponent, IndexOfferComponent, SaveOfferComponent, AddClosedDayComponent, IndexClosedDayComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialModule,
    
    
  ]
})
export class AdminModule { }
