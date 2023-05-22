// pages/PeiYu/Share/Detail/Detail.ts
/*
const db2 = wx.cloud.database();
const articles2 = db2.collection("Articles");
Page({


    data: {
        article:"" as any,
        id:"",
        text:"",
    },
    inputs:function(e:any){
        this.data.text = e.detail.value;
    },
    commit:function(){
        let comments = this.data.article.comments;
        comments.push(this.data.text);
        articles2.doc(this.data.id).update({
            data:{
                comments:comments,
            }
        })
        wx.redirectTo({url:"../Detail/Detail?id="+this.data.id});
    },

    onLoad(options) {
        console.log(options);
        articles2.where({_id:options.id}).get().then(res=>{
            this.setData({
                article:res.data[0],
                id:options.id,
            })
            console.log(this.data.article)
        })

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
})*/