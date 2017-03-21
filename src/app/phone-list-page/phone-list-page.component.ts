import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../phones.service'

@Component({
  selector: 'app-phone-list-page',
  templateUrl: './phone-list-page.component.html',
  styleUrls: ['./phone-list-page.component.css']
})
export class PhoneListPageComponent implements OnInit {

  phones: Array<Object> = [];
  errorMessage: String = '';

  constructor( private myPhoneService: PhonesService ) { }


  ngOnInit() {
    this.myPhoneService.getList()
      .then((phonesList) => {
        this.phones = phonesList;
      })
      .catch((err) => {
        this.errorMessage = 'There was an error. Try again Later.';
      });
  }

}
