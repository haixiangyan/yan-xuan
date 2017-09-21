const Mock = require('mockjs');
const Random = Mock.Random;

export const login = [{
  path: '/admin/login',   // 后台管理的登录
  type: 'post',
  data(option) {

    let req = JSON.parse(option.body);
    let isSuccess = true;

    // 判断是否登录成功
    if (req.account === 'admin' && req.password === '123456') {
      isSuccess = true;
    }
    else {
      isSuccess = false;
    }

    let result = {
      result: 'success',
      isSuccess: isSuccess,
      adminID: 1
    };

    return result;
  }
}]
