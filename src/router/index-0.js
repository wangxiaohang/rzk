import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'

import First from '@/pages/first'
import Category from '@/pages/category'
import User from '@/pages/user'
import Cart from '@/pages/cart'

import Hots from '@/pages/hots'

Vue.use(Router)

export default new Router({
  mode: 'history', // 可以是去掉#号
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/rzk',
      name: 'Index',
      component: Index,
      children: [ // 这里就是二级路由
        {
          path: '/rzk/',
          name: 'First',
          component: First
        },
        {
          path: '/rzk/category',
          name: 'Category',
          component: Category
        },
        {
          path: '/rzk/cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: '/rzk/user',
          name: 'User',
          component: User
        }
      ]
    },
    {
      path: '/hot',
      name: 'Hots',
      component: Hots
    }
  ]
})
