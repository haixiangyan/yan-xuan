import Mock from 'mockjs';

// 主页面
import { home, homeStatic } from './home-intro.js';
import { homeGood } from './home-goods.js';

// 分类页面
import { category } from './category.js';

// 搜索页面
import { search } from './search.js';

// 商品详情页面
import { good } from './good.js';

// 商品的评论列表
import { comment } from './comment.js';
import { login } from './login.js'
import { topic } from './topic.js'
// 购物车
import { cart } from './cart.js';

// 地址
import { address } from './address.js';

// 用户查看的订单
import { orderInfo } from './orderInfo.js';

let data = [].concat(
    homeStatic,
    login,
    home,
    homeGood,
    category,
    search,
    good,
    comment,
    cart,
    address,
    orderInfo,
    topic
);
 

data.forEach((res) => {
    Mock.mock(res.path, res.type, res.data);
})

export default Mock;