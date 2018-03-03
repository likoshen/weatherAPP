import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
import { MockProvider } from './provider';

/**
 * Generated class for the Demo1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo1',
  templateUrl: 'demo1.html',
})
export class Demo1Page {
  items: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private mockProvider:MockProvider) {
    this.items = mockProvider.getData();

  }
  doRefresh(refresher: Refresher) {
    console.log('DOREFRESH', refresher);

    this.mockProvider.getAsyncData().then((newData) => {
      for (var i = 0; i < newData.length; i++) {
        this.items.unshift( newData[i] );
      }

      refresher.complete();
    });
  }

  doPulling(refresher: Refresher) {
    console.log('DOPULLING', refresher.progress);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo1Page');
  }

}
