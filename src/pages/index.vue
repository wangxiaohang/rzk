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
  <Banner :bannerURLs="bannerURLs"></Banner>
  <Hotsite :hotsites="hotsites"></Hotsite>
  <div class="plays">
    <p class="title">全新玩法</p>
    <div class="cards">
      <Playcard v-for="(tip,id) of playTips" :key="id" :classname="id===0?'left':'right'" :title="tip.title" :des="tip.des"></Playcard>
    </div>
  </div>
  <div class="hotpros">
    <p class="title">热租商品<a href="javascript:void(0)">更多 &gt;</a></p>
    <div class="procards three">
      <Procard v-for="(info,id) of hotProsInfo" :key="id" :info="info" :lines="'three'"></Procard>
    </div>
  </div>
</div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Hotsite from '@/components/Hotsite.vue'
import Playcard from '@/components/Playcard.vue'
import Procard from '@/components/Procard.vue'
export default {
  name: 'index',
  data () {
    return {
      bannerURLs: [
        '/static/img/big_shop1.png',
        '/static/img/big_shop2.png',
        '/static/img/big_shop3.png'
      ],
      hotsites: [
        {
          img: '/static/img/icon1.png',
          title: '电玩娱乐'
        }, {
          img: '/static/img/icon2.png',
          title: '办公用品'
        }, {
          img: '/static/img/icon3.png',
          title: '智能生活'
        }, {
          img: '/static/img/icon4.png',
          title: '居家常用'
        }, {
          img: '/static/img/icon5.png',
          title: '户外活动'
        }, {
          img: '/static/img/icon6.png',
          title: '3C数码'
        }, {
          img: '/static/img/icon7.png',
          title: '儿童玩具'
        }, {
          img: '/static/img/icon8.png',
          title: '更多'
        }
      ],
      playTips: [
        {
          title: '玩法介绍',
          des: '开启潮租生活新体验'
        }, {
          title: '包月任租',
          des: '畅享0元租金随租随还'
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
        }
      ]
    }
  },
  components: {
    Banner,
    Hotsite,
    Playcard,
    Procard
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
</style>
