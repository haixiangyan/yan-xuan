// 引入登录页面
import Login from './views/Login.vue'

// 引入 404 页面
import NotFound from './views/404.vue'

// 引入管理员页面的框架
import YanAdminHome from './views/Home.vue'

// 引入用户列表
import YanAdminUser from './views/User/User.vue'

// 引入订单列表
import YanAdminOrder from './views/Order/Order.vue'

import YanAdminCharts from './views/Charts/Charts.vue'

let routes = [{
        path: '/login', // 登录页面
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404', // 404 错误页面
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        redirect: '/user', // 用户列表页面
        component: YanAdminHome,
        name: '用户',
        iconCls: 'el-icon-message', //图标样式class
        children: [{
            path: '/user',
            component: YanAdminUser,
            name: '用户列表'
        }, ]
    },
    {
        path: '/',
        redirect: '/order', // 订单列表页面
        component: YanAdminHome,
        name: '订单',
        iconCls: 'el-icon-message', //图标样式class
        children: [{
            path: '/order',
            component: YanAdminOrder,
            name: '订单列表'
        }, ]
    },
    {
        path: '/', // 图表页面
        component: YanAdminHome,
        name: '图表',
        iconCls: 'fa fa-bar-chart',
        children: [{
            path: '/charts',
            component: YanAdminCharts,
            name: '后台图表'
        }]
    },
    {
        path: '*', // 404 错误页面
        hidden: true,
        redirect: {
            path: '/404'
        }
    }
];

export default routes;