import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/////////////////////////////COMPONENTS//////////////////////////////////////
import { PhoneListPageComponent } from './phone-list-page/phone-list-page.component';
import { PhoneDetailsPageComponent } from './phone-details-page/phone-details-page.component';


const routes: Routes = [
  {
    //When you visit '/' it will be using the
    //phone list component
    path: '',
    component: PhoneListPageComponent
  },
  {
    // when you visit /phone:id it will use the
    // phone list component
    path: 'phone/:id',
    component: PhoneDetailsPageComponent
  },
  {
    path: '**', //Wildcards
    redirectTo: ''

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
