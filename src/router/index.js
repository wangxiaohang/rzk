import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Category from '@/pages/category'
import User from '@/pages/user'
import Cart from '@/pages/cart'

Vue.use(Router)

export default new Router({
  mode: 'history', // 可以是去掉#号
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
