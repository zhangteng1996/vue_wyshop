// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'



// 注册路由器
import router from './router'
// mock数据
import './mock/mockServer'
//注册store
import store from './store'
import Split from './components/Split/Split.vue'
import error from '../static/error.jpg'
import loading from '../static/loading.gif'
// 利用插件实现图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  error,
  loading
})


// 注册为全局组件标签
Vue.component('Split', Split);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template:'<App/>',
  router,
  store
})
