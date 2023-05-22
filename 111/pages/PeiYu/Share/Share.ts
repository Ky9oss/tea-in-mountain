// pages/PeiYu/Share/Share.ts
/*
const db = wx.cloud.database();
const articles = db.collection("Articles");
Page({
  

  data: {
    num:5,
    articles:[] as Array<{}>,
    test:[1,2,3,45,56,6,7,6]
  },
  onTapJump1:function(){
    wx.navigateTo({url:"./UploadArticle/UploadArticle"})
  },
  bottom:function(){
    articles.limit(this.data.num+5).get().then(res=>{
      this.data.num= this.data.num+5;
      this.setData({
        articles:res.data,
      })
    })
  },

  details:function(e:any){
    console.log(e.currentTarget.dataset.word);//获得的id
    // wx.navigateTo({url:"../Share/Detail/Detail"});
    wx.navigateTo({url:"../Share/Detail/Detail?id="+e.currentTarget.dataset.word});
  },
  onLoad() {
    let that =this;
    articles.limit(this.data.num).get({
      success:function(res){
        that.setData({
          articles:res.data
        })
      }
    })
    console.log(that.data);
  },


  onReady() {
  },


  onShow() {
    let that =this;
    articles.limit(this.data.num).get({
      success:function(res){
        that.setData({
          articles:res.data
        })
      }
    })
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
})*/