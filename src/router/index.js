import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import Index from '@/pages/index'
import Category from '@/pages/category'
import CategoryFromId from '@/components/CategoryFromId'
import User from '@/pages/user'
import Cart from '@/pages/cart'

Vue.use(Router)

export default new Router({
  mode: 'history', // 可以是去掉#号
  routes: [
    {
      path: '/',
      redirect: '/main/index'
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'index',
          component: Index
        }, {
          path: 'category',
          name: 'Category',
          component: Category,
          children: [ // 这里就是二级路由
            {
              path: 'category/:id',
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
    }
  ]
})
