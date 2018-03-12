import { HttpService } from './../../providers/HttpService';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-information',
	templateUrl: 'information.html',
})
export class InformationPage {
	segmentDefaultValue: string = "0";
	segmentButton = [];
	slidePageArray = [];
	resultArray = [];
	@ViewChild('mySlider') slider: Slides;
	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public http: HttpService,
	) {
	}
	// top(头条，默认),shehui(社会),guonei(国内),guoji(国际),yule(娱乐),tiyu(体育)junshi(军事),keji(科技),caijing(财经),shishang(时尚)
	ionViewDidLoad() {
		this.getInfoValue('top');
		this.slidePageArray = [
			{id:0,pages:'page0'},
			{id:1,pages:'page1'},
			{id:2,pages:'page2'},
			{id:3,pages:'page3'},
			{id:4,pages:'page4'},
			{id:5,pages:'page5'},
			{id:6,pages:'page6'},
			{id:7,pages:'page7'},
			{id:8,pages:'page8'},
			{id:9,pages:'page9'},
		];
	}


// top(头条，默认),shehui(社会),guonei(国内),guoji(国际),yule(娱乐),tiyu(体育)junshi(军事),keji(科技),caijing(财经),shishang(时尚)
	onSegmentChanged(segmentButton) {
		if(segmentButton.value == '0'){
			this.getInfoValue('top');
			this.resultArray = [];
			this.slider.slideTo(segmentButton.value);
		}else if(segmentButton.value == '1'){
			this.getInfoValue('shehui');
			this.resultArray = [];
			this.slider.slideTo(segmentButton.value);
		}else if(segmentButton.value == '2'){
			this.getInfoValue('guonei');
			this.resultArray = [];
			this.slider.slideTo(segmentButton.value);
		}else if(segmentButton.value == '3'){
			this.getInfoValue('guoji');
			this.resultArray = [];
			this.slider.slideTo(segmentButton.value);
		}else if(segmentButton.value == '4'){
			this.getInfoValue('yule');
			this.resultArray = [];
			this.slider.slideTo(segmentButton.value);
		}else if(segmentButton.value == '5'){
			this.getInfoValue('tiyu');
			this.resultArray = [];
			this.slider.slideTo(segmentButton.value);
		}else if(segmentButton.value == '6'){
			this.getInfoValue('junshi');
			this.resultArray = [];
			this.slider.slideTo(segmentButton.value);
		}else if(segmentButton.value == '7'){
			this.getInfoValue('keji');
			this.resultArray = [];
			this.slider.slideTo(segmentButton.value);
		}else if(segmentButton.value == '8'){
			this.getInfoValue('caijing');
			this.resultArray = [];
			this.slider.slideTo(segmentButton.value);
		}else if(segmentButton.value == '9'){
			this.getInfoValue('shishang');
			this.resultArray = [];
			this.slider.slideTo(segmentButton.value);
		}
		
	  }

	onSlideChanged(slider) {
		if (slider._activeIndex <= 9 && slider._activeIndex >= 0) {
			this.segmentDefaultValue = slider._activeIndex.toString();

		  } else {
			this.segmentDefaultValue = '9';
		  }

	}
  
   getInfoValue(type:string){
	let url = 'http://v.juhe.cn/toutiao/index';
	let param ={
		type: type,
		key: '942d3f78c426cd99c23ee3043d99f898'
	}
	 this.http.ajaxHttp(url, param).then( (res:any) => {
		 console.log(res.result.data);
		this.resultArray = res.result.data;
	 }).catch( err => {
		 console.log(err);
	 })
   }

   goDetail(item){
	 this.navCtrl.push('InformationDetailPage',item);
   }

}
