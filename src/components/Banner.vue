<template>
<div class="banner">
  <swiper id="banner-swiper" :options="swiperOption" ref="bannerSwiper" v-if="bannerURLs">
      <swiper-slide class="swiper-slide" v-for="(urls,id) of bannerURLs" :key="id" :id="id" :style="{'backgroundImage':'url('+urls['image_800']+')'}">
        <router-link :to="'/bandetail'" class="bdlink"></router-link>
      </swiper-slide>
  </swiper>
  <div class="swiper-pagination" slot="pagination"></div>
</div>
</template>
<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Banner',
  data () {
    return {
      bannerURLs: null,
      swiperOption: {
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        observer: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.bannerSwiper.swiper
    }
  },
  created () {
    var that = this
    // 获取banner数据
    axios.get('./static/json/banner.json')
      .then(function (response) {
        that.bannerURLs = response['data']['data']['122224']['list']
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style>
.banner{
  width: 100%;
  height: 170px;
  position: relative;
}
.banner #banner-swiper{
  height: 150px;
  border-radius: 6px;
  overflow: hidden;
}
.banner #banner-swiper .swiper-slide{
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.swiper-pagination-bullets{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%,0);
  height: 20px;
}
.swiper-pagination-bullet{
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  overflow: hidden;
  background: #a2a2a2;
  display: inline-block;
  transform: translate(0,-50%);
  margin-left: 5px;
  transition: all .1s linear;
  will-change: width;
}
.swiper-pagination-bullet:first-child{
  margin-left: 0;
}
.swiper-pagination-bullet-active{
  width: 8px;
  background: #ffdc00;
}
.swiper-slide .bdlink {
  width: 100%;
  height: 100%;
  display: block
}
</style>
// 使用没有scoped的stylus，样式失效
// <style lang="stylus">
// common-border-radius = 6px
// .banner
//   width 100%
//   height 170px
//   position relative

//   #banner-swiper
//     height: 150px
//     border-radius common-border-radius
//     overflow hidden

//     .swiper-slide
//       background-repeat no-repeat
//       background-position center
//       background-size cover

//   .swiper-pagination-bullets
//     position absolute
//     bottom 0
//     left 50%
//     translate(-50%,0,0)
//     height 20px

//   .swiper-pagination-bullet
//     display block
//     width 4px
//     height 4px
//     border-radius 2px
//     overflow hidden
//     background #a2a2a2
//     display inline-block
//     margin-top 50%
//     translate(0,-50%,0)
//     transition(all)
//     margin-left 5px
//     transition all .1s linear
//     will-change width

//   .swiper-pagination-bullet:first-child
//     margin-left 0

//   .swiper-pagination-bullet-active
//     width 8px
//     background #ffdc00
// </style>
