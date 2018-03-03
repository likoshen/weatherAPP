import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';

/**
 * Generated class for the Demo2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo2',
  templateUrl: 'demo2.html',
})
export class Demo2Page {

  // 接收数据用
  listData: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo2Page');

    // 网络请求
    this.http.request('http://jsonplaceholder.typicode.com/photos')
      .subscribe((res: Response) => {
        this.listData = res.json();
      });
  }
}

