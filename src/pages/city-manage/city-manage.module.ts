import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CityManagePage } from './city-manage';

@NgModule({
  declarations: [
    CityManagePage,
  ],
  imports: [
    IonicPageModule.forChild(CityManagePage),
  ],
})
export class CityManagePageModule {}
