const myaudio = wx.createInnerAudioContext();
var dataObj = require("../../../../data/detail4Data.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isplay: true,// 是否播放
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.setData({
      detail4List:dataObj.detail4List
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
    myaudio.src = 'cloud://cloud1-1g5qoncwdf499cb0.636c-cloud1-1g5qoncwdf499cb0-1310581230/detail4.mp3';
    myaudio.play();
  },

  //播放
  play: function () {
    myaudio.play();
    console.log(myaudio.duration);
    this.setData({
      isplay: true
    });
  },
  
  // 停止
  stop: function () {
    myaudio.pause();
    this.setData({
      isplay: false
    });
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
    myaudio.stop();
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