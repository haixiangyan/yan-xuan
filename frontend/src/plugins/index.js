import Vue from 'vue'

// 引入 Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// 引入 vue-resouce
import VueResource from 'vue-resource'

// 使用 Element UI 插件
Vue.use(ElementUI);
// 使用 vue-resouce
Vue.use(VueResource);
Vue.http.options.emulateJSON = true