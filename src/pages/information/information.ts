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
	@ViewChild('mySlider') slider: Slides;
	private selected_segment = 0;
	top_segment = 'top_0';
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad InformationPage');
	}
	select(index) {
		if (index === 2) {
			this.top_segment = 'top_2';
		}
		if (index === 1) {
			this.top_segment = 'top_1';
		}
		if (index === 0) {
			this.top_segment = 'top_0';
		}
		this.slider.slideTo(index, 500);
	}

	onSlideChanged($event) {
		console.log('你懂了')
		if (((($event.touches.startX - $event.touches.currentX) <= 100) || (($event.touches.startX - $event.touches.currentX) > 0)) && (this.slider.isBeginning() || this.slider.isEnd())) {
			console.log("interdit Direction");
		}
		else {
			console.log("OK Direction");
		}

	}

	panEvent(e) {
		console.log('我懂了')
		let currentIndex = this.slider.getActiveIndex();
		console.log(currentIndex)
		if (currentIndex === 2) {
			this.top_segment = 'top_2';
		}
		if (currentIndex === 1) {
			this.top_segment = 'top_1';
		}
		if (currentIndex === 0) {
			this.top_segment = 'top_0';
		}
	}


}
