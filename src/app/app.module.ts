import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule, JsonpModule } from '@angular/http';
import { BusinessService } from '../providers/business.service';
import { CommonService } from '../providers/CommonService';
import { HttpService } from '../providers/HttpService';

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'',
      backButtonIcon:'ios-arrow-back',
      iconMode:'md',
      mode:"md",
      tabsHideOnSubPages:'true',
      swipeBackEnabled:false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    BusinessService,
    CommonService,
    HttpService,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
