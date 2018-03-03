import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';

@NgModule({
  declarations: [
    NewsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
  ],
  entryComponents: [
    NewsPage,
  ]
})
export class NewsPageModule {}
