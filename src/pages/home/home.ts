import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpService } from '../../providers/HttpService';
import { TokenService } from '../../providers/token-service';

/**
 api地址：https://www.juhe.cn/docs/api/id/39
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  resultArray = []; //保存实时新闻的头三条数组
  imgurl = 'assets/images/taiyang.png';
  isShowWhiteDay:string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public http: HttpService,
    public tokenCtrl: TokenService,
  ) {
  }
  ionViewWillEnter(){
    
    this.isShowWhiteDay = this.tokenCtrl.isShowWhiteDay;
    this.imgurl = this.isShowWhiteDay == "false" ? 'assets/images/taiyang.png' : 'assets/images/taiyang_black.png'
    console.log(typeof(this.isShowWhiteDay));
  }
  ionViewDidLoad() {
    // this.getNews();
    // this.getWeather();
    console.log('ionViewDidLoad HomePage');
  }
  //前往城市管理
  goCityMange(){
    let pages = this.modalCtrl.create("CityManagePage");
    pages.present();
  }
 //前往资讯页
  goInformation(){
    this.navCtrl.push("InformationPage");
  }

  //更多按钮，是跳转到资讯列表
  moreInfo(){
    this.navCtrl.push("InformationPage");
  }
 
  getWeather(){
    let url = 'http://v.juhe.cn/weather/index';
		let param = {
			cityname: "广州",
			key: '6c0260a599a7c9bba7bf30385193928e'
		}
		this.http.ajaxHttp(url, param).then((res: any) => {
			console.log(res.result);
		}).catch(err => {
			console.log(err);
		})
  }

  //获取实时新闻
  getNews(){
    let url = 'http://v.juhe.cn/toutiao/index';
		let param = {
			type: "top",
			key: '942d3f78c426cd99c23ee3043d99f898'
		}
		this.http.ajaxHttp(url, param).then((res: any) => {
			console.log(res.result.data);
      for(let i=0; i<3; i++){
        this.resultArray.push( res.result.data[i]);
      }
		}).catch(err => {
			console.log(err);
		})
  }

  //前往新闻的详情
  goDetail(item){
    this.navCtrl.push('InformationDetailPage', item);
  }
}
