<template>
  <div id="category">
    <header>
      <div class="left">分类</div>
      <div class="right"></div>
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
        <router-view :id="navIndex" :category="categoryList" :bannerURL="bannerURL"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Bmob from 'hydrogen-js-sdk'
Bmob.initialize('bd871ea12dc290abce3d439aa8cd12aa', '5c7a9c2c9b82387a615d8a674e1ebc78')
export default {
  name: 'category',
  data () {
    return {
      navIndex: 0,
      limit: 9,
      category: '热租商品',
      categoryList: [],
      naveLeftData: [],
      banner: [],
      bannerURL: '',
      loading: true
    }
  },
  created: function () {
    this.loading = true
    this.navIndex = this.$route.params.id ? this.$route.params.id : 0
    document.title = '商品分类'
    this.getCatesData()
    setTimeout(this.getBannersData, 300)
    setTimeout(this.getCategoryData, 1000)
  },
  methods: {
    navClickFn: function (index, category) {
      this.loading = true
      this.navIndex = index
      this.category = category
      this.$route.params.id = index
      this.bannerURL = this.banner[this.navIndex].img
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
      // this.categoryList = ["热租商品","电玩娱乐","办公用品","智能生活","品牌手机","3C数码","居家常用","生活家电","儿童玩具","户外活动"];
      this.categoryList = ['aaa', 'bbb', 'ccc']
      this.loading = false
    },
    getCatesData: function () {
      Bmob.Query('cates').find().then(res => {
        this.naveLeftData = res
        this.category = this.naveLeftData[this.navIndex].title
      })
    },
    getBannersData: function () {
      Bmob.Query('banners').find().then(res => {
        this.banner = res
        this.bannerURL = res[this.navIndex].img
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
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
    padding 0px 8px 8px
    position absolute
    top 40px
    bottom 60px
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
