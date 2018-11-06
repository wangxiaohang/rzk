<template>
  <div class="category-right-wrap">
    <div class="category-banner">
      <img :src="bannerURLs" alt="">
    </div>
    <ul class="category-right-ul" v-if="id==4">
      <li class="category-right-item" v-for="(item,index) in phoneList" :key="index">
        <a :href="item.link">
          <img :src="item.pic" alt=""/>
          <p>{{item.title}}</p>
        </a>
      </li>
    </ul>
    <div class="procards" v-else-if="id==0">
      <Procard v-for="(info,id) of hotProsInfo" :key="id" :info="info" :lines="'three'"></Procard>
    </div>
    <div v-else>
      {{id}}
    </div>
  </div>
</template>
<script>
import JsonPhone from '@/json/phone.json'
import Procard from '@/components/Procard.vue'
export default {
  data () {
    return {
      phoneList: [],
      bannerURLs: '/static/img/big_shop1.png',
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
        }, {
          img: '/static/img/shop4.png',
          title: '智能儿童手表',
          price: '￥50/天'
        }, {
          img: '/static/img/shop5.png',
          title: '龙卷风榨汁杯',
          price: '￥20/天'
        }, {
          img: '/static/img/shop6.png',
          title: '智能拉杆行李箱',
          price: '￥88/天'
        }
      ]
    }
  },
  mounted () {
    var self = this
    console.info(self.id)
    self.phoneList = JsonPhone.lists
  },
  components: {
    Procard
  },
  props: ['id']
}
</script>
<style scoped lang="stylus">
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
    .procards
      width 100%
      .procard
        padding 20px
        display inline-block

</style>
