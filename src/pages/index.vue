<template>
<div class="index">
  <header>
    <div class="left">首页</div>
    <div class="right"></div>
  </header>
  <div class="search-container">
    <div ref="search" :class="{'search':true,'left':placeholderLeft}">
        <input ref="searchInput" type="text" name="searchi" id="searchi" @keyup='searchKeyup' @focus='searchFocus' @blur="searchBlur" v-model="searchValue" />
        <label class="placeholder" for="searchi">
          <span class="icon" :style="{'transform':'translateX('+ (placeholderLeft || searchValue.length>0 ? 0 : placeholderLeftDist) +'px)'}"></span><span class="txt" :style="{'transform':'translateX('+ (placeholderLeft || searchValue.length>0 ? 0 : placeholderLeftDist) +'px)'}" ref="searchLabel" v-show="showPlaceholder">搜索你想要的宝贝吧~</span>
        </label>
        <div class="clear" v-show="searchValue.length>0" @click="clearSearchValue"></div>
    </div>
    <div class="mask"></div>
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
    <swiper :options="hotElmsOption" ref="hotElmSwiper" v-if="hotElms" class="hotElmSwiper">
      <swiper-slide v-for="(group,index) in hotElmsGroup" :key="index">
        <div class="procards three">
          <Procard v-for="(el,id) of group" :key="id" :info="el" :lines="'three'"></Procard>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
  <div class="topics">
    <p class="title">精选专题</p>
    <div class="cards">
      <swiper :options="topicSwiperOption" ref="topicSwiper" class="swiper-container" id="topic-swiper">
        <swiper-slide v-for="(item,index) of recommandTopics" :key="index" class="swiper-slide img" :style="{'backgroundImage':'url('+item['backgroundImage']+')'}">
          <div class="img" :style="{'backgroundImage':'url('+item.image+')'}"></div>
          <p>{{ item.title }}</p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div class="recommandPros">
    <p class="title">猜你喜欢</p>
    <prods-list :pros="products"></prods-list>
  </div>
</div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Hotsite from '@/components/Hotsite.vue'
import Playcard from '@/components/Playcard.vue'
import Procard from '@/components/Procard.vue'
import ProdsList from '@/components/ProdsList.vue'
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'index',
  data () {
    return {
      products: null,
      hotsites: null,
      hotElms: null,
      recommandTopics: null,
      playTips: [
        {
          title: '春季潮流报告',
          des: '解锁6大流行趋势'
        }, {
          title: '千万抽奖',
          des: '爆款主播狂秒'
        }
      ],
      topicSwiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 20
      },
      hotElmsOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      showPlaceholder: true,
      placeholderLeft: false,
      searchInputWidth: 0,
      searchLabelWidth: 0,
      searchLabelLeftDist: 0,
      searchValue: ''
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
    // 获取流行元素、精选专题
    axios.get('./static/json/topic.json')
      .then(function (response) {
        that.hotElms = response['data']['data']['123003']['list']
        that.recommandTopics = response['data']['data']['122995']['list']
      })
      .catch(function (err) {
        console.log(err)
      })
    // 获取猜你喜欢
    axios.get('./static/json/youMayLike-0.json')
      .then(function (response) {
        that.products = response['data']['data']['wall']['docs']
        // console.log(response['data']['data']['wall']['docs'])
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  mounted () {
    this.searchInputWidth = this.$refs.search.offsetWidth
    this.searchLabelWidth = this.$refs.searchLabel.offsetWidth
  },
  computed: {
    swiper () {
      return this.$refs.topicSwiper.swiper
    },
    hotElmsGroup () {
      // 流行元素3个分组
      var tempArr = []
      if (!Array.isArray(this.hotElms)) return tempArr
      for (var i = 0; i < this.hotElms.length; i++) {
        var k = parseInt(i / 3)
        if (!Array.isArray(tempArr[k])) tempArr[k] = []
        tempArr[k].push(this.hotElms[i])
      }
      // console.log(tempArr)
      return tempArr
    },
    placeholderLeftDist () {
      return (this.searchInputWidth - this.searchLabelWidth) / 2 - 15
    }
  },
  components: {
    Banner,
    Hotsite,
    Playcard,
    Procard,
    ProdsList,
    swiper,
    swiperSlide
  },
  methods: {
    searchFocus () {
      this.placeholderLeft = true
    },
    searchBlur () {
      this.placeholderLeft = false
    },
    searchKeyup (e) {
      var keycode = e.keyCode || 0
      var valid = (keycode > 47 && keycode < 58) || keycode === 32 || keycode === 13 || (keycode > 64 && keycode < 91) || (keycode > 95 && keycode < 112) || (keycode > 185 && keycode < 193) || (keycode > 218 && keycode < 223)
      if (!valid && this.searchValue.length <= 0) {
        this.showPlaceholder = true
      } else {
        this.showPlaceholder = false
      }
    },
    clearSearchValue () {
      this.searchValue = ''
      this.showPlaceholder = true
      this.$refs.searchInput.focus()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
common-border-radius = 6px
.index
  padding 0 8px
.search
  width 100%
  height 30px
  position relative
  margin-bottom 10px
  background #eaeaea
  border-radius common-border-radius
  overflow hidden

  .clear
    position: absolute
    width 20px
    height 20px
    top 5px
    right 8px
    background #666
    border-radius 10px
    &::before,&::after
      content: ''
      position absolute
      width 12px
      height 1px
      background #eee
      left 50%
      top 50%
    &::before
      transform translate(-50%,-50%) rotate(-45deg)
    &::after
      transform translate(-50%,-50%) rotate(45deg)

  input
    display block
    width 100%
    height 30px
    font-size 14px
    line-height 16px
    background transparent
    padding 7px 10px 7px 30px
    // 设置字体颜色 和 光标颜色
    transition all .3s .1s ease-out
    color #999
    // caret-color #333
    // text-shadow: 0px 0px 0px #999 // 字体阴影颜色
    // -webkit-text-fill-color transparent // 字体填充颜色透明，以显示阴影
  // input::first-line
  //   color #333

  .placeholder
    font-size 12px
    color #999
    display inline-block
    height 30px
    line-height 30px
    width 100%
    position absolute
    left 0
    top 0
    span
      display inline-block
      transition all .2s ease-out
    .icon
      vertical-align top
      margin 8px
      width 14px
      height 14px
      background url('../assets/img/index/search.png') no-repeat center/cover

.search.left
  input
    color #666
    caret-color #666
  input::first-line
    color #666

.plays .cards,
.procards.three
    display flex
    justify-content space-between

.topics
  height 160px
  position relative
  .cards
    height 130px
  .swiper-container
    height 130px
    .swiper-slide
      width 70%
      overflow hidden
      position relative
      border-radius common-border-radius
      .img
        width 80%
        height 100%
        position absolute
        top 0
        left 10%
      p
        line-height 130px
        font-size 20px
        letter-spacing 4px
        position absolute
        top 0
        left 0
        height 130px
        width 100%
        color #fff
        background-color rgba(0,0,0,.4)
        text-align center
</style>
