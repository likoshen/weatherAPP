import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the CitySearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-city-search',
  templateUrl: 'city-search.html',
})
export class CitySearchPage {
  historyArray: any = []; //记录历史记录；
  workListItem: any;
  searchContent: string; //搜索内容；
  isShow: boolean = false; //是否显示列表
  isShowHistory: boolean = true; //是否显示历史记录
  resultArray = [];  //记录遍历城市的json数据的关键字；
  @ViewChild('searchbar') searchbar: Searchbar;  //实例化搜索框的对象
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpclient: HttpClient,
    private viewCtrl: ViewController,
  ) {
  }

  ionViewDidLoad() {
    this.historyArray = ['广州市','从化市','深圳市','北京市','杭州市','上海','重庆','香港特区','澳门特区','珠海'];
  }
 //点击搜索的时候
   searchResult(){
     this.httpclient.get('assets/city.json').subscribe( (res:any) => {
       console.log(res.china);
      this.getResult(res.china);
     },(err) => {
       console.log(err);
     })
   }
   //遍历json
   getResult(array:any){
      this.resultArray = []
      array.forEach((element,key) => {
        let _val = element.name.indexOf(this.searchContent);
        if(_val != -1){
          if(this.isShow == true){
            this.isShow = false;
          }
          this.isShowHistory = false;
          this.resultArray.push(element.name);
        }else{
          if(this.resultArray.length == 0 && key == array.length-1){
            this.isShow = true;
            this.isShowHistory = true;
          }
        }
      });
   }
   //点击热门城市应该进行的操作
   clickHistoryEvent(item){
    this.viewCtrl.dismiss({city:item});
   }
   //点击城市搜索结果时，触发的实践
   clickCity(item){
    this.viewCtrl.dismiss({city: item});
   }
   goback(){
     this.viewCtrl.dismiss();
   }
}
