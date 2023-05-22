var dataObj = require("../../../data/zhuanjia2.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  ToDetail1(event){
    wx.navigateTo({
      url: 'CeLue1/CeLue1',
    })
  },

  ToDetail2(event){
    wx.navigateTo({
      url: 'CeLue2/CeLue2',
    })
  },

  ToDetail3(event){
    wx.navigateTo({
      url: 'CeLue3/CeLue3',
    })
  },

  ToDetail4(event){
    wx.navigateTo({
      url: 'CeLue4/CeLue4',
    })
  },

  ToDetail5(event){
    wx.navigateTo({
      url: 'CeLue5/CeLue5',
    })
  },

  ToDetail6(event){
    wx.navigateTo({
      url: 'CeLue6/CeLue6',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.setData({
      zhuanjia2List:dataObj.zhuanjia2List
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