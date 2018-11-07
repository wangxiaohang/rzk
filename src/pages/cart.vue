<template>
  <div id="cart">
    <header>
      <div class="left">购物车</div>
      <div class="right" style="color:#9e9e9e;font-size: 14px;">编辑</div>
    </header>
    <div class="cart-nodata" v-if="hotProsInfo.length<=0">
      <img :src="noneURL" alt="">
      <p>
        您的购物车是空的，
        <a href="/index">去逛街</a>
      </p>
    </div>
    <div class="card-hasdata" v-else>
      <Cartcard v-for="(info,id) of hotProsInfo" :key="id"  :info="info" :id="id"></Cartcard>
    </div>
    <div class="recommend">
      <p class="title">你可能还想租</p>
      <div class="cards">
        <div class="swiper-container" id="recommend-swiper">
          <div class="swiper-wrapper">
            <div v-for="(item,index) of recommandTopics" :key="index" class="swiper-slide">
              <div class="img" :style="{'backgroundImage':'url('+item.img+')'}"></div>
              <p class="tit">{{ item.title }}</p>
              <p class="price">{{ item.price }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import noneURL from '@/assets/img/none3.png'
import Cartcard from '@/components/Cartcard.vue'
export default {
  name: 'cart',
  data () {
    return {
      noneURL: noneURL,
      hotProsInfo: [
        {
          img: '/static/img/shop1.png',
          title: '智能儿童手表',
          price: '50',
          days: 5,
          num: 1,
          description: 'z001粉色'
        }, {
          img: '/static/img/shop2.png',
          title: '龙卷风榨汁杯',
          price: '20',
          days: 5,
          num: 2,
          description: 'y01A浅蓝色'
        }, {
          img: '/static/img/shop3.png',
          title: '智能拉杆行李箱',
          price: '88',
          days: 5,
          num: 3,
          description: 'y01A浅蓝色'
        }
      ],
      recommandTopics: [
        {
          img: '/static/img/shop1.png',
          title: '智能儿童手表',
          price: '￥50/天'
        }, {
          img: '/static/img/shop2.png',
          title: '智能儿童手表',
          price: '￥50/天'
        }, {
          img: '/static/img/shop3.png',
          title: '智能儿童手表',
          price: '￥50/天'
        }, {
          img: '/static/img/shop4.png',
          title: '智能儿童手表',
          price: '￥50/天'
        }
      ]
    }
  },
  created: function () {
    document.title = '购物车'
  },
  components: {
    Cartcard
  },
  mounted () {
    this.topicSwiper = new Swiper('#recommend-swiper', {
      direction: 'horizontal',
      loop: false,
      autoplay: false,
      slidesPerView: 'auto',
      slidesOffsetBefore: 8,
      slidesOffsetAfter: 8
      // spaceBetween: 20
    })
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
  .recommend
    height 170px
    position relative
    .cards
      position absolute
      left -8px
      right -8px
      height 140px
    .swiper-container
      height 140px
      .swiper-slide
        width 100px
        margin-right 20px
        overflow hidden
        position relative
        .img
          width 100px
          height 100px
          position absolute
          top 0
          bottom 30px
          border-radius common-border-radius
        p
          width 100%
          font-size 12px
          text-align center
          position absolute
        p.tit
          bottom 20px
          color #000
        p.price
          bottom 0
          color #ff322b
      .swiper-slide:last-child
        margin-right 0

</style>
