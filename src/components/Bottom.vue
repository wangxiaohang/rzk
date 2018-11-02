<template>
  <div id="app-bottom">
    <Icon v-for="(todo,index) in IconData" :Icon="todo" @click="change(index)" :key="index"></Icon>
  </div>
</template>
<script>
import IconURL0 from '../assets/page_none.png'
import IconURL1 from '../assets/list_none.png'
import IconURL2 from '../assets/shopcar_none.png'
import IconURL3 from '../assets/mine_none.png'
import Icon from '@/components/Icon.vue'

export default {
  name: 'Bottom',
  data () {
    return {
      IconData: [{
        des: '首页',
        href: '/rzk/',
        Url: IconURL0
      },
      {
        des: '分类列表',
        href: '/rzk/category',
        Url: IconURL1
      },
      {
        des: '购物车',
        href: '/rzk/cart',
        Url: IconURL2
      },
      {
        des: '我的',
        href: '/rzk/user',
        Url: IconURL3
      }]
    }
  },
  components: {
    Icon
  },
  methods: {
    change: function (index) {
      console.info(index)
    }
  }
}
</script>
<style>
  #app-bottom {
    width: 100%;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    z-index: 99;
    background-color: #fff;
  }

  #app-bottom div.icon {
    float: left;
    width: 25%;
    height: 70px;
  }

  #app-bottom .icon a img {
    width: 40px;
    height: auto;
  }

  #app-bottom .icon a p {
    width: 100%;
    color: #2f2f2f;
    font-size: 12px;
  }
  .roter-link-active{
    color:red;
  }
</style>
