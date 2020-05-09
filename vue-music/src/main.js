import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//样式
import "lib-flexible";//淘宝适配
import "@/styles/index.scss";//全局样式
import "@/utils/vant";//vant 按需加载
import "@/styles/fonts/iconfont.js";//symbol图标
//axios
import {axios} from "@/utils/axios"
Vue.prototype.$axios = axios;   // this.$axios = axios 

import "@/utils/all"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
