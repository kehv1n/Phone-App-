import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PhonesService {
  BASE_URL: string = '';
  constructor(private myHttp: Http) { }

  getList() {
    return this.myHttp.get(`${this.BASE_URL}/api/phones`)
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }

  get(id) {
    return this.myHttp.get(`${this.BASE_URL}/api/phones/${id}`)
    .toPromise()
    .then(apiResponse => apiResponse.json())

  }

  remove(id) {
    return this.myHttp.delete(`${this.BASE_URL}/api/phones/${id}`)
    .toPromise()
    .then(apiResponse => apiResponse.json());
  }
}
