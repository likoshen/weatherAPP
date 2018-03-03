import { BusinessService } from './../../providers/business.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { CommonService } from '../../providers/CommonService';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage implements OnInit {
  //每次都要在当前页面的构造函数（constructor）里面，注入你要服务，例如private http: BusinessService;http可以是你自定义的变量名
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: BusinessService, private common: CommonService) {
  }
  //ngOnInit();这个是这个页面的生命周期函数，就是这个页面每次被打开都会执行里面的内容，记住只会执行一次，
  //从这个页面去到下个页面，再回退回到这个页面是不会执行这个生命周期函数，他还有很多生命周期函数的，你去了解一下
  ngOnInit() {
    this.load();  //初始化数据，为什么要把请求数据这个功能放到一个函数体里面呢？是因为有可能有时候你要刷新数据的时候，可以直接调用。
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  load() {

   let  params = {
      channel: "头条",
      num: 10,
      start: 0,
      appkey: "5ac326e2546bc1a188e6936864b09fcb"
    }
    this.http.getHomeInfo(params).then(res => {
      console.log(res);
      this.common.myToast("你请求成功了",1000);
    }).catch(err =>{
      //这里是httpservice。里面ajaxHTTP方法里面reject（res）返回的数据
      console.log("网络超时，请求失败，一定要做兼容，这是请求失败的执行的代码。")
      // 这是公共的工具服务，就是有全局的弹出框。下面的调用是。传入提示的文字，第二个参数是维持1s时间就会消失
      this.common.myToast("网络超时",1000);
    })
  }

  News = 'TouTiao';
  apps: any = {
    'TouTiao': [
      {
        content: 'Monopoly'
      },
      {
        content: 'Angry Birds'
      },
      {
        slides: [{
          title: "1Welcome to the Docs!",
          description: "The <b>Ionithatox with Ionic.",
          img: "<img src='assets/imgs/logo.png'>",

        },
        {
          title: "1What is Ionic?",
          description: "<b>Ionic Fr eke HTML, CSS, and JavaScript.",
          img: "<img src='assets/imgs/logo.png'>",

        },
        {
          title: "1What is Ionic Cloud?",
          description: "The <b>aging auth, and live updating.",
          img: "<img src='assets/imgs/logo.png'>",

        },
        {
          title: "1dbjsahs",
          description: "sfdsadfsafasdfhasfnasdbfjdhsfn safsafsa",
          img: "<img src='assets/imgs/logo.png'>",

        }]
      }
    ],

    'XinWen': [
      {
        content: 'Snapchat'
      },
      {
        content: 'Instagram'
      },
      {
        slides: [{
          title: "2Welcome to the Docs!",
          description: "The <b>Ionic box with Ionic.",
          img: "<img src='assets/imgs/logo.png'>",

        },
        {
          title: "What is Ionic?",
          description: "<b>Ionices de wpt.",
          img: "<img src='assets/imgs/logo.png'>",

        },
        {
          title: "What is Ionic Cloud?",
          description: "The <b>Iauth, and live updating.",
          img: "<img src='assets/imgs/logo.png'>",

        },
        {
          title: "dbjsahs",
          description: "sfdsadfsafasdfhasfnasdbfjdhsfn safsafsa",
          img: "<img src='assets/imgs/logo.png'>",

        }]
      }
    ],
    'CaiJing': [
      {
        content: 'Spotify'
      },
      {
        content: 'Pandora'
      },
      {
        slides: [{
          title: "3Welcome to the Docs!",
          description: "The <b>Ioner ut of the box with Ionic.",
          img: "<img src='assets/imgs/logo.png'>",

        },
        {
          title: "What is Ionic?",
          description: "<b>Ionic Frameles delity  JavaScript.",
          img: "<img src='assets/imgs/logo.png'>",

        },
        {
          title: "What is Ionic Cloud?",
          description: "The <b>Ionic Cloudls us live updating.",
          img: "<img src='assets/imgs/logo.png'>",

        },
        {
          title: "dbjsahs",
          description: "sfdsadfsafasdfhasfnasdbfjdhsfn safsafsa",
          img: "<img src='assets/imgs/logo.png'>",

        }]
      }
    ],
    'TiYu': [
      {
        content: 'fhsjafk'
      }, {
        content: 'dsafas'
      },
      {
        slides: [{
          title: "5Welcome to the Docs!",
          description: "The <b>Ionic Coma  box with Inic.",
          img: "<img src='assets/imgs/logo.png'>",

        },
        {
          title: "What is Ionic?",
          description: "<b>Ionic Framewourcees devd hile tand.",
          img: "<img src='assets/imgs/logo.png'>",

        },
        {
          title: "What is Ionic Cloud?",
          description: "form for  auth, and live uting.",
          img: "<img src='assets/imgs/logo.png'>",

        },
        {
          title: "dbjsahs",
          description: "sfdsadfsafasdfhasfnasdbfjdhsfn safsafsa",
          img: "<img src='assets/imgs/logo.png'>",

        }]
      }
    ],
    'YuLe': [
      {
        content: 'sakfjfg'
      },
      {
        content: 'dsad'
      },
      {
        slides: [{
          title: "6Welcome to the Docs!",
          description: "The <b>Ionic ox with Ionic.",
          img: "<img src='assets/imgs/logo.png'>",

        },
        {
          title: "What is Ionic?",
          description: "<b>Ionic FramewiCSS, ancript.",
          img: "<img src='assets/imgs/logo.png'>",

        },
        {
          title: "What is Ionic Cloud?",
          description: "The <b>Iopnagi nat auth,updating.",
          img: "<img src='assets/imgs/logo.png'>",

        },
        {
          title: "dbjsahs",
          description: "sfdsadfsafasdfhasfnasdbfjdhsfn safsafsa",
          img: "<img src='assets/imgs/logo.png'>",

        }]
      }
    ],
    'JunShi': [
      {
        content: 'dsbajd'
      },
      {
        content: 'dsad'
      },
      {
        slides: [{
          title: "7Welcome to the Docs!",
          description: "The <b>Ionic Compout oith Ionic.",
          img: "<img src='assets/imgs/logo.png'>",
        },
        {
          title: "What is Ionic?",
          description: "<b>Ionic FCSS, and Jaipt.",
          img: "<img src='assets/imgs/logo.png'>",

        },
        {
          title: "What is Ionic Cloud?",
          description: "The  and scaling Ionic  li updating.",
          img: "<img src='assets/imgs/logo.png'>",

        },
        {
          title: "dbjsahs",
          description: "sfdsadfsafasdfhasfnasdbfjdhsfn safsafsa",
          img: "<img src='assets/imgs/logo.png'>",

        }]
      }
    ]
  };



  getItems(type: any) {
    return this.apps[type];
  }

  @ViewChild(Slides) slides: Slides;
  //解决切换其他页面回去轮播图不动问题
  ionViewWillEnter() {
    this.slides.startAutoplay();
  }
  ionViewWillLeave() {
    this.slides.stopAutoplay();
  }

}
