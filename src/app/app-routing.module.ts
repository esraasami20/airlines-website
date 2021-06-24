import { AirLineListComponent } from './Components/air-line-list/air-line-list.component';
import { AirLineDetailsComponent } from './Components/air-line-details/air-line-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
   path:"",
   component:AirLineListComponent
 },
  {
    path:"airline-list",
    component:AirLineListComponent
  },
  {
    path:"airline-details",
    component:AirLineDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
