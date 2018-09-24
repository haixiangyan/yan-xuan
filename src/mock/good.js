const Mock = require('mockjs');
const Random = Mock.Random;

export const good = [{
  path: '/goods/goods/1',
  type: 'get',
  data(option) {
    let result = {
      result: 'success',
      data: [{
          "ID": 4,
          "price": Random.natural(20, 2000),
          "topName": Random.ctitle(6, 9),
          "subName": Random.ctitle(6, 8),
          "chara": Random.ctitle(4),
          "inventory": [Random.ctitle(4, 6), Random.ctitle(4, 6), Random.ctitle(4, 6), Random.ctitle(4, 6), Random.ctitle(4, 6)],
          "sale": Random.natural(20, 200),
          "category": Random.natural(3),
          "subCategory": Random.natural(3),
          "date": "1499758835010",
          "manufacturer": Random.cname(),
          "label": [{
              "type": "1",
              "title": Random.cname(4)
            },
            {
              "type": "2",
              "title": Random.cname(4)
            }
          ],
          "information": [{
              "attrName": "规格",
              "attrValue": Random.csentence(4)
            },
            {
              "attrName": "技术",
              "attrValue": Random.csentence(4)
            },
            {
              "attrName": "单元",
              "attrValue": Random.csentence(4)
            }
          ],
          "description": [
            ".static/img/good/desc/desc-1.jpg",
            ".static/img/good/desc/desc-2.jpg",
            ".static/img/good/desc/desc-3.jpg",
            ".static/img/good/desc/desc-4.jpg",
            ".static/img/good/desc/desc-5.jpg",
            ".static/img/good/desc/desc-6.jpg",
          ],
          "type": [
            Random.cname(4, 6),
            Random.cname(4, 6),
            Random.cname(4, 6),
            Random.cname(4, 6),
            Random.cname(4, 6),
            Random.cname(4, 6),
          ],
          "headImage": [
            ".static/img/good/header/head-1.jpg",
            ".static/img/good/header/head-2.jpg",
            ".static/img/good/header/head-3.jpg",
            ".static/img/good/header/head-4.jpg",
            ".static/img/good/header/head-5.jpg",
          ],
          "shortDescriptionImage": [
            ".static/img/good/short/short-1.jpg",
            ".static/img/good/short/short-2.jpg",
            ".static/img/good/short/short-3.jpg",
          ],
          "shortDescription": [
            Random.cword(4),
            Random.cword(4),
            Random.cword(4),
            Random.cword(4),
            Random.cword(4),
            Random.cword(4),
          ]
        },
        {
          "goodsID": 0,
          "userID": "1",
          "content": Random.csentence(),
          "commentDate": "1500109362086",
          "type": "红色",
          "__v": 0,
          "picture": [
            ".static/img/good/comment/pic.jpg",
            ".static/img/good/comment/pic.jpg",
          ]
        },
        {
          "customerPicture": ".static/img/good/comment/avatar.jpg",
          "customerName": Random.cname(2, 3)
        }
      ]
    }
    return result;
  }
}]
