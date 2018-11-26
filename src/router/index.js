import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import Index from '@/pages/index'
import Category from '@/pages/category'
import CategoryFromId from '@/components/CategoryFromId'
import User from '@/pages/user'
import Cart from '@/pages/cart'
import Hots from '@/pages/hots'
import Topics from '@/pages/topics'
import List from '@/pages/list'
import login from '@/pages/login'
import password from '@/pages/password'

Vue.use(Router)

var router = new Router({
  mode: 'history', // 可以是去掉#号
  routes: [
    {
      path: '/',
      component: Main,
      redirect: '/index',
      children: [
        {
          path: 'index',
          component: Index
        }, {
          path: 'category',
          component: Category,
          name: 'Category',
          redirect: '/category/0',
          children: [ // 这里就是二级路由
            {
              path: '/category/:id',
              name: 'CategoryId',
              component: CategoryFromId
            }
          ]
        }, {
          path: 'cart',
          name: 'Cart',
          component: Cart
        }, {
          path: 'user',
          name: 'User',
          component: User
        }
      ]
    }, {
      path: '/hots',
      component: Hots
    }, {
      path: '/topics',
      component: Topics
    }, {
      path: '/list',
      component: List
    }, {
      path: '/login',
      component: login
    }, {
      path: '/password',
      component: password
    }
  ]
})

export default router
