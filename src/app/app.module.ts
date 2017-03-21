import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneListPageComponent } from './phone-list-page/phone-list-page.component';
import { PhoneDetailsPageComponent } from './phone-details-page/phone-details-page.component';
import { PhonesService } from './phones.service'

@NgModule({
  declarations: [
    AppComponent,
    PhoneListPageComponent,
    PhoneDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PhonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
