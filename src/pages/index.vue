<template>
<div class="index">
  <header>
    <div class="left">首页</div>
    <div class="right"></div>
  </header>
  <div class="search">
      <input type="text" />
      <p class="placeholder">搜索你想要的宝贝吧~</p>
  </div>
  <Banner></Banner>
  <Hotsite :hotsites="hotsites"></Hotsite>
  <div class="plays">
    <p class="title">发现</p>
    <div class="cards">
      <Playcard v-for="(tip,id) of playTips" :key="id" :classname="id===0?'left':'right'" :title="tip.title" :des="tip.des"></Playcard>
    </div>
  </div>
  <div class="hotpros">
    <p class="title">流行元素</p>
    <div class="procards three">
      <Procard v-for="(info,id) of hotProsInfo" :key="id" :info="info" :lines="'three'"></Procard>
    </div>
  </div>
  <div class="topics">
    <p class="title">精选专题<router-link to="/topics">更多 &gt;</router-link></p>
    <div class="cards">
      <swiper :options="swiperOption" ref="topicSwiper" class="swiper-container" id="topic-swiper">
        <swiper-slide v-for="(item,index) of recommandTopics" :key="index" class="swiper-slide">
          <div class="img" :style="{'backgroundImage':'url('+item.img+')'}"></div>
          <p>{{ item.title }}</p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div class="recommandPros">
    <p class="title">精选商品<router-link to="/list">更多 &gt;</router-link></p>
    <div class="pros">
      <Procard v-for="(info,id) of products" :key="id" :info="info" :lines="'2'"></Procard>
    </div>
  </div>
</div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Hotsite from '@/components/Hotsite.vue'
import Playcard from '@/components/Playcard.vue'
import Procard from '@/components/Procard.vue'
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'index',
  data () {
    return {
      products: null,
      hotsites: null,
      playTips: [
        {
          title: '搭配分享',
          des: '开启潮流生活新体验'
        }, {
          title: '热门精选',
          des: '解锁时髦精品早春穿搭'
        }
      ],
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
        },
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
      ],
      recommandTopics: [
        {
          img: '/static/img/big_shop1.png',
          title: '秋品换新节，鞋包配饰全场享直价'
        }, {
          img: '/static/img/big_shop2.png',
          title: '精品人气好物推荐，共享精致生活'
        }
      ],
      swiperOption: {
        direction: 'horizontal',
        loop: false,
        autoplay: false,
        slidesPerView: 'auto',
        slidesOffsetBefore: 8,
        slidesOffsetAfter: 8
        // spaceBetween: 20
      }
    }
  },
  created () {
    // this.products = productsJson
    var that = this
    // 获取热站数据
    axios.get('./static/json/hotsite.json')
      .then(function (response) {
        that.hotsites = response['data']['0']['data']['132826']['list']
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  computed: {
    swiper () {
      return this.$refs.topicSwiper.swiper
    }
  },
  components: {
    Banner,
    Hotsite,
    Playcard,
    Procard,
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
common-border-radius = 6px
translate(x,y,z)
  transform translate3d(x,y,z)
  -webkit-transform translate3d(x,y,z)
  -moz-transform translate3d(x,y,z)
  -ms-transform translate3d(x,y,z)
  -o-transform translate3d(x,y,z)

.search
  width 100%
  height 30px
  position relative
  margin-bottom 10px

  input
    display block
    width 100%
    height 30px
    line-height 30px
    background #F5F5F5
    border-radius common-border-radius
    padding 0 10px

  p
    font-size 12px
    color #999
    position absolute
    left 50%
    top 50%
    translate(-50%,-50%,0)
    padding-left 17px

  p::before
    content ''
    position: absolute
    left 0
    top 50%
    translate(0,-50%,0)
    width 12px
    height 12px
    background url('../assets/img/index/search.png') no-repeat center/cover

.plays .cards,
.procards.three
    display flex
    justify-content space-between

.topics
  height 160px
  position relative
  .cards
    position absolute
    left -8px
    right -8px
    height 130px
  .swiper-container
    height 130px
    .swiper-slide
      width 70%
      overflow hidden
      position relative
      .img
        width: 100%
        position absolute
        top 0
        bottom 30px
        border-radius common-border-radius
      p
        line-height 30px
        font-size 12px
        position absolute
        bottom 0
        color #000
    .swiper-slide:first-child
      margin-right 20px
</style>
