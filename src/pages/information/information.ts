import { HttpService } from './../../providers/HttpService';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the InformationPage page.
 *
 * top(头条，默认),shehui(社会),guonei(国内),guoji(国际),yule(娱乐),
 * tiyu(体育)junshi(军事),keji(科技),caijing(财经),shishang(时尚)
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

	topArray = [];
	shehuiArray = [];
	guoneiArray = [];
	guojiArray = [];
	yuleArray = [];
	tiyuArray = [];
	junshiArray = [];
	kejiArray = [];
	caijingArray = [];
	shishangArray = [];
	@ViewChild('mySlider') slider: Slides;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public http: HttpService,
	) {
	}
	ionViewDidLoad() {
		this.getInfoValue('top');
		this.slidePageArray = [
			{ id: 0, pages: 'page0' },
			{ id: 1, pages: 'page1' },
			{ id: 2, pages: 'page2' },
			{ id: 3, pages: 'page3' },
			{ id: 4, pages: 'page4' },
			{ id: 5, pages: 'page5' },
			{ id: 6, pages: 'page6' },
			{ id: 7, pages: 'page7' },
			{ id: 8, pages: 'page8' },
			{ id: 9, pages: 'page9' },
		];
	}
	//下拉刷新
	doRefresh(refresh) {
		console.log(this.segmentDefaultValue)
		let type;
		if(this.segmentDefaultValue == '0'){
			type = "top";
		}else if(this.segmentDefaultValue == '1'){
			type = "shehui";
		}else if(this.segmentDefaultValue == '2'){
			type = "guonei";
		}else if(this.segmentDefaultValue == '3'){
			type = "guoji";
		}else if(this.segmentDefaultValue == '4'){
			type = "yule";
		}else if(this.segmentDefaultValue == '5'){
			type = "tiyu";
		}else if(this.segmentDefaultValue == '6'){
			type = "junshi";
		}else if(this.segmentDefaultValue == '7'){
			type = "keji";
		}else if(this.segmentDefaultValue == '8'){
			type = "caijing";
		}else if(this.segmentDefaultValue == '9'){
			type = "shishang";
		}
		let url = 'http://v.juhe.cn/toutiao/index';
		let param = {
			type: type,
			key: '942d3f78c426cd99c23ee3043d99f898'
		}
		this.http.ajaxHttp(url, param).then((res: any) => {
			console.log(res.result.data);
			this.resultArray = res.result.data;
			refresh.complete();
		}).catch(err => {
			console.log(err);
		})
	}

	// top(头条，默认),shehui(社会),guonei(国内),guoji(国际),yule(娱乐),tiyu(体育)junshi(军事),keji(科技),caijing(财经),shishang(时尚)
	onSegmentChanged(segmentButton) {
		if (segmentButton.value == '0') {
			if (this.topArray.length == 0) {
				this.getInfoValue('top');
				this.topArray = this.resultArray
			} else {
				this.resultArray = this.topArray;
			}
			this.slider.slideTo(segmentButton.value);
		} else if (segmentButton.value == '1') {

			if (this.shehuiArray.length == 0) {
				this.getInfoValue('shehui');
				this.shehuiArray = this.resultArray
			} else {
				this.resultArray = this.shehuiArray;
			}
			this.slider.slideTo(segmentButton.value);
		} else if (segmentButton.value == '2') {
			if (this.guoneiArray.length == 0) {
				this.getInfoValue('guonei');
				this.guoneiArray = this.resultArray
			} else {
				this.resultArray = this.guoneiArray;
			}
			this.slider.slideTo(segmentButton.value);
		} else if (segmentButton.value == '3') {

			if (this.guojiArray.length == 0) {
				this.getInfoValue('guoji');
				this.guojiArray = this.resultArray
			} else {
				this.resultArray = this.guojiArray;
			}
			this.slider.slideTo(segmentButton.value);
		} else if (segmentButton.value == '4') {

			if (this.yuleArray.length == 0) {
				this.getInfoValue('yule');
				this.yuleArray = this.resultArray
			} else {
				this.resultArray = this.yuleArray;
			}
			this.slider.slideTo(segmentButton.value);
		} else if (segmentButton.value == '5') {

			if (this.tiyuArray.length == 0) {
				this.getInfoValue('tiyu');
				this.tiyuArray = this.resultArray
			} else {
				this.resultArray = this.tiyuArray;
			}
			this.slider.slideTo(segmentButton.value);
		} else if (segmentButton.value == '6') {

			if (this.junshiArray.length == 0) {
				this.getInfoValue('junshi');
				this.junshiArray = this.resultArray
			} else {
				this.resultArray = this.junshiArray;
			}
			this.slider.slideTo(segmentButton.value);
		} else if (segmentButton.value == '7') {

			if (this.kejiArray.length == 0) {
				this.getInfoValue('keji');
				this.kejiArray = this.resultArray
			} else {
				this.resultArray = this.kejiArray;
			}
			this.slider.slideTo(segmentButton.value);
		} else if (segmentButton.value == '8') {

			if (this.caijingArray.length == 0) {
				this.getInfoValue('caijing');
				this.caijingArray = this.resultArray
			} else {
				this.resultArray = this.caijingArray;
			}
			this.slider.slideTo(segmentButton.value);
		} else if (segmentButton.value == '9') {

			if (this.shishangArray.length == 0) {
				this.getInfoValue('shishang');
				this.shishangArray = this.resultArray
			} else {
				this.resultArray = this.shishangArray;
			}
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

	getInfoValue(type: string) {
		let url = 'http://v.juhe.cn/toutiao/index';
		let param = {
			type: type,
			key: '942d3f78c426cd99c23ee3043d99f898'
		}
		this.http.ajaxHttp(url, param).then((res: any) => {
			console.log(res.result.data);
			this.resultArray = res.result.data;
		}).catch(err => {
			console.log(err);
		})
	}

	goDetail(item) {
		this.navCtrl.push('InformationDetailPage', item);
	}

}
