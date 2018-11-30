<template>
  <div class="category-right-wrap">
    <div class="category-banner">
      <img :src="bannerURL" alt="">
    </div>
    <ul class="category-right-ul" v-if="id==4">
      <li class="category-right-item" v-for="(item,index) in phoneList" :key="index">
        <a :href="item.link">
          <img :src="item.pic" alt=""/>
          <p>{{item.title}}</p>
        </a>
      </li>
    </ul>
    <ul class="category-right-ul" v-else>
      <li class="category-right-item" v-for="(item,index) in category" :key="index">
        <a :href="item.url">
          <img :src="item.img" alt=""/>
          <p>{{item.name}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import JsonPhone from '@/json/phone.json'
import Bmob from 'hydrogen-js-sdk'
Bmob.initialize('bd871ea12dc290abce3d439aa8cd12aa', '5c7a9c2c9b82387a615d8a674e1ebc78')
export default {
  data () {
    return {
      phoneList: [],
      categoryList: []
    }
  },
  mounted () {
    var self = this
    self.phoneList = JsonPhone.lists
  },
  methods: {},
  props: ['id', 'category', 'bannerURL']
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
      img
        width 100%
    li.category-right-item
      width 80px
      margin 0 10px 30px
      text-align center
      display inline-block
      img
        width 50px
      p
       width 80px
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
