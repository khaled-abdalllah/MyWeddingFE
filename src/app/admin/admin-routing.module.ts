import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventTypeComponent } from './EventType/add-event-type/add-event-type.component';
import { IndexComponent } from './EventType/index/index.component';

export const  routes: Routes = [
  { path: 'addEventType', component: AddEventTypeComponent },
  { path: 'EventTypeIndex', component: IndexComponent },
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}