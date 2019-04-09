<template>
<div class="banner-detail" ref="bannerBox">
  <div class="bgImg" :style="{'backgroundImage':'url(' + bigImage + ')'}"></div>
  <div :class="{'sticky':true,'fixed':stickyFix}">
    <img :src="qg" />
    <swiper :options="navOption" ref="navSwiper" class="navSwiepr">
      <swiper-slide v-for="(it,id) in items" :key="id" :data-id='id' :class="{'active':id == activePart}" :style="{'backgroundImage':'url('+it.icon+')'}" @click.native='scrollTo'>
        <transition name='nav-ani'>
          <div class="active-price" v-if='id == activePart'>{{ it.price }}</div>
        </transition>
      </swiper-slide>
    </swiper>
  </div>
  <div class="blank"></div>
  <div class="theme" v-for="(it,id) in items" :key="id" ref="themes">
    <ul class="imgs">
      <li v-for="(img,index) in it.detail" :key="index">
        <img :src="img"/>
        <div class="video" v-if="it.video && it.video.did == index">
          <video x-webkit-airplay='true' webkit-playsinline='true' playsinline='true' :src='it.video.src' controls='controls' preload='none' :poster='it.video.poster'>
          </video>
        </div>
      </li>
    </ul>
  </div>
  <div class="review">
    <img :src="review.title" />
    <div class="content" v-if="review.content.list">
      <swiper :options="reviewOption" ref="reviewSwiper" class="reviewSwiper">
        <swiper-slide v-for="(item,id) in review.content.list" :key="id" @click.native='jump'>
          <img :src='item.image' :data-id='id' :data-link='item.link' />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</div>
