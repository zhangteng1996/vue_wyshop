
// 路由器模块

import Index from '../pages/Index/Index.vue'
import Cate from '../pages/Cate/Cate.vue'
import Cart from '../pages/Cart/Cart.vue'
import Topic from '../pages/Topic/Topic.vue'
import CateList from '../pages/Cate/CateList.vue'
import Login from '../pages/Login/Login.vue'
import PhoneLogin from '../pages/Login/PhoneLogin.vue'
import Search from '../pages/Search/Search.vue'


export default [
  {
    path: '/',
    component: Index,
  },

  {
    path: '/cate',
    component: Cate,
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
    path: '/topic',
    component: Topic,
  },

  {
    path: '/cart',
    component: Cart
  },

  {
    path: '/login',
    component: Login,
    meta: {
      isShow: false
    },
    children: [
      // 二级路由
      {
        name: 'loginByPhone',
        path: '/login/phone',
        component: PhoneLogin,
      },
    ]
  },

  {
    path: '/search',
    component: Search,
  }
]
