import { NgModule, Component }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventTypeComponent } from './EventType/add-event-type/add-event-type.component';
import { IndexComponent } from './EventType/index/index.component';
import {SaveItemsComponent} from './item/save-items/save-items.component'
import {IndexItemComponent} from './item/index-item/index-item.component'
import { componentFactoryName } from '@angular/compiler';
import {IndexOfferComponent} from './Offer/index-offer/index-offer.component'
import {SaveOfferComponent} from './Offer/save-offer/save-offer.component'


export const  routes: Routes = [
  { path: 'addEventType', component: AddEventTypeComponent },
  { path: 'EventTypeIndex', component: IndexComponent },
  { path: 'addEventType/:id',      component: AddEventTypeComponent },
  {path: 'itemIndex',component:IndexItemComponent},
  {path: 'itemSave' ,component:SaveItemsComponent},
  { path: 'itemSave/:id',component: SaveItemsComponent },
  {path:'offerIndex',component: IndexOfferComponent},
  {path:'SaveOffer',component:SaveOfferComponent},
  {path:'SaveOffer/:id',component:SaveOfferComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}