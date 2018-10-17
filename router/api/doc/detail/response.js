const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = {
  "returnCode": "0000",
  "returnMsg": "成功",
  "data": {
      "content": Random.cparagraph(),
      "createTime":Random.date() + ' ' + Random.time(),
      "id|+1": 1,
      "lang": "en",
      "priv": "0",
      "status": Random.string('number', 1),
      "title": Random.ctitle(),
      "type": Random.string('number', 1)
  	}
}