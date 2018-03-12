import {Injectable} from '@angular/core';
import {ToastController, AlertController, LoadingController} from 'ionic-angular';

@Injectable()
export class CommonService {
  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {
  }

  //消息框
  public myToast(msg: string, callback?: any, duration?: number) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: duration ? duration : 3000,
      position: "middle",
      cssClass: 'myToastStyle'
    });
    toast.present();
    toast.onDidDismiss(() => {
      callback && callback();
    });
    return toast;
  }


  public myAlert(msg: string,confirmFun?:any,buttonText?:string) {
    let alert = this.alertCtrl.create({
      title: '提示',
      subTitle: msg,
      buttons: [
        {
          text:buttonText?buttonText:'确定',
          handler: () => confirmFun()
        }
      ],
      enableBackdropDismiss: false
    });
    alert.present();
  }

  //确认框
  public myConfirm(title: string, msg: string) {
    return new Promise((resolve,reject)=> {
      let alert = this.alertCtrl.create({
        title: title,
        message: msg,
        buttons: [
          {
            text: '取消',
            role: 'cancel',
            handler: () => {
              //console.log('Cancel clicked');
            }
          },
          {
            text: '确定',
            handler: ()=>{
              resolve();
            }
          }
        ],
        enableBackdropDismiss: false
      });
      alert.present();
    })
  }

  //页面加载loading界面，自定义样式
  public myLoading(msg: any) {
    let message = msg ? msg : '车小蜜正在火速加载中...'
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<div class="loadingCss"><div class="loadingCssBox"><img src="assets/images/loading.gif"><p>' + message + '</p></div></div>',
    });
    loading.present();
    return loading;
  }

  //数据加载页面loadding,默认样式
  public loading() {
    let loading = this.loadingCtrl.create({
      spinner: "circles",
      content: '加载中...'
    });
    loading.present();
    return loading;
  }
}
