const addUrl = require('./addUrl')
const getUrls = require('./getUrls')

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'addUrl':
      return await addUrl.main(event, context);
    case 'getUrls':
      return await getUrls.main(event, context);
  }
}