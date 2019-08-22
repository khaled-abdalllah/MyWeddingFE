import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventTypeComponent } from './EventType/add-event-type/add-event-type.component';
import {ReactiveFormsModule} from '@angular/Forms';
import { routes } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './EventType/index/index.component';
import {MatButtonModule} from '@angular/material/button';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  
  declarations: [AddEventTypeComponent,IndexComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialModule,
    
  ]
})
export class AdminModule { }
