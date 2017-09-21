// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
Vue.http.options.emulateJSON = true;

// 使用插件
import './plugins'
// 使用 mock 数据
import './mock'

// 引入公用的 CSS 样式
import '@/commons/font-awesome-4.7.0/css/font-awesome.min.css'
import '@/commons/animate.css/'
import "@/commons/reset.css"
import '@/commons/main.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
