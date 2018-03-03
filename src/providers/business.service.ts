import {Injectable} from '@angular/core';
import {HttpService} from "./HttpService";

@Injectable()
export class BusinessService {

  constructor(private httpService: HttpService) {
  }

  /**
   * 新闻页头条
   * @param params
   * 参数应该有调动该接口的页面传进来
   */
  getHomeInfo(params){
    let url = 'https://way.jd.com/jisuapi/get';
    //这里的打印是为了你能在谷歌看到你传的参数是否正确和地址是否正确，用于调试的。
    console.log("url: " +url + ", params: " + JSON.stringify(params))
    return this.httpService.ajaxHttp(url,params);
  }
}


//这个是调用http的统一接口文件