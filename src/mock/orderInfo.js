const Mock = require('mockjs');
const Random = Mock.Random;

export const orderInfo = [{
  path: '/shop/order/1', // 用户查看订单详情页
  type: 'get',
  data(option) {
    let result = {
      result: 'success',
      order: { 
        "orderDate": new Date().getTime(),
        "orderID": "1",
        "userID": "1",
        "expressNumber": 123123,
        "expressCompany": Random.cname(4, 6),
        "orderState": 3,
        "payID": new Date().getTime(),
        "totalFee": 50,
        "address": [{
          "province": Random.province(),
          "city": Random.city(),
          "town": Random.county(),
          "detail": Random.csentence(),
          "receiver": Random.cname(),
          "telephone": "17000218037"
        }],
        "goodsList": [{
            "ID": "1",
            "number": Random.natural(2, 4),
            "type": Random.ctitle(),
            "price": Random.natural(20, 2000),
            "name": Random.ctitle(5, 9),
            "picture": "/static/img/cart/cartItem.png"
          },
          {
            "ID": "1",
            "number": Random.natural(2, 4),
            "type": Random.ctitle(),
            "price": Random.natural(20, 2000),
            "name": Random.ctitle(5, 9),
            "picture": "/static/img/cart/cartItem.png"
          },
          {
            "ID": "1",
            "number": Random.natural(2, 4),
            "type": Random.ctitle(),
            "price": Random.natural(20, 2000),
            "name": Random.ctitle(5, 9),
            "picture": "/static/img/cart/cartItem.png"
          }
        ]
      }
    };

    return result;
  }
},
{
  path: '/shop/customerOrder/-1', // 订单的列表
  type: 'get',
  data(option) {
    let result = {
      result: 'success',
      order: [{
        "orderID": "1",
        "userID": "1",
        "expressNumber": 123123,
        "expressCompany": Random.cname(4, 6),
        "orderState": 2,
        "payID": "",
        "totalFee": 50,
        "address": [{
          "province": Random.province(),
          "city": Random.city(),
          "town": Random.county(),
          "detail": Random.csentence(),
          "receiver": Random.cname(),
          "telephone": "17000218037"
        }],
        "goodsList": [{
            "ID": "1",
            "number": Random.natural(2, 4),
            "type": Random.ctitle(),
            "price": Random.natural(20, 2000),
            "name": Random.ctitle(5, 9),
            "picture": "/static/img/cart/cartItem.png"
          },
          {
            "ID": "1",
            "number": Random.natural(2, 4),
            "type": Random.ctitle(),
            "price": Random.natural(20, 2000),
            "name": Random.ctitle(5, 9),
            "picture": "/static/img/cart/cartItem.png"
          },
          {
            "ID": "1",
            "number": Random.natural(2, 4),
            "type": Random.ctitle(),
            "price": Random.natural(20, 2000),
            "name": Random.ctitle(5, 9),
            "picture": "/static/img/cart/cartItem.png"
          },
                    {
            "ID": "1",
            "number": Random.natural(2, 4),
            "type": Random.ctitle(),
            "price": Random.natural(20, 2000),
            "name": Random.ctitle(5, 9),
            "picture": "/static/img/cart/cartItem.png"
          },
                    {
            "ID": "1",
            "number": Random.natural(2, 4),
            "type": Random.ctitle(),
            "price": Random.natural(20, 2000),
            "name": Random.ctitle(5, 9),
            "picture": "/static/img/cart/cartItem.png"
          }
        ]
      },
      {
        "orderID": "1",
        "userID": "1",
        "expressNumber": 123123,
        "expressCompany": Random.cname(4, 6),
        "orderState": 3,
        "payID": "",
        "totalFee": 50,
        "address": [{
          "province": Random.province(),
          "city": Random.city(),
          "town": Random.county(),
          "detail": Random.csentence(),
          "receiver": Random.cname(),
          "telephone": "17000218037"
        }],
        "goodsList": [{
            "ID": "1",
            "number": Random.natural(2, 4),
            "type": Random.ctitle(),
            "price": Random.natural(20, 2000),
            "name": Random.ctitle(5, 9),
            "picture": "/static/img/cart/cartItem.png"
          },
          {
            "ID": "1",
            "number": Random.natural(2, 4),
            "type": Random.ctitle(),
            "price": Random.natural(20, 2000),
            "name": Random.ctitle(5, 9),
            "picture": "/static/img/cart/cartItem.png"
          },
          {
            "ID": "1",
            "number": Random.natural(2, 4),
            "type": Random.ctitle(),
            "price": Random.natural(20, 2000),
            "name": Random.ctitle(5, 9),
            "picture": "/static/img/cart/cartItem.png"
          }
        ]
      },
      {
        "orderID": "1",
        "userID": "1",
        "expressNumber": 123123,
        "expressCompany": Random.cname(4, 6),
        "orderState": 0,
        "payID": "",
        "totalFee": 50,
        "address": [{
          "province": Random.province(),
          "city": Random.city(),
          "town": Random.county(),
          "detail": Random.csentence(),
          "receiver": Random.cname(),
          "telephone": "17000218037"
        }],
        "goodsList": [{
            "ID": "1",
            "number": Random.natural(2, 4),
            "type": Random.ctitle(),
            "price": Random.natural(20, 2000),
            "name": Random.ctitle(5, 9),
            "picture": "/static/img/cart/cartItem.png"
          },
          {
            "ID": "1",
            "number": Random.natural(2, 4),
            "type": Random.ctitle(),
            "price": Random.natural(20, 2000),
            "name": Random.ctitle(5, 9),
            "picture": "/static/img/cart/cartItem.png"
          },
          {
            "ID": "1",
            "number": Random.natural(2, 4),
            "type": Random.ctitle(),
            "price": Random.natural(20, 2000),
            "name": Random.ctitle(5, 9),
            "picture": "/static/img/cart/cartItem.png"
          }
        ]
      }
    ]
    };

    return result;
  }
},{
  path: '/shop/confirmGoods',
  type: 'post',
  data(option) {
    let result = {
      result: 'success',
      data: []
    };

    console.log('confirm order successfully');

    return result;
  }
}]
