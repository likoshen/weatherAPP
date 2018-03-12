import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import * as $ from "jquery";
/**
 * Generated class for the InformationDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information-detail',
  templateUrl: 'information-detail.html',
})
export class InformationDetailPage {
  private paySrc: SafeResourceUrl;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private sr: DomSanitizer
    ) {

    this.paySrc = this.sr.bypassSecurityTrustResourceUrl(navParams.data);
    // this.paySrc = this.sr.bypassSecurityTrustResourceUrl("http://mini.eastday.com/mobile/170105110355287.html?qid=juheshuju");
  }

  ionViewDidLoad() {    
  }

}
