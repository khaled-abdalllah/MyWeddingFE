import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventTypeComponent } from './EventType/add-event-type/add-event-type.component';
import {ReactiveFormsModule} from '@angular/Forms';
import { routes } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './EventType/index/index.component';


@NgModule({
  
  declarations: [AddEventTypeComponent,IndexComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
    
  ]
})
export class AdminModule { }
