// pages/start/XinShou/XinShou.ts
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

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.videoContext = wx.createVideoContext('Video',this)
    this.videoContext.play()
    this.videoContext.requestFullScreen({
      direction: 0
    })
  },

  endAction: function () {
		this.videoContext = wx.createVideoContext('Video', this);
		wx.navigateBack({
      delta: 1
    }); //退出页面
},

screenChange(e){
  let fullScreen = e.detail.fullScreen //值true为进入全屏，false为退出全屏
  /*if (!fullScreen ){ //退出全屏
		wx.navigateBack({
      delta: 1
    });
  }*/
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