</template>
<script>
/*
 * 原地址：https://act.mogujie.com/fashionu?acm=3.mce.1_10_1ldjs.122224.0.kEE7Crlf4QDap.pos_1-m_498640-sd_119-mf_4537_1115684-idx_1-mfs_6-dm1_5000&ptp=m1._mf1_1239_4537.banner_122224.2.WX28CCI2
 */
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
export default {
  data () {
    return {
      activePart: -1,
      bigImage: './static/img/banner-d-01.png',
      qg: 'https://s10.mogucdn.com/mlcdn/c45406/190318_6d1g3ea0c39ilce7ch21d5aa8gfhd_750x74.jpg',
      items: [
        {
          'icon': 'https://s10.mogucdn.com/mlcdn/c45406/190318_81k0alc0b5agb9j90j50ajk1k89le_150x150.png',
          'price': '￥73.0',
          'detail': [
            './static/img/banner-detail-item0-0.png',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_186f04iclbkkadffe187ca4l2eb72_750x320.jpg',
            './static/img/banner-detail-item0-2.png',
            './static/img/banner-detail-item0-3.png',
            './static/img/banner-detail-item0-4.png'
          ],
          'video': {
            'did': 1,
            'src': 'https://1251964405.vod2.myqcloud.com/vodtransgzp1251964405/5285890786675371573/v.f30.mp4',
            'poster': 'https://s10.mogucdn.com/mlcdn/c45406/190318_0le1hb639ce5707bbdj2l1f652l7d_640x320.jpg'
          }
        }, {
          'icon': 'https://s10.mogucdn.com/mlcdn/c45406/190318_310i7kd01fbea8c0hg2h9i91e647d_150x150.png',
          'price': '￥79.0',
          'detail': [
            './static/img/banner-detail-item1-0.png',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_71eedjeb7li3dlbb5279fhda311j5_750x320.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_183gdelki60fb2lk2g971646h1ea8_750x500.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_16jcb6bhli85k3c43925b1838ieif_750x500.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_4f11e4l8k187ikhicbi0ii266kajj_750x311.jpg'
          ],
          'video': {
            'did': 1,
            'src': 'https://1251964405.vod2.myqcloud.com/vodtransgzp1251964405/5285890786672379272/v.f30.mp4',
            'poster': 'https://s10.mogucdn.com/mlcdn/c45406/190318_1h3bb58d62dbce16fc7lghjd5ffd1_640x320.jpg'
          }
        }, {
          'icon': 'https://s10.mogucdn.com/mlcdn/c45406/190318_04bc557gjlhjd3648e3ge6dh2c3e5_150x150.png',
          'price': '￥119.0',
          'detail': [
            'https://s10.mogucdn.com/mlcdn/c45406/190318_7hc9dagcl12854ldc6cdbd279lje9_750x440.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_3b9h6ca1bkacal4bh0ldg2jjkc4c4_750x320.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_6l9ddijcdd5b03lh17bakkj66cj37_750x500.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_7d1kgb422djkj72ibdg33bagh347k_750x500.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_3c650f4ie0ef4bfbhdi3dg2g434l3_750x311.jpg'
          ],
          'video': {
            'did': 1,
            'src': 'https://1251964405.vod2.myqcloud.com/vodtransgzp1251964405/5285890786672276437/v.f30.mp4',
            'poster': 'https://s10.mogucdn.com/mlcdn/c45406/190318_0hfjfahj178jcggl2hd3hjfklj0fc_640x320.jpg'
          }
        }, {
          'icon': 'https://s10.mogucdn.com/mlcdn/c45406/190318_54f614g4kl7904d0ll02l05a1aa7k_150x150.png',
          'price': '￥86.0',
          'detail': [
            'https://s10.mogucdn.com/mlcdn/c45406/190318_8eg8cbl11k250klk8881606f6jaic_750x405.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_0d15aheic32g2kbddk6f7lebhl2c8_750x320.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_5g8c8j8c183jbdjhfc1el3gkg630h_750x500.jpg'
          ],
          'video': {
            'did': 1,
            'src': 'https://1251964405.vod2.myqcloud.com/vodtransgzp1251964405/5285890786675434621/v.f30.mp4',
            'poster': 'https://s10.mogucdn.com/mlcdn/c45406/190318_1g4b8die929akjc63lf67bcgl512j_640x320.jpg'
          }
        }, {
          'icon': 'https://s10.mogucdn.com/mlcdn/c45406/190318_58ad88bedb3114cbjcj6aj02e6l9l_150x150.png',
          'price': '￥55.0',
          'detail': [
            'https://s10.mogucdn.com/mlcdn/c45406/190318_617hib3de1ga33bafaichlf936l00_750x380.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_6gjah9bc3fg3fk6d910kj1445lc7a_750x320.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_6f1bf4gff53137i2d62kec75a74aa_750x500.jpg'
          ],
          'video': {
            'did': 1,
            'src': 'https://1251964405.vod2.myqcloud.com/vodtransgzp1251964405/5285890786672399759/v.f30.mp4',
            'poster': 'https://s10.mogucdn.com/mlcdn/c45406/190318_5ebf4b439lk9l63f3gileig3daegb_640x320.jpg'
          }
        }, {
          'icon': 'https://s10.mogucdn.com/mlcdn/c45406/190318_62e9eldfe6584e6lfkjkeecfhlc2b_150x150.png',
          'price': '￥65.0',
          'detail': [
            'https://s10.mogucdn.com/mlcdn/c45406/190318_767ba8553djga606ihg3c368adg5f_750x415.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_7ifj8a9kcdbdh592eab67g8g1i233_750x320.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_8b8l7i8khbgk6kegkjkkaakaibfll_750x594.jpg'
          ],
          'video': {
            'did': 1,
            'src': 'https://1251964405.vod2.myqcloud.com/vodtransgzp1251964405/5285890786672183438/v.f30.mp4',
            'poster': 'https://s10.mogucdn.com/mlcdn/c45406/190318_04f9d631bc4bb9b344238j7b403e8_640x320.jpg'
          }
        }
        // {
        //   'icon': 'https://s10.mogucdn.com/mlcdn/c45406/190225_1g4jf881hbcallj8edj9826gk34a8_150x150.png'
        // }
      ],
      nextTheme: 'https://s10.mogucdn.com/mlcdn/c45406/190318_8a07l48099ae1f1a7226ckk9bie5i_750x365.jpg',
      huaxu: {
        title: 'https://s10.mogucdn.com/mlcdn/c45406/190318_5a6l1bclc5i27dac6h7b1jj7e8b67_750x157.jpg',
        vedio: 'https://s10.mogucdn.com/mlcdn/c45406/190318_01475da79hl4b9j4563jed805af5i_750x320.jpg'
      },
      review: {
        title: 'https://s10.mogucdn.com/mlcdn/c45406/190318_7b6ff8gdhkebj2ce2e35g4di4cjja_750x180.jpg',
        content: {
          bg: 'https://s10.mogucdn.com/mlcdn/c45406/190121_4hdcbkhe03c2hja65c9183j0c3el0_750x224.jpg',
          list: null
        }
      },
      navOption: {
        slidesPerView: 'auto'
      },
      reviewOption: {
        effect: 'coverflow',
        grabCursor: true,
        autoplay: {
          disableOnInteraction: false
        },
        speed: 800,
        loop: true,
        // ??? ios手动滑动图片空白闪烁
        loopAdditionalSlides: 1, // 去除左右空白，但手动滑动时左右出现短暂性空白，自动轮播正常
        centeredSlides: true,
        slidesPerView: '1.6',
        initialSlide: 1,
        coverflowEffect: {
          rotate: 50,
          stretch: 15,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
        // on: {
        //   touchEnd () {
        //     this.slideTo(this.realIndex - 0 + 2)
        //   }
        // }
      },
      stickyFix: false,
      winWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0
    }
  },
  computed: {
    stickyTop () {
      return this.winWidth * 0.4973
    },
    stickyHeight () {
      return this.winWidth * 0.0986666 - 0 + 72
    },
    themesTop () {
      return this.themes.map(function (v, i) {
        return v.offsetTop
      })
    },
    themesHeight () {
      return this.themes.map((theme, id) => {
        return theme.offsetHeight
      })
    },
    activeNavPartsTop () {
      return [
        this.themesTop[0] - this.themesHeight[0] / 2,
        this.themesTop[1] - this.themesHeight[1] / 2,
        this.themesTop[2] - this.themesHeight[2] / 2,
        this.themesTop[3] - this.themesHeight[3] / 2,
        this.themesTop[4] - this.themesHeight[4] / 2,
        this.themesTop[5] - this.themesHeight[5] / 2
      ]
    },
    navSwiper () {
      return this.$refs.navSwiper.swiper
    },
    reviewSwiper () {
      return this.$refs.reviewSwiper.swiper
    },
    navCenterMin () {
      return Math.floor(this.winWidth / 72 / 2)
    },
    navCenterMax () {
      return this.activeNavPartsTop.length - this.navCenterMin
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    // 获取往期回顾列表
    var that = this
    axios.get('https://wangxiaohang.github.io/rzk/dist/static/json/banner-review.json')
      .then(function (response) {
        that.review.content.list = response['data']['data']['133851']['list']
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  mounted () {
    this.bbox = this.$refs.bannerBox
    window.addEventListener('scroll', this.scrollHander)
    this.themes = this.$refs.themes
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollHander)
  },
  methods: {
    scrollHander () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.stickyFix = scrollTop > this.stickyTop
      this.activeNavPartsTop.forEach((value, id) => {
        if (scrollTop > value && (!this.activeNavPartsTop[id + 1] || scrollTop < this.activeNavPartsTop[id + 1]) && this.activeNavPartsTop !== id) {
          this.activePart = id
          // swiper不支持靠左情况下居中，通过计算模拟
          if (id <= this.navCenterMin) {
            this.navSwiper.slideTo(0, 500, false)
          } else if (id < this.navCenterMax) {
            this.navSwiper.slideTo(id - this.navCenterMin, 500, false)
          } else {
            this.navSwiper.slideTo(this.activeNavPartsTop.length - this.navCenterMin * 2, 500, false)
          }
        }
      })
    },
    jump (e) {
      let clickedId = e.target.getAttribute('data-id')
      if (this.reviewSwiper.realIndex !== clickedId - 0) {
        this.reviewSwiper.slideTo(clickedId - 0 + 2, 300)
      } else {
        let link = e.target.getAttribute('data-link')
        window.location.href = link
      }
    },
    scrollTo (e) {
      var id = e.target.getAttribute('data-id')
      var _top = this.themesTop[id] - this.stickyHeight
      window.scrollTo(0, _top)
    }
  }
}
</script>
<style lang='stylus' scoped>
.banner-detail
  width 100%
  height 100%
  position relative
  overflow auto
  .review .content
    padding 10px 0
  .bgImg
    padding-bottom 49.73%
    background-size cover
  img
    width 100%
    vertical-align middle
  .theme li
    position relative
    .video
      position absolute
      width 90%
      height 100%
      top 0
      left 5%
      text-align center
      video
        height 100%
        border-radius 5px
  .sticky
    width 100%
    position absolute
    background #F3F3F3
    .navSwiepr
      height 72px
      .swiper-slide
        width 72px
        height 72px
        position relative
        background-size cover
        .active-price
          width 92%
          right 0
          height 18px
          line-height 16px
          font-size 12px
          font-weight bold
          text-align center
          position absolute
          border-radius 0 0 2px 2px
          bottom 2px
          color white
          background #64CB86
  .sticky.fixed
    position fixed
    top 0px
    z-index 999
  .blank
    padding-top 9.86666%
    height 72px
    box-sizing content-box
  .nav-ani-enter-active
    animation bounceIn .75s
    -webkit-animation bounceIn .75s
  .nav-ani-leave-to
    opacity 0
  .nav-ani-leave-active
    transition all .5s ease
  @-webkit-keyframes bounceIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  @keyframes bounceIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>
