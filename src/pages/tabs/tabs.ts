import { Component } from '@angular/core';



import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabRoots: Object[];
  
    constructor() {
      this.tabRoots = [
        {
          root: 'WeatherPage',
          tabTitle: 'Weather',
          tabIcon: 'sunny'
        },
        {
          root: 'NewsPage',
          tabTitle: 'News',
          tabIcon: 'paper'
        },
        {
          root: 'MePage',
          tabTitle: 'Me',
          tabIcon: 'person'
        }
      ];
    }

  }
