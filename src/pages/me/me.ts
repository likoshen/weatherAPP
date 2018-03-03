import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }
  push1() {
    this.navCtrl.push('Wpage1Page');
  }

  doFor() {
    let alert = this.alerCtrl.create({
      title: '您好!',
      message: '该天气预报是由Liko自己开发，谢谢您的使用!',
      buttons: ['Ok']
    });
    alert.present()
  }
  push3() {
    this.navCtrl.push('UseHelpPage');
  }
}
