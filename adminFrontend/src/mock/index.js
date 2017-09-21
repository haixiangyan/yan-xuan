import Mock from 'mockjs';

// 管理员登录
import { login } from './data/login.js';

// 订单的获取
import { order } from './data/order.js';

// 用户的获取
import { user } from './data/user.js';

// 获取图表
import { chart } from './data/chart.js';

let data = [].concat(
    login,
    user,    
    order,
    chart
);
 

data.forEach((res) => {
    Mock.mock(res.path, res.type, res.data);
})

export default Mock;