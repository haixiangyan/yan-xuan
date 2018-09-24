const Mock = require('mockjs');
const Random = Mock.Random;

export const comment = [{
  path: '/goods/comment/1',
  type: 'get',
  data(option) {
    let result = {
      result: 'success',
      data: {
        comment: [],
        user: []
      }
    };

    // 获取评论的内容
    for (let i = 0; i < 10; i++) {
      let comment = {
        "_id": "596b03924c0d7f1d48108ceb",
        "goodsID": 1,
        "userID": "1",
        "content": Random.csentence(20, 30),
        "commentDate": "1500185490426",
        "type": Random.ctitle(4, 7),
        "__v": 0,
        "picture": [
          "/static/img/good/comment/pic.jpg"
        ]
      };

      result.data.comment.push(comment);
    }

    // 获取评论的作者
    for (let i = 0; i < 10; i++) {
      let user = {
        "customerPicture": "/static/img/good/comment/avatar.jpg",
        "customerName": Random.cname(3, 5)
      }

      result.data.user.push(user);
    }

    return result;
  }
},
{
  path: '/shop/comment',   // 添加评论
  type: 'patch',
  data(option) {
    let result = {
      result: 'success',
      data: {
        comment: [],
        user: []
      }
    };

    console.log('add comment successfully');

    return result;
  }
}]
