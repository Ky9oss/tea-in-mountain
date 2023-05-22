// pages/HaiChong/HaiChong.ts
var base64 = null
const grant_type = 'client_credentials'
const client_id = 'QIdB41xKHvxytKQzjTcrB6TI'
const client_secret = '4P2oU6LFBLhoHTYUSCymZfjZA4pod4iw'
var token = null
var apiUrl = null

Page({

  /**
   * 页面的初始数据
   */
  data: {
    btn_enable:true,
    message: 'Welcome to ImageMaster !\n Author : ZhangH.J.',
    load_logo: 'waiting',
    load_title: "等待上传图片",
    load_message: " 请上传图片",
    imageUrl:"cloud://cloud1-1g5qoncwdf499cb0.636c-cloud1-1g5qoncwdf499cb0-1310581230/0.jpg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function(res) {
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=' + grant_type + '&client_id=' + client_id + '&client_secret=' + client_secret,
      method: 'POST',
      success: function (res) {
        console.log('Request successful !')
        // console.log(res.data)
        token = res.data.access_token;
        console.log('My token is : ' + token);
      },
      fail: function (res) {
        console.log('Fail to request !')
        console.log(res);
      }
    });
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

  onTapJump1:function(){
    wx.navigateTo({
      url:"ChangJian/ChangJian",
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
      url:"FangZhi/FangZhi",
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

  get_image: function(res){
    var that = this
    that.setData({
      load_title: "正在上传",
      load_message: "正在上传图片,请稍后"      
    })
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        var tempFilePaths = res.tempFilePaths[0]
        apiUrl = 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/classification/haichong1'
        that.setData({
          imageUrl: tempFilePaths,
          load_logo: "success",
          load_message: "等待识别图片,请点击识别按钮以识别图片",
          load_title: "上传图片成功",
          btn_enable: false
        })
        console.log('My API URL is : ' + apiUrl)
        console.log('Image Path is : ' + tempFilePaths)
        // console.log(res)
        wx.getFileSystemManager().readFile({
          filePath: res.tempFilePaths[0],
          encoding: 'base64',
          // complete: res=> {
          //   console.log('complete')
          //   console.log(res)
          // },
          success: res => {
            base64 = res.data
            console.log('data:image/png;base64,' + base64)
            wx.request({
              url: apiUrl + '?access_token=' + token,
              method: 'POST',
              header: {
                'content-type': 'application/json'
              },
              data: {
                image: base64,
                top_num: 1
              },
              success: res => {
                var result = null
                var score = 0
                console.log(res.data)
                console.log(res.data.log_id)
                if(res.data.results == null) {
                  console.log(res.data.error_msg)
                  console.log(res.data.error_code)
                }else {
                  console.log(res.data.results[0])
                  result = res.data.results[0].name
                  if(result == "茶毛虫"){
                    wx.navigateTo({
                      url:"ChangJian/ChaMaoChong/ChaMaoChong"
                    })
                  }
                  else if(result == "茶尺蠖"){
                    wx.navigateTo({
                      url:"ChangJian/ChaChiHuo/ChaChiHuo"
                    })
                  }
                  else if(result == "茶丽纹象甲"){
                    wx.navigateTo({
                      url:"ChangJian/XiangJia/XiangJia"
                    })
                  }
                  else if(result == "假眼小绿叶蝉"){
                    wx.navigateTo({
                      url:"ChangJian/LvYeChan/LvYeChan"
                    })
                  }
                  else if(result == "茶橙瘿螨"){
                    wx.navigateTo({
                      url:"ChangJian/YingMan/YingMan"
                    })
                  }
                }
              },
            });
          },
        });
      },
    });
  },

  onTapJump4:function(){
    wx.navigateTo({
      url:"NongYao/NongYao",
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
  }
})