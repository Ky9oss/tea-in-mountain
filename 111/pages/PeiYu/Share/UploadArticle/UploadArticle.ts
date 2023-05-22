// pages/PeiYu/Share/UploadArticle/UploadArticle.ts
/*import photo from "../../../../utils/changePhoto"
const db = wx.cloud.database();
const article = db.collection("Articles");  
Page({

    data: {
        photoList:[],
        fileIds:[] as Array<String>,
        title:"",
        text:"",
        type:"经验分享",
        name2:'111',
    },
      //调起手机相册拍照弹窗选择
  changePhoto(){
    photo.getPhoto().then(res=>{
      return res==1?photo.album():photo.camera();
    })
    //选择好照片之后的回调
    .then(res=>{
      console.log(res)
      let photoList = this.data.photoList.concat(res);
      this.setData({photoList})
    })
  },
  //图片预览
  previe(e:any){
    let idx = e.currentTarget.dataset.idx;
    let photoList = this.data.photoList;
    wx.previewImage({
      current:photoList[idx],
      urls: photoList
    });
  },
  //长按删除
  long(e:any){
    let idx = e.currentTarget.dataset.idx;
    wx.showModal({
      content: '确定删除吗？',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3c7cfc',
      success: (result) => {
        if(result.confirm){
          this.data.photoList.splice(idx,1);
          let photoList = this.data.photoList;
          this.setData({photoList})
        }
      },
    });
  },
  inputs2:function(e:any){
    this.data.title = e.detail.value;
  },
  inputs:function(e:any){
    this.data.text = e.detail.value;
  },

  upload:function(){
    wx.showToast({
      title: '分享中',
      icon: 'loading',
      duration:10000,
    })
    if(this.data.photoList.length==0){
      article.add({
        data:{
          title:this.data.title,
          text:this.data.text,
          type:this.data.type,
          fileIds:this.data.fileIds as Array<String>,
          comments:new Array
        }
      })
    }
    for(let i=0;i<this.data.photoList.length;i++){
      wx.cloud.uploadFile({
        cloudPath: 'uploadImage/' + (new Date()).getTime().toString() + '.jpeg',
        filePath: this.data.photoList[i],
      }).then(res=>{
        console.log("!"+res.fileID);
        this.data.fileIds.push(res.fileID);
        // console.log(this.data.fileIds);
      }).then(()=>{
        if(i==this.data.photoList.length-1){
          article.add({
            data:{
              title:this.data.title,
              text:this.data.text,
              type:this.data.type,
              fileIds:this.data.fileIds as Array<String>,
              comments:new Array
            }
          })
        }
      })
    }
    console.log(this.data.fileIds  as Array<String>);
    // wx.redirectTo({url:"../../Share/Share"});
    wx.navigateBack();
  },

    onLoad: function () {
      let that = this;
      // 获取用户信息
      wx.showModal({
        title: '是否获取您的账号信息？',
        content: '用于发表评论',
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
            wx.getSetting({
              success(res) {
               // console.log("res", res)
               if (res.authSetting['scope.userInfo']) {
                console.log("已授权=====")
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                wx.getUserInfo({
                 success(res) {
                  console.log("获取用户信息成功", res.userInfo.nickName)
                  that.setData({
                   name2: res.userInfo.nickName,
                  })
                 },
                 fail(res) {
                  console.log("获取用户信息失败", res)
                 }
                })
               } else {
                console.log("未授权=====")
               //  that.showSettingToast("请授权")
               }
              },
             })
            console.log('用户点击确定')
          } else {//这里是点击了取消以后
            console.log('用户点击取消')
            that.setData({
              name2: "匿名用户",
             })
          }
        }
      })
      wx.getSetting({
       success(res) {
        // console.log("res", res)
        if (res.authSetting['scope.userInfo']) {
         console.log("已授权=====")
         // 已经授权，可以直接调用 getUserInfo 获取头像昵称
         wx.getUserInfo({
          success(res) {
           console.log("获取用户信息成功", res.userInfo.nickName)
           that.setData({
            name2: res.userInfo.nickName,
           })
          },
          fail(res) {
           console.log("获取用户信息失败", res)
          }
         })
        } else {
         console.log("未授权=====")
        //  that.showSettingToast("请授权")
        }
       },
      })
     },
    jingyan:function(){
      this.data.type="来自"+this.data.name2+"的经验分享";
    },
    wenti:function(){
      this.data.type="来自"+this.data.name2+"的问题求助";
    },
     


    onReady() {

    },


    onShow() {

    },


    onHide() {

    },


    onUnload() {

    },

    onPullDownRefresh() {

    },


    onReachBottom() {

    },


    onShareAppMessage() {

    }
})
*/