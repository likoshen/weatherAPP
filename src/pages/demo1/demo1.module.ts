import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo1Page } from './demo1';
import { MockProvider } from './provider';

@NgModule({
  declarations: [
    Demo1Page,
  ],
  imports: [
    IonicPageModule.forChild(Demo1Page),
  ],
  providers: [
    MockProvider
  ]
})
export class Demo1PageModule {}
