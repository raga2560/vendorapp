import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the WalletRadminPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coupon-admin',
  templateUrl: 'coupon-admin.html'
})
export class CouponAdminPage {

  usersRoot = 'UsersPage'
  adminRoot = 'AdminPage'
  transactionsRoot = 'TransactionsPage'
  balancesRoot = 'BalancesPage'


  constructor(public navCtrl: NavController) {}

}
