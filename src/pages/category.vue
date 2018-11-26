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
              v-on:click="navClickFn(index)">
            {{ item.des }}
          </li>
        </ul>
      </nav>
      <div class="right">
        <router-view :id="navIndex"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'category',
  data () {
    return {
      navIndex: 0,
      naveLeftData: [{
        id: 0,
        des: '热租商品'
      },
      {
        id: 1,
        des: '电娱玩乐'
      },
      {
        id: 2,
        des: '办公用品'
      },
      {
        id: 3,
        des: '智能生活'
      },
      {
        id: 4,
        des: '品牌手机'
      },
      {
        id: 5,
        des: '3C数码'
      },
      {
        id: 6,
        des: '居家常用'
      },
      {
        id: 7,
        des: '生活家电'
      },
      {
        id: 8,
        des: '儿童玩具'
      },
      {
        id: 9,
        des: '户外活动'
      }]
    }
  },
  created: function () {
    this.navIndex = this.$route.params.id ? this.$route.params.id : 0
    document.title = '商品分类'
  },
  methods: {
    navClickFn: function (index) {
      this.navIndex = index
      this.$route.params.id = index
      console.info(this.$route.params.id)
      this.$router.push({
        path: '/category/' + index
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
        left -5px
    div.right
      width 80%
      overflow-x hidden
      overflow-y scroll
    div.right::-webkit-scrollbar
      display none
    nav.left::-webkit-scrollbar
      display none
</style>
