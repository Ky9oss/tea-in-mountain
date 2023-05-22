// pages/PeiYu/ShiShi/ShiShi.ts
const APIKEY = "1ded3c6069184a00814844994c355d18"; //申请到的和风天气key
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getWeather();
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

  },

  getWeather() {
    var that = this

    wx.getLocation({
      type: 'gcj02',

      success(res) {
        that.setData({
          location: res.longitude + "," + res.latitude

        })

        that.getCityByLoaction()

        that.weather()

      }

    })

  },
  getCityByLoaction() {
    var that = this

    wx.request({
      url: 'https://geoapi.qweather.com/v2/city/lookup?key=' + APIKEY + "&location=" + that.data.location,

      success(result) {
        var res = result.data

        if (res.code == "200") {
          var data = res.location[0]

          that.setData({
            City: data.adm2,

            Province: data.adm1

          })

        } else {
          wx.showToast({
            title: '获取城市信息失败',

            icon: 'none'

          })

        }

      }

    })

  },
  weather() {
    var that = this

    wx.showLoading({
      title: '加载中',

    })

    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/now?key=' + APIKEY + "&location=" + that.data.location,

      success(result) {
        var res = result.data

        that.setData({
          temp: res.now.temp,

          text: res.now.text,

          shidu: res.now.humidity,

        })

      }

    })

    wx.hideLoading()

  },
  onTapJump1:function(){
    wx.navigateTo({
      url:"../FangAn/GaoWen/GaoWen",
      success:function(){
        console.log("jump success")
      },
      fail:function(){
        console.log("jump failed")
      },
      complete:function(){
        console.log("jump complete")
      }
    });
  },

  onTapJump2:function(){
    wx.navigateTo({
      url:"../FangAn/DiWen/DiWen",
      success:function(){
        console.log("jump success")
      },
      fail:function(){
        console.log("jump failed")
      },
      complete:function(){
        console.log("jump complete")
      }
    });
  },

  onTapJump3:function(){
    wx.navigateTo({
      url:"../FangAn/DiShi/DiShi",
      success:function(){
        console.log("jump success")
      },
      fail:function(){
        console.log("jump failed")
      },
      complete:function(){
        console.log("jump complete")
      }
    });
  },

})