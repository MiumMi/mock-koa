const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = {
  "returnCode": "0000",
  "returnMsg": "成功",
  "size": "15",
  "totalNumber": "30",
  "totalPage": "2",
  "page": "0",
  "first": true,
  "last": true,
  "data|1-10": [
    {
      "content": Random.cparagraph(),
      "createTime":Random.date() + ' ' + Random.time(),
      "id|+1": 1,
      "lang": "en",
      "priv": "0",
      "status": Random.string('number', 1),
      "title": Random.ctitle(),
      "type": Random.string('number', 1)
    }
  ]
}