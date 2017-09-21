import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'

// 使用 Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// 使用 Vue-Router
import VueRouter from 'vue-router'
import routes from './routes'

// 使用 Vuex
import store from './vuex'

// 使用 Mock.js
import Mock from './mock'

// 使用 font-awesome
import 'font-awesome/css/font-awesome.min.css'

// 使用 axios
import axios from 'axios';
Object.defineProperty(Vue.prototype, '$axios', { value: axios });

Vue.use(ElementUI)
Vue.use(VueRouter)

// 配置路由
const router = new VueRouter({
  routes
})

// 配置登录页面
router.beforeEach((to, from, next) => {

  // 如果进入登录页面，则清空 user 信息
  if (to.path == '/login') {
    sessionStorage.removeItem('admin');
  }
  
  // 从 session 中获取 user 的信息
  let isAdminLogin =sessionStorage.getItem('isAdminLogin');

  // 如果没有登录，则回到登录页面
  if (!isAdminLogin && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

// 引入公共的 css 样式
import '@/common/main.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

