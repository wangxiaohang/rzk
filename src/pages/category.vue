<template>
  <div id="category">
    <header>
      <div class="left">分类</div>
      <div class="right"></div>
    </header>
    <div class="category-shop">
      <nav class="left">
        <ul class="categor-right-ul">
          <li v-for="(item,index) in naveLeftData"
              :class="navIndex==index?'category-left-item active':'category-left-item'" :data-id="item.id"
              v-on:click="navClickFn(index)">
            {{ item.des }}
          </li>
        </ul>
      </nav>

      <div class="right">
        <div class="category-right-wrap">
          <div class="category-banner">
            <img :src="bannerURLs[0]" alt="">
          </div>
          <ul class="category-right-ul">
            <li class="category-right-item" v-for="(item, index) in phoneList">
              <a :href="item.link">
                <img :src="item.pic" alt=""/>
                <p>{{item.title}}</p>
              </a>
            </li>
          </ul>
          {{navIndex}}
        </div>
      </div>
    </div>


  </div>
</template>
<script>
import JsonPhone from '@/json/phone.json'

export default {
  name: 'category',
  data() {
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
        }],
      bannerURLs: [
        '/static/img/big_shop3.png'
      ],
      phoneList: []
    }
  },
  components: {},
  watch: {
    '$route'(to, from) {
      this.$router.go(0);
    }
  },
  created: function () {
    this.navIndex = this.$route.params.id ? this.$route.params.id : 0
    document.title = '商品分类'
  },
  methods: {
    navClickFn: function (index) {
      //console.info(index)
      this.navIndex = index
      this.$route.params.id = index
      this.$router.push({
        path: '/category/' + index
      });
    }
  },
  mounted() {
    var self = this
    if (self.navIndex === 4) {
      self.phoneList = JsonPhone.lists
    }
  }
}
</script>

<style lang="stylus" scoped>
  #category
    width 100%
    .category-shop
      width 100%
      margin-top 20px
      display flex
      nav.left
        width 20%
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
      div.right
        width 80%
        overflow-y scroll
        .category-right-wrap
          width 100%
          text-align center
          font-size 12px
          .category-banner
            width 100%
            margin-bottom 20px
            img
              width 240px
              margin-left 8px
          li.category-right-item
            width 33.3%
            margin-bottom 30px
            display inline-block
            img
              width 40px

</style>
