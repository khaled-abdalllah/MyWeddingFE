import { NgModule, Component }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventTypeComponent } from './EventType/add-event-type/add-event-type.component';
import { IndexComponent } from './EventType/index/index.component';
import {IndexItemsComponent} from './Items/index-items/index-items.component'
import {SaveItemComponent} from './Items/save-item/save-item.component'


export const  routes: Routes = [
  { path: 'addEventType', component: AddEventTypeComponent },
  { path: 'EventTypeIndex', component: IndexComponent },
  { path: 'addEventType/:id',      component: AddEventTypeComponent },
  {path:'dd',component:SaveItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}