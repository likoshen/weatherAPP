import { CommonService } from './../../providers/CommonService';
import { TokenService } from './../../providers/token-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the CityManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-city-manage',
  templateUrl: 'city-manage.html',
})
export class CityManagePage {
  localDataArray:any = [];
  isShowDelete = false;
  location;//定位到的具体城市
  temperature;
  currentCity;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private stogeCtrl: TokenService,
    private tipCtrl: CommonService,
    private viewCtrl: ViewController
  ) {
    this.location = this.stogeCtrl.localData;
    this.currentCity = this.location;
    this.temperature = JSON.parse(this.stogeCtrl.todayWeather).temperature;
  }

  ionViewDidLoad() {
    if(this.stogeCtrl.localDataArray){
      this.localDataArray =  JSON.parse(this.stogeCtrl.localDataArray) 
    }
    // this.localDataArray =  JSON.parse(this.stogeCtrl.localDataArray) ?  JSON.parse(this.stogeCtrl.localDataArray) : [];
    if(this.localDataArray.length<1){
      this.localDataArray.push({name:this.location,isSelected:true});
    }

    console.log(this.stogeCtrl.localDataArray);
    // this.stogeCtrl.localDataArray =JSON.stringify([{name:"茂名市",isSelected: false},{name:"广州市",isSelected: false},{name:"深圳市",isSelected: false}]);
  }
  goSearchPage(){
    let pages = this.modalCtrl.create('CitySearchPage');
    pages.present();
    pages.onDidDismiss(res =>{
      if(res){
        this.localDataArray.push({name: res.city,isSelected: false});
        this.stogeCtrl.localDataArray =JSON.stringify(this.localDataArray);
      }
    })
  }

  //编辑状态
  editPage(){
    this.isShowDelete = true;
  }
  //设为提醒城市
  setCity(item:any,index:number){
    console.log('当前索引是：'+ index);
    item.isSelected = true;
    this.currentCity = this.localDataArray[index].name;
    this.localDataArray.forEach((element,key) => {
      if(key != index){
        element.isSelected = false;
        console.log(this.localDataArray);
      }
    });
  }
  //确定设置
  confirmBtn(){
    this.isShowDelete = false;
    this.stogeCtrl.localDataArray =JSON.stringify(this.localDataArray);
  }
  //删除城市
  deleteCity(item:any,index:number){
    console.log('当前索引是：'+ index);
    this.tipCtrl.myConfirm('温馨提示','确定要删除改城市吗？').then( res => {
      this.localDataArray.splice(index,1);
    })
  }
  goBack(){
    this.viewCtrl.dismiss(this.currentCity);
  }
}