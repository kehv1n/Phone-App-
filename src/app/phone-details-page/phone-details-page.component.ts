import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../phones.service'
import { Router, ActivatedRoute } from '@angular/router';
// USE ACTIVATED ROUTE TO GET INFO FROM THE ROUTE VISITED
// IN THIS CASE, GET THE ID in the PARAM

@Component({
  selector: 'app-phone-details-page',
  templateUrl: './phone-details-page.component.html',
  styleUrls: ['./phone-details-page.component.css']
})
export class PhoneDetailsPageComponent implements OnInit {

  phone: Object;
  errorMessage: String = '';

  constructor(
    private myRoute: ActivatedRoute,
    private myPhoneService: PhonesService,
    private myNavigator: Router
   ) { }

  ngOnInit() {
    this.myRoute.params.subscribe((params) => {
      //Get the params
      this.getPhoneDetails(params['id']);
    })
  }

  getPhoneDetails(id) {
    this.myPhoneService.get(id)
    .then((thePhoneDetails) => {
      this.phone = thePhoneDetails
    })
    .catch((err) => {
      console.log(`error!`, err);
    });
  }

  deletePhone() {
    if (!window.confirm('Are you sure?')) {
      return;
    }
    this.myPhoneService.remove(this.phone['_id'])
    .then((apiResult) => {
      console.log(apiResult)
      this.myNavigator.navigate(['/']);
    })
    .catch((err) => {
      this.errorMessage = 'There was an error, ty again!'
    })
  }



} //END OF CLASS
