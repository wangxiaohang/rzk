<template>
<div class="app">
  <div class="content">
    <router-view></router-view>
  </div>
  <div class="bottom">
    <router-link class="item" v-for="(item,index) in IconData" :key="index" :to="item.href">
      <img :src="item.urlNone" class="none" />
      <img :src="item.urlActive" class="active" />
      {{ item.des }}
    </router-link>
  </div>
</div>
</template>
<style lang="stylus" scoped>
.app
  width 100%
  height 100%
  overflow hidden
  position relative

.content
  padding 0px 8px 68px
  width 100%
  position absolute
  top 0
  bottom 60px
  overflow auto

.bottom
  position absolute
  bottom 0
  display flex
  width 100%
  padding 6px 0
  height 60px
  background #fff

  .item
    display block
    width 25%
    text-align center
    font-size 12px
    line-height 20px

    img
      margin 0 auto
    img.none
      display block
    img.active
      display none

  .item.router-link-active
    img.none
      display none
    img.active
      display block
</style>
<script>
import IconURL0 from './assets/img/page_none.png'
import IconURL1 from './assets/img/list_none.png'
import IconURL2 from './assets/img/shopcar_none.png'
import IconURL3 from './assets/img/mine_none.png'
import IconURL4 from './assets/img/page_active.png'
import IconURL5 from './assets/img/list_active.png'
import IconURL6 from './assets/img/shopcar_active.png'
import IconURL7 from './assets/img/mine_active.png'

export default {
  data () {
    return {
      IconData: [{
        des: '首页',
        href: '/index',
        urlNone: IconURL0,
        urlActive: IconURL4
      },
      {
        des: '分类列表',
        href: '/category/0',
        urlNone: IconURL1,
        urlActive: IconURL5
      },
      {
        des: '购物车',
        href: '/cart',
        urlNone: IconURL2,
        urlActive: IconURL6
      },
      {
        des: '我的',
        href: '/user',
        urlNone: IconURL3,
        urlActive: IconURL7
      }]
    }
  },
  methods: {
    change: function (index) {
      console.info(index)
    }
  }
}
</script>
