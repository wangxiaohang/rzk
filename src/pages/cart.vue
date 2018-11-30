<template>
  <div id="cart">
    <header>
      <div class="left">购物车</div>
      <div class="right" v-show="hotProsInfo.length>0" v-on:click="edit()" style="color:#9e9e9e;font-size: 14px;">
        {{titleRight}}
      </div>
    </header>
    <div class="cart-nodata" v-if="hotProsInfo.length<=0">
      <img :src="noneURL" alt="">
      <p>
        您的购物车是空的，
        <router-link to="/main/index">去逛街</router-link>
      </p>
    </div>
    <div class="card-hasdata" v-else>
      <!--商品购物车列表-->
      <Cartcard v-for="(info, id) of hotProsInfo" :key="id"  :info="info" :all="allChoseData" :id="id"></Cartcard>
      <!--你可能还想租-->
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
    <!--结算-->
    <div class="count" v-show="hotProsInfo.length>0">
      <div class="choosebtn">
        <span :class="allChoseData" id='btn_all' v-on:click="allChoose()"></span>
        <i>全选</i>
      </div>
      <p v-if="titleRight=='编辑'">租金 <span>￥ 500:00</span></p>
      <button :class="titleRight=='编辑'?'goToTotal':'delete'">{{allBtn}}</button>
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
      allChoseData: 'none',
      titleRight: '编辑',
      allBtn: '去结算',
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
        }, {
          img: '/static/img/shop1.png',
          title: '智能儿童手表',
          price: '50',
          days: 5,
          num: 1,
          description: 'z001粉色'
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
    this.getUser()
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
    getUser () {
      if (localStorage && localStorage.getItem('bmob')) {
        let user = JSON.parse(localStorage.getItem('bmob'))
        console.info(user.username)
      } else {
        this.$router.push({
          path: '/login'
        })
      }
    },
    allChoose: function () {
      if (this.allChoseData === 'none') {
        this.allChoseData = 'check'
      } else {
        this.allChoseData = 'none'
      }
    },
    edit: function () {
      if (this.titleRight === '编辑') {
        this.titleRight = '完成'
        this.allBtn = '删除'
      } else {
        this.titleRight = '编辑'
        this.allBtn = '去完成'
      }
    }
  }
}
</script>
<style scoped lang="stylus">
  color_blue = #1eb4ff
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
    margin-bottom 50px
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
  .count
    display flex
    width 100%
    height 50px
    line-height 50px
    background-color #fff
    z-index 99
    justify-content space-between
    overflow hidden
    position fixed
    bottom 60px
    left 0
    p
     width 55%
     span
      color red
    button
     width 60px
     height 30px
     margin 10px 10px
     border none
     outline none
     border-radius 15px
     font-size 12px
     font-weight 600
    button.goToTotal
      background-color #f4c951
    button.delete
      border 1px solid #d8d8d8
      background-color transparent
      color red
  .choosebtn
    width 100px
    position relative
    i
      display inline-block
      font-style normal
      margin-left 25px
    span.none
      display inline-block
      width 12px
      height 12px
      border 1px solid gray
      border-radius 6px
      position absolute
      top 18px
      left 6px
    span.check
      display inline-block
      width 14px
      height 14px
      border 1px solid color_blue
      background-color color_blue
      border-radius 7px
      position absolute
      top 18px
      left 6px
    span.check:before
      content "\221A"
      display inline-block
      font-size 12px
      width 14px
      height 14px
      color #fff
      position absolute
      left 8px
      top -18px
      -webkit-transform  rotate(20deg)
      -moz-transform  rotate(20deg)

</style>
