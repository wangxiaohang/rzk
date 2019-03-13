<template>
  <div class="category-right-wrap">
    <!--
    <div class="category-banner">
      <img :src="bannerURL" alt="">
    </div>
    -->
    <!--
    <ul class="category-right-ul" v-if="id==4">
      <li class="category-right-item" v-for="(item,index) in phoneList" :key="index">
        <a :href="item.link">
          <img :src="item.pic" alt=""/>
          <p>{{item.title}}</p>
        </a>
      </li>
    </ul>
    <ul class="category-right-ul" v-else> -->
    <ul class="category-right-ul">
      <li class="category-right-item" v-for="(item,index) in category" :key="index">
        <a :href="item.url">
          <img :src="item.image" alt=""/>
          <p>{{item.title}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      phoneList: [],
      categoryList: []
    }
  },
  mounted () {
    // var self = this
    // self.phoneList = JsonPhone.lists
  },
  methods: {},
  props: ['id', 'category']
}
</script>
<style scoped lang="stylus">
  .category-right-wrap
    width 100%
    font-size 12px
    .category-banner
      width 92%
      margin-left 20px
      margin-bottom 20px
      display: none
      img
        width 100%
    li.category-right-item
      width 33.333%
      margin 10px 0
      text-align center
      display inline-block
      img
        width 80%
        max-width 80px
      p
       height 40px
       line-height 40px
       overflow hidden
       text-overflow ellipsis
       white-space nowrap
    .procards
      width 100%
      .procard
        padding 20px
        display inline-block

</style>
