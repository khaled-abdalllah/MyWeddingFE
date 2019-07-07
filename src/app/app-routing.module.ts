import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddEventTypeComponent} from './admin/EventType/add-event-type/add-event-type.component'

const routes: Routes = [
  { path: 'admin', loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
