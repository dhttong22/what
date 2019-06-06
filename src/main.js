import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueRouter from "vue-router"
Vue.prototype.$axios = axios;
//element的样式
import 'element-ui/lib/theme-chalk/index.css';

// element: 2.注册element插件
Vue.use(ElementUI)

import Login from './pages/Login.vue'

// 注册路由
Vue.use(VueRouter);

// 配置路由
const routes = [
  {path: "/login", component: Login}
];

// 路由实例
const router = new VueRouter({ routes });

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   el:'#app',
//   router,
//   render:function(createElement){
//     return createElement(App)
//   }
// })
