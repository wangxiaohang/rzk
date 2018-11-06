<template>
  <div id="cart">
    <header>
      购物车
    </header>
    <div class="cart-nodata">
      <img :src="noneURL" alt="">
      <p>
        您的购物车是空的，
        <a href="/index">去逛街</a>
      </p>
    </div>
  </div>
</template>
<script>
import noneURL from '@/assets/img/none3.png'
import Procard from '@/components/Procard.vue'
export default {
  name: 'cart',
  data () {
    return {
      noneURL: noneURL,
      hotProsInfo: [
        {
          img: '/static/img/shop1.png',
          title: '智能儿童手表',
          price: '￥50/天'
        }, {
          img: '/static/img/shop2.png',
          title: '龙卷风榨汁杯',
          price: '￥20/天'
        }, {
          img: '/static/img/shop3.png',
          title: '智能拉杆行李箱',
          price: '￥88/天'
        }
      ]
    }
  },
  created: function () {
    document.title = '购物车'
  },
  components: {
    Procard
  },
  methods: {
  }
}
</script>
<style scoped lang="stylus">
  .cart-nodata
    width 100%
    margin-top 100px
    text-align center
    img
      width 100px
    p
      width 100%
      font-size 12px
      a
        color darkorange

</style>
