const Mock = require('mockjs');
const Random = Mock.Random;

export const cart = [{
    path: '/shop/cart/-1', // 获取购物车的列表
    type: 'get',
    data(option) {
      let result = {
        result: 'success',
        data: []
      };

      for (let i = 0; i < 3; i++) {
        let cartItem = {
          "ID": (i + 1),
          "name": Random.ctitle(7, 9),
          "type": Random.ctitle(4, 6),
          "number": Random.natural(1, 3),
          "price": Random.natural(20, 2000),
          "picture": `static/img/cart/cartItem.png`
        }

        result.data.push(cartItem);
      }

      return result;
    }
  },
  {
    path: '/shop/addToCart', // 将商品添加到购物车
    type: 'post',
    data(option) {
      console.log('add to cart mock', option);

      let result = {
        result: 'success',
        data: {}
      };

      return result;
    }
  },
  {
    path: '/shop/cart/1/1', // 将商品从购物车删除
    type: 'delete',
    data(option) {
      console.log('delete good from cart mock', option);

      let result = {
        result: 'success',
        data: {}
      };

      return result;
    }
  },
  {
    path: '/shop/changeCart', // 编辑购物车
    type: 'post',
    data(option) {
      console.log('finish edit mock', option);

      let result = {
        result: 'success',
        data: {}
      };

      return result;
    },
  },
  {
    path: '/shop/order', // 生成订单
    type: 'post',
    data(option) {
      console.log('order created mock', option);

      let result = {
        result: 'success',
        data: {}
      };

      return result;
    },
  },
  {
    path: '/goods/order', // 立即生成订单
    type: 'post',
    data(option) {

      console.log('order created right now mock', option);

      let result = {
        result: 'success',
        data: {}
      };

      return result;
    },
  },
  {
    path: '/shop/pay',  // 支付
    type: 'post',
    data(option) {
      console.log('支付成功');
    }
  }
]
