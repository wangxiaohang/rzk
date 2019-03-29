<template>
  <div class="bottom" id='app-bottom'>
    <router-link class="item" v-for="(item,index) in IconData" :key="index" :to="bottomClickFn(item.href)">
      <img :src="item.urlNone" class="none" />
      <img :src="item.urlActive" class="active" />
      {{ item.des }}
    </router-link>
  </div>
</template>
<script>
import IconURL0 from '@/assets/img/page_none.png'
import IconURL1 from '@/assets/img/list_none.png'
import IconURL2 from '@/assets/img/shopcar_none.png'
import IconURL3 from '@/assets/img/mine_none.png'
import IconURL4 from '@/assets/img/page_active.png'
import IconURL5 from '@/assets/img/list_active.png'
import IconURL6 from '@/assets/img/shopcar_active.png'
import IconURL7 from '@/assets/img/mine_active.png'

export default {
  name: 'Bottom',
  data () {
    return {
      IconData: [{
        des: '首页',
        href: '/index',
        urlNone: IconURL0,
        urlActive: IconURL4
      }, {
        des: '分类列表',
        href: '/category/0',
        urlNone: IconURL1,
        urlActive: IconURL5
      }, {
        des: '购物车',
        href: '/cart',
        urlNone: IconURL2,
        urlActive: IconURL6
      }, {
        des: '我的',
        href: '/user',
        urlNone: IconURL3,
        urlActive: IconURL7
      }]
    }
  },
  methods: {
    bottomClickFn: function (url) {
      const num = this.$route.params.id ? this.$route.params.id : 0
      if (url === '/category/0') {
        return '/category/' + num
      } else {
        return url
      }
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
    z-index: 9999;
    background-color: #fff;
    -webkit-appearance: none;
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);
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
</style>
