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
	@ViewChild('mySlider') slider: Slides;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		this.slidePageArray = [
			{id:0,pages:'page0'},
			{id:1,pages:'page1'},
			{id:2,pages:'page2'},
			{id:3,pages:'page3'},
			{id:4,pages:'page4'},
			{id:5,pages:'page5'},
		];
	}

	onSegmentChanged(segmentButton) {
		console.log(typeof(segmentButton.value))
		this.slider.slideTo(segmentButton.value);
	  }

	onSlideChanged(slider) {
		console.log('你懂了')
		if (slider._activeIndex <= 7 && slider._activeIndex >= 0) {
			this.segmentDefaultValue = slider._activeIndex.toString();
		  } else {
			this.segmentDefaultValue = '7';
		  }

	}



}
