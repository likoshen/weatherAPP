import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { CommonService } from "./CommonService";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout'
import * as $ from "jquery";
@Injectable()
export class HttpService {
  private loading;
  private timeout;
  private requestTime = 0;//同一时间发起了多少次请求

  constructor(private http: Http, private commonService: CommonService, private jsonp: Jsonp) {
  }

  public httpPost(url: string, param: any) {
    let newParams = this.transformParams(param);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    if (!param || (param && (param.noLoading == undefined || !param.noLoading))) {
      if (!this.loading) {
        this.loading = this.commonService.loading();
      }
    }
    return this.http.post(url, newParams, options).timeout(10000).toPromise()
      .then(res => {
        let body = res.json();
        console.log(body)
        if (this.loading) {
          this.loading.dismiss();
          this.loading = null;
        }
        return body || {};
      }
      )
      .catch(err => {
        this.handleError(err);
        if (this.loading) {
          this.loading.dismiss();
          this.loading = null;
        }
        if (err.name && err.name == "TimeoutError") {
          this.commonService.myToast("网络超时，请稍后再试");
        }
      });
  }

  /**
   * 
   * @param url get方法的url
   * @param param 
   */
  public httpGet(url: string, param: any): Promise<any> {
    // https://way.jd.com/jisuapi/get?channel=头条&num=10&start=0&appkey=您申请的APPKEY
    //看好这个get请求的特色，前面ip地址，【？】后面是你所要带的参数。所以我们这个get的请求方法中。对传进来的url和参数，拼接成一个get请求的地址，如上面的地址格式
    console.log(this.transformParams(param))
    let _str = this.transformParams(param);

    let URL = url + "?" + "callback=JSONP_CALLBACK&" + _str;
    let myServe = "http://localhost:8888/201712/cgj_html/public/index/index/getdata";
    console.log("你当前请求的get地址是==" + URL);
    if (!param || (param && (param.noLoading == undefined || !param.noLoading))) {
      if (!this.loading) {
        this.loading = this.commonService.loading();
      }
    }
    return this.http.post(myServe, { url: URL }).timeout(10000).toPromise()
      .then(res => {
        let body = res.json();
        console.log(body)
        if (this.loading) {
          this.loading.dismiss();
          this.loading = null;
        }
        return body || {};
      }
      )
      .catch(err => {
        this.handleError(err);
        if (this.loading) {
          this.loading.dismiss();
          this.loading = null;
        }
        if (err.name && err.name == "TimeoutError") {
          this.commonService.myToast("网络超时，请稍后再试");
        }
      });
  }
  /**
   * requestTime这个用来判断一个页面假如同时发起两个请求，因为请求都是异步，不知道谁响应的比较快，所以思路就是每次请求进来，this.requestTime
   * 的次数都会加一，然后谁先响应谁先走，最后一个响应的，就关闭loading界面。提高用户体验。
   * @param url 
   * @param params 
   */
  public ajaxHttp(url: string, params: any) {
    this.requestTime++; //一个页面有多少个请求
    let _str = this.transformParams(params);
    let URL = url + "?" + _str;
    this.loading = this.commonService.loading();//打开loading界面
    let that = this;
    let promise = new Promise((resolve, reject) => {
      $.ajax({
        dataType: "json",
        type: "post",
        url: 'http://111.231.253.123/ajaxData.php',
        data: {
          url: URL
        },
        success: function (res) {
          //先判断是否只有一次请求
          if (that.requestTime == 1) {
            that.loading.dismiss();
            that.loading = null;
            that.requestTime -= 1;
          } else {//如果有多个请求，不做任何处理
            that.requestTime -= 1;
          }
          resolve(res);
        },
        error: function (res) {
          //初始化数据
          if (that.loading) {
            that.loading.dismiss();
            that.loading = null;
          }
          that.timeout = null;
          that.requestTime = 0;
          reject(res);
        }
      });
    })
    return promise;
  }
  private handleError(error: Response) {
    console.log("Server Error: " + error);
    return Promise.reject(error);
  }

  private transformParams(data) {
    let param = function (obj) {
      let query = '';
      let name, value, fullSubName, subName, subValue, innerObj, i;
      for (name in obj) {
        value = obj[name];
        if (value instanceof Array) {
          for (i = 0; i < value.length; ++i) {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        } else if (value instanceof Object) {
          for (subName in value) {
            subValue = value[subName];
            fullSubName = name + '[' + subName + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        } else if (value !== undefined && value !== null) {
          query += encodeURIComponent(name) + '='
            + encodeURIComponent(value) + '&';
        }
      }
      return query.length ? query.substr(0, query.length - 1) : query;
    };
    return String(data) !== '[object File]' ? param(data) : data;
  }
}
