// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init();

const db = cloud.database();

exports.main = async (event, context) => {
  const uploadImages = db.collection("uploadImages");
  let { OPENID } = cloud.getWXContext();
  try {
    var Urls = await uploadImages.where({
      user: OPENID
    }).get();
    return {
      state: true,
      message: "get image url list successed",
      data: Urls
    }
  } catch (e) {
    return {
      state: false,
      message: "get image url list failed",
      error_message: e
    }
  }
}