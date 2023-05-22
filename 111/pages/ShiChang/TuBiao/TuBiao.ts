const echarts = require("../../../utils/ec-canvas/echarts");
const db3 = wx.cloud.database();
const records = db3.collection("Records");
const app = getApp();
let data:Array<{value:number,name:String}>=[];
let pay:number;
let type:string;
let get:number;

function initChart(canvas:any, width:any, height:any, dpr:any) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    series: [{
      label: {
        normal: {
          fontSize: 10
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['20%', '70%'],
      data: data,
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
        onInit:initChart,
    },
    out:0,
    // rec:data,
  },
  inputs:function(e:any){
    type=e.detail.value;
  },
  inputs2:function(e:any){
    pay = Number(e.detail.value);
  },
  inputs3:function(e:any){
    get = Number(e.detail.value);
  },
  commit:function(){
    if(type==null||pay==null||type==""||pay==NaN){
      return;
    }
    wx.cloud.callFunction({
      name:'quickstartFunctions',
      data:{
        type:'getOpenId',
      }
    }).then(res=>{
      let openid =(res.result as any).openid;
      records.where({
        _openid:openid,
      }).limit(1).get().then(res2=>{
        // console.log(res2);
        if(res2.data.length==0){
          //没有数据，添加一条
          let map = [{value:pay,name:type}]
          records.add({
            data:{
              map:map,
            }
          }).then(()=>{
              data = map;
            wx.redirectTo({url:"./TuBiao"});
          })
        }else{
          // console.log(res2.data[0].map);
          let _map:any =res2.data[0].map;
          let flag =false;
          for (let i = 0 ; i<_map.length;i++){
            if(_map[i].name==type){
              flag = true;
              _map[i].value=Number( _map[i].value+pay);
            }
          }
          if(!flag){
            _map.push({
              value:pay,
              name:type,
            })
          }
          // console.log((res2 as any).data._id);
          records.doc((res2 as any).data[0]._id).update({
            data:{
              map:_map,
            }
          }).then(()=>{
              data=_map;
            wx.redirectTo({url:"./TuBiao"});
          })
        }
      })
    })
    
  },
  commit2:function(){
    if(get==null||get==NaN){
      return;
    }
    wx.cloud.callFunction({
      name:'quickstartFunctions',
      data:{
        type:'getOpenId',
      }
    }).then(res=>{
      let openid =(res.result as any).openid;
      records.where({
        _openid:openid,
      }).limit(1).get().then(res2=>{
        // console.log(res2);
        if(res2.data.length==0){
          //没有数据，添加一条
          records.add({
            data:{
              get:get,
            }
          }).then(()=>{
              this.setData({
                get:get,
              })
          })
        }else{
          // console.log((res2 as any).data._id);
          let all:number;
          if(res2.data[0].get!=null){
            all = res2.data[0].get + get;
          }else{
            all = get;
          }
          records.doc((res2 as any).data[0]._id).update({
            data:{
              get:all,
            }
          }).then(()=>{
            console.log("all"+all);
            this.setData({
              get:all,
            })
          })
        }
      })
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(option) {
    if(option.re=="1"){
      wx.redirectTo({url:"./huanchong/huanchong"})//奇怪的修bug的方法
    }
    wx.cloud.callFunction({
      name:'quickstartFunctions',
      data:{
        type:'getOpenId',
      }
    }).then(res=>{
      let openid =(res.result as any).openid;
      records.where({
        _openid:openid,
      }).limit(1).get().then(res=>{
        data = res.data[0].map as Array<{value:number,name:String}>;
        // console.log("get"+res.data[0].get);
        let tmp=0;
        for(let i=0;i<data.length;i++){
          tmp+=data[i].value;
        }
        this.setData({
          onInit:initChart,
          out:tmp,
          get:res.data[0].get,
        })
      })
      
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})