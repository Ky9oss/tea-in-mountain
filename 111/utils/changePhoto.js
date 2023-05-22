function getPhoto() {
    return new Promise((resolve, reject) => {
        wx.showActionSheet({
            itemList: ['拍照', '手机相册选择'],
            success: (res) => {
                resolve(res.tapIndex);
            },
        })
    })
};
function album(num=9) {//设置默认最大选择9张，当需要选择一张或者小于3张时，可以接受参数
    return new Promise((resolve, reject) => {
        wx.chooseImage({
            sizeType: ['original'],
            count: num,
            sourceType: ['album'],
            success: (res) => {
                let tempFilePaths = res.tempFilePaths;
                resolve(tempFilePaths);
               
            },
        })
    })

};
function camera() {
    return new Promise((resolve, reject) => {
        wx.chooseImage({
            sizeType: ['original'],
            count: 1,
            sourceType: ['camera'],
            success: (res) => {
                resolve(res.tempFilePaths);
            },
        })
    })

};
export default {
    getPhoto,
    album,
    camera
};
