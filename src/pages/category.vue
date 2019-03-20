<template>
  <div id="category">
    <header>
      <div class="left">分类</div>
      <transition name="fade">
        <div class="box" v-if="show"></div>
      </transition>
      <div class="right" @click="show = !show"></div>
    </header>
    <div class="category-shop">
      <nav class="left">
        <ul class="categor-right-ul">
          <li v-for="(item,index) in naveLeftData" :key="index"
              :class="navIndex==index?'category-left-item active':'category-left-item'" :data-id="item.id"
              v-on:click="navClickFn(index,item.title)">
            {{ item.title }}
          </li>
        </ul>
      </nav>
      <div class="right" v-loading="loading">
        <router-view :id="navIndex" :category="categoryList"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
// import Bmob from 'hydrogen-js-sdk'
// Bmob.initialize('bd871ea12dc290abce3d439aa8cd12aa', '5c7a9c2c9b82387a615d8a674e1ebc78')
import axios from 'axios'
export default {
  name: 'category',
  data () {
    return {
      show: false,
      navIndex: 0,
      limit: 9,
      category: '热租商品',
      categoryList: [],
      naveLeftData: [],
      banner: [],
      loading: true
    }
  },
  created: function () {
    this.loading = true
    this.navIndex = this.$route.params.id ? this.$route.params.id : 0
    document.title = '商品分类'
    this.getCatesData()
    // setTimeout(this.getBannersData, 300)
    setTimeout(this.getCategoryData, 1000)
  },
  methods: {
    navClickFn: function (index, category) {
      this.loading = true
      this.navIndex = index
      this.category = category
      this.$route.params.id = index
      this.$router.push({
        path: '/category/' + index
      })
      setTimeout(this.getCategoryData, 1000)
    },
    getCategoryData: function () {
      // const query = Bmob.Query('products')
      // query.limit(this.limit)
      // query.skip(0)
      // query.equalTo('category', '==', this.category)
      // query.find().then(res => {
      //   this.categoryList = res
      //   this.loading = false
      // })
      // this.loading = false

      var that = this
      axios.get('../static/json/cate-' + that.navIndex + '.json')
        .then(function (res) {
          // console.log(res['data']['data']['list'])
          that.categoryList = res['data']['data']['list']
          that.loading = false
        }).catch(function (err) {
          console.log('获取' + that.navIndex + '分类下内容错误')
          console.log(err)
        })
    },
    getCatesData: function () {
      // Bmob.Query('cates').find().then(res => {
      //   this.naveLeftData = res
      //   this.category = this.naveLeftData[this.navIndex].title
      // })
      var that = this
      axios.get('../static/json/cates.json')
        .then(function (res) {
          that.naveLeftData = res['data']['data']['117330']['list']
        }).catch(function (err) {
          console.log('获取分类页左侧分类信息错误：')
          console.log(err)
        })
    },
    getBannersData: function () {
      // Bmob.Query('banners').find().then(res => {
      //   this.banner = res
      //   this.bannerURL = res[this.navIndex].img
      // })
    }
  }
}
</script>
<style lang="stylus" scoped>
.fade-enter-active
  animation bounce-in .5s
.fade-leave-active
  animation bounce-in .5s reverse
@keyframes bounce-in{
  0% {transform: scale(0)}
  50% {transform: scale(1.5)}
  100% {transform: scale(1)}
}
header .box
  width 120px
  height 20px
  background lightgreen
  float right
  margin 10px 40px
#category
  width 100%
  height 100%
  overflow hidden
  position relative
  Header
    padding 0 8px
    position relative
    .right
      width 18px
      height 18px
      position absolute
      top 10px
      right 20px
      background url('../assets/img/index/search.png') no-repeat center/cover
  .category-shop
    width 100%
    padding 0px
    position absolute
    top 40px
    bottom 0
    display flex
    nav.left
      width 20%
      overflow-x hidden
      overflow-y scroll
      .category-left-item
        display block
        text-align center
        font-size 12px
        height 40px
        line-height 40px
        color grey
      .category-left-item.active
        color black
        font-weight 600
        position relative
      .category-left-item.active:before
        content ""
        width 2px
        height 20px
        background-color orange
        position absolute
        top 10px
        left 0px
    div.right
      width 80%
      overflow-x hidden
      overflow-y scroll
    div.right::-webkit-scrollbar
      display none
    nav.left::-webkit-scrollbar
      display none
</style>
