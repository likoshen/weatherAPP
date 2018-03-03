import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }
  push1() {
    this.navCtrl.push('Demo2Page');
  }
  push2() {
    this.navCtrl.push('Wpage2Page');
  }
  chuanyi() {
    this.navCtrl.push('ChuanpagePage');
  }
  ziwaixian() {
    this.navCtrl.push('ZipagePage');
  }
  yundong() {
    this.navCtrl.push('YunpagePage');
  }
  ganmao() {
    this.navCtrl.push('GanpagePage');
  }
  xiche() {
    this.navCtrl.push('XipagePage');
  }
  diaoyu() {
    this.navCtrl.push('DiaopagePage');
  }
}
