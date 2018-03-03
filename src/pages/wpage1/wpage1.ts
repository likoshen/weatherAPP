import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';

/**
 * Generated class for the Wpage1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wpage1',
  templateUrl: 'wpage1.html',
})
export class Wpage1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Wpage1Page');
  }
  @ViewChild(Slides) slides: Slides;
  //解决切换其他页面回去轮播图不动问题
  ionViewWillEnter(){
    this.slides.startAutoplay();
  }
  ionViewWillLeave(){
    this.slides.stopAutoplay();
  }

}
