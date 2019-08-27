import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventTypeComponent } from './EventType/add-event-type/add-event-type.component';
import {ReactiveFormsModule} from '@angular/Forms';
import { routes } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './EventType/index/index.component';
import {MatButtonModule} from '@angular/material/button';
import { MaterialModule } from '../shared/material/material.module';
import { SaveItemComponent } from './items/save-item/save-item.component';
import { IndexItemsComponent } from './items/index-items/index-items.component';
import {AdminRoutingModule} from './admin-routing.module'




@NgModule({
  
  declarations: [AddEventTypeComponent,IndexComponent, SaveItemComponent, IndexItemsComponent],
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
