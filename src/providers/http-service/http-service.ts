import { API_HOST } from './../../app/api.module';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

  constructor(
    public http: HttpClient,
    @Inject(API_HOST) private _APIHOST: any,
    ) {
    // console.log('Hello HttpServiceProvider Provider');
  }
  getAllPanelItem(){
    return this.http.get('assets/jsonfiles/panellistJSON.json')
//  return  this.http.get(`${API_HOST}api/BigBox/GetAllPanelItem`)
 
  }
  getAllPanelItemById(){
    return this.http.get('assets/jsonfiles/panelListbyItem.json')
  }
  getAllMovieslist(){
    return this.http.get('assets/jsonfiles/moviesListJson.json')
  }
  insertfarmer(farmer) {
    return this.http.post(`${this._APIHOST}api/generic/InsertFarmer`, farmer, { headers: '' });
  }
  insertDelivery(delivery) {
    return this.http.post(`${this._APIHOST}api/generic/InsertDelivery`, delivery,null);
  }
  insertTrucks(trucks) {
    return this.http.post(`${this._APIHOST}api/generic/InsertTrucks`, trucks,null);
  }
}
