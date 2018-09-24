const Mock = require('mockjs');
const Random = Mock.Random;

export const address = [{
    path: '/users/Address/-1', // 获取地址
    type: 'get',
    data(option) {
      let result = {
        result: 'success',
        data: []
      };

      for (let i = 0; i < 3; i++) {
        let address = {
          receiver: Random.cname(),
          isDefault: i === 0,
          province: Random.province(),
          city: Random.city(),
          town: Random.county(),
          detail: Random.csentence(),
          telephone: '123456789',
        };

        result.data.push(address);
      }

      return result;
    }
  },
  {
    path: '/users/address/1/0', // 删除地址
    type: 'delete',
    data(option) {
      let result = {
        result: 'success',
        data: []
      };

      console.log('delete successfully mock');

      return result;
    }
  },
  {
    path: '/users/changeAddress', // 编辑地址
    type: 'post',
    data(option) {
      let result = {
        result: 'success',
        data: []
      };

      console.log('edit successfully mock');

      return result;
    }
  },
    {
    path: '/users/addAddress', // 新添地址
    type: 'post',
    data(option) {
      let result = {
        result: 'success',
        data: []
      };

      console.log('add successfully mock');

      return result;
    }
  }
]
