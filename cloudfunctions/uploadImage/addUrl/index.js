// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init({env:'windnegev-3gsitnz768fff7de'});
//cloud.init();
const db = cloud.database({env: cloud.DYNAMIC_CURRENT_ENV});
//const db = cloud.database();
/**
 * 云数据库相关内容可以参考：https://www.ourspark.org/point/course_content/602df4b15165a14f347bb48b,%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%91%E5%BC%80%E5%8F%91,%E4%BA%91%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9C%8D%E5%8A%A1
 */ 
exports.main = async (event, context) => {
  const uploadImages = db.collection("uploadImages");
  let { OPENID } = cloud.getWXContext();
  try {
    await uploadImages.add({
      data: {
        user: OPENID,
        file_id: event.fileID
      }
    });
    return {
      state: true,
      message: "add image url successed"
    };
  } catch (err) {
    console.log("err in addurl"+err);
    return {
      state: false,
      message: "add image url failed",
      error_message: err
    }
  }
  
}

