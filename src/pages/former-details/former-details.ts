
import { HttpModule } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from './../../providers/http-service/http-service';
/**
 * Generated class for the FormerDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-former-details',
  templateUrl: 'former-details.html',
})
export class FormerDetailsPage {
  fullname;
  formlocation;
  noofweeklytrays;
  doyouhavepermanentwarehouse;
  noofwarehouse;
  multiplePackingToggle;
  multiplePackingToggleComment;
  Name;
  telephone;
  creditcardnumber;
  month;
  year;
  cvv;
  _currentFarmer: any = { };

  constructor(
 
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpServiceProvider

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormerDetailsPage');
  }
  registerBtn() {
    
     
      this._currentFarmer.fullname = this.fullname;
    this._currentFarmer.formlocation = this.formlocation;
    this._currentFarmer.noofweeklytrays = this.noofweeklytrays;
    this._currentFarmer.doyouhavepermanentwarehouse = this.doyouhavepermanentwarehouse;
    this._currentFarmer.noofwarehouse = this.noofwarehouse;
    this._currentFarmer.multiplePackingToggle = this.multiplePackingToggle;
    this._currentFarmer.multiplePackingToggleComment = this.multiplePackingToggleComment;
    this._currentFarmer.Name = this.Name;
    this._currentFarmer.telephone = this.telephone;
   // this._currentFarmer.creditcardnumber = this.creditcardnumber;
   // this._currentFarmer.month = this.month;
    //this._currentFarmer.year = this.year;
    //this._currentFarmer.cvv = this.cvv;
    
    this.httpService.insertfarmer(this._currentFarmer)
      .subscribe((data: any) => {
        if (data.Result) {
          alert();
        }
        else {
        
        }
      }, (err => {
        
    
      }));
  }

}
