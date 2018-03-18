import { Injectable } from '@angular/core';

/**
 * 基于Token认证，在前后端分离非常普通，本身只提供一个接口的形式展示如果优雅处理HTTP请求
 * 为什么不用@ionic/storage呢？理由：它的获取和设置都是异步的，token的提取和设置必须要同步才能保证程序正常运行
 * 现在用h5的本地存储的api。localStorage
 */
const key = {
    city: "city",
    cityArray: "cityArray",
    isShowWhiteDays: 'isShowWhiteDay',
    todayWeather: 'todayWeather'
}
@Injectable()
export class TokenService {

    constructor(
      ) { }
    /**
     * 
     * 保存城市地点信息
     */
    set localData(value: string) {
        localStorage.setItem(key.city, value);
    }
    /**
     * 获取城市地点信息
     */
    get localData(): string {
        return localStorage.getItem(key.city);
    }
    /**
     * 
     * 保存城市地点信息
     */
    set localDataArray(value: any) {
        localStorage.setItem(key.cityArray, value);
    }
    /**
     * 获取城市地点信息
     */
    get localDataArray(): any {
        return localStorage.getItem(key.cityArray);
    }

     /**
     * 
     * 是否显示白天
     */
    set isShowWhiteDay(value: any) {
        localStorage.setItem(key.isShowWhiteDays, value);
    }
    /**
     * 是否显示白天
     */
    get isShowWhiteDay(): any {
        return localStorage.getItem(key.isShowWhiteDays);
    }

    /**
     * 
     * 记录当天的天气
     */
    set todayWeather(value: any) {
        localStorage.setItem(key.todayWeather, value);
    }
    /**
     * 是否显示白天
     */
    get todayWeather(): any {
        return localStorage.getItem(key.todayWeather);
    }
   
}
