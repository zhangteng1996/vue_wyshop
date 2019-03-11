// 路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/Index/Index.vue'
import Cart from '../pages/Cart/Cart.vue'
import Cate from '../pages/Cate/Cate.vue'
import CateList from '../pages/Cate/CateList.vue'
import Search from '../pages/Search/Search.vue'
import Topic from '../pages/Topic/Topic.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:Index
    },
    {
      path:'/Cart',
      component:Cart
    },
    {
      path:'/Cate',
      component:Cate,
      redirect: '/cate/cateList',
      children: [
        {
          name: 'cateList',
          path: '/cate/cateList',
          component: CateList,
        }
      ]
    },
    {
      path:'/Search',
      component:Search
    },
    {
      path:'/Topic',
      component:Topic
    },
    {
      path:'/Login',
      component:Login
    },
  ]
})


