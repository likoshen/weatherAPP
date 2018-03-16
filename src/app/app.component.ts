import { TokenService } from './../providers/token-service';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
declare let baidumap_location: any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'HomePage';
 
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    tokenCtrl: TokenService,
  ) {
   
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.baidulocation();
      if(!tokenCtrl.isShowWhiteDay){
        tokenCtrl.isShowWhiteDay = false;
      }
    });
  }
  baidulocation(){
    baidumap_location.getCurrentPosition(function (result) {
      alert(JSON.stringify(result));
        console.log(JSON.stringify(result, null, 4));
    }, function (error) {
      alert(JSON.stringify(error))
  });
}
}
