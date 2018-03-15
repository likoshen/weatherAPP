import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TokenService } from '../../providers/token-service';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  isShowWhiteDay:boolean;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public alerCtrl: AlertController,
     public tokenCtrl: TokenService,
    ) {
      this.isShowWhiteDay = this.tokenCtrl.isShowWhiteDay == 'false' ? false : true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  //保存是否白天黑夜的状态。保存在本地localstore
  saveData(){
    this.tokenCtrl.isShowWhiteDay = this.isShowWhiteDay;
  }

  aboutme(){
    let alert = this.alerCtrl.create({
      title: '您好!',
      message: '该天气预报是由Liko自己开发，谢谢您的使用!',
      buttons: ['Ok']
    });
    alert.present()
  }

  tellme(){
    let alert = this.alerCtrl.create({
      title: '温馨提示',
      message: '该功能尚未开放',
      buttons: ['Ok']
    });
    alert.present()
  }

  clearData(){
    //这里应该清理缓存，因为没有缓存，暂不做
    let alert = this.alerCtrl.create({
      title: '温馨提示',
      message: '缓存清理完毕！',
      buttons: ['Ok']
    });
    alert.present()
  }
}
