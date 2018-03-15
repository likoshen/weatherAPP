export class Weather{
    qing: boolean;
    yin: boolean;
    wu: boolean;
    yu: boolean;
    zhenyu: boolean;
    xiaoyu: boolean;
    xiaoyuzhuanzhongyu: boolean;
    zhongyu: boolean;
    zhongyuzhuandayu:boolean;
    dayu: boolean;
    baoyu: boolean;
    baoyuzhuandabaoyu: boolean;
    dabaoyu: boolean;
    dabaoyuzhuantedabaoyu: boolean;
    tedabaoyu: boolean;
    leizhenyu: boolean;
    /**
     * 
     * @param qing 晴
     * @param yin 阴
     * @param wu 雾
     * @param yu 雨
     * @param zhenyu 阵雨
     * @param xiaoyu 小雨
     * @param xiaoyuzhuanzhongyu 小雨转中雨
     * @param zhongyu 中雨
     * @param zhongyuzhuandayu 中雨转大雨 
     * @param dayu 大雨
     * @param baoyu 暴雨
     * @param baoyuzhuandabaoyu 暴雨转大暴雨
     * @param dabaoyu 大暴雨
     * @param dabaoyuzhuantedabaoyu  大暴雨转特大暴雨
     * @param tedabaoyu 特大暴雨
     * @param leizhenyu 雷阵雨
     */
    constructor(
        qing: boolean,
        yin: boolean,
        wu: boolean,
        yu: boolean,
        zhenyu: boolean,
        xiaoyu: boolean,
        xiaoyuzhuanzhongyu: boolean,
        zhongyu: boolean,
        zhongyuzhuandayu:boolean,
        dayu: boolean,
        baoyu: boolean,
        baoyuzhuandabaoyu: boolean,
        dabaoyu: boolean,
        dabaoyuzhuantedabaoyu: boolean,
        tedabaoyu: boolean,
        leizhenyu: boolean,
    ){
      this.qing = qing;
      this.yin = yin;
      this.wu =wu;
      this.yu = yu;
      this.zhenyu = zhenyu;
      this.xiaoyu = xiaoyu;
      this.xiaoyuzhuanzhongyu = xiaoyuzhuanzhongyu;
      this.zhongyu = zhongyu;
      this.zhongyuzhuandayu = zhongyuzhuandayu;
      this.dayu = dayu;
      this.baoyu = baoyu;
      this.baoyuzhuandabaoyu = baoyuzhuandabaoyu;
      this.dabaoyu = dabaoyu;
      this.baoyu = baoyu;
      this.dabaoyuzhuantedabaoyu = dabaoyuzhuantedabaoyu;
      this.tedabaoyu = tedabaoyu;
      this.leizhenyu = leizhenyu;
    }
}