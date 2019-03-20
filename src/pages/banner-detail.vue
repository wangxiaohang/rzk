<template>
<div class="banner-detail">
  <div class="bgImg" :style="{'backgroundImage':'url(' + bigImage + ')'}"></div>
  <div class="sticky">
    <img :src="qg" />
    <ul>
      <li v-for="(it,id) in items" :key="id" :style="{'backgroundImage':'url('+it.icon+')'}"></li>
    </ul>
  </div>
</div>
</template>
<script>
/*
 * 原地址：https://act.mogujie.com/fashionu?acm=3.mce.1_10_1ldjs.122224.0.kEE7Crlf4QDap.pos_1-m_498640-sd_119-mf_4537_1115684-idx_1-mfs_6-dm1_5000&ptp=m1._mf1_1239_4537.banner_122224.2.WX28CCI2
 */
export default {
  data () {
    return {
      bigImage: 'https://s10.mogucdn.com/mlcdn/c45406/190318_01b7f04bij569k59h40kilf5f4hcc_750x373.jpg_999x999.v1c0.webp',
      qg: 'https://s10.mogucdn.com/mlcdn/c45406/190318_6d1g3ea0c39ilce7ch21d5aa8gfhd_750x74.jpg',
      items: [
        {
          'icon': 'https://s10.mogucdn.com/mlcdn/c45406/190318_024ehhilb315fi2ke0jf9eh360cjk_150x150.png',
          'detail': [
            'https://s10.mogucdn.com/mlcdn/c45406/190318_07ah1d917djlla364l3daf3cgd9hb_750x429.jpg_999x999.v1c0.webp',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_186f04iclbkkadffe187ca4l2eb72_750x320.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_7ed4fi46825jcfg73h4l50hd83hd1_750x500.jpg_999x999.v1c0.webp',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_6jb2bhfbefhbi4da223aj5lc0ldj1_750x500.jpg_999x999.v1c0.webp',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_02fd9lik48c9id5e9h2588797g8b4_750x311.jpg_999x999.v1c0.webp'
          ]
        }, {
          'icon': 'https://s10.mogucdn.com/mlcdn/c45406/190318_310i7kd01fbea8c0hg2h9i91e647d_150x150.png',
          'detail': [
            'https://s10.mogucdn.com/mlcdn/c45406/190318_26geh467k6f97a6g0g3e428jf07ca_750x440.jpg_999x999.v1c0.webp',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_71eedjeb7li3dlbb5279fhda311j5_750x320.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_183gdelki60fb2lk2g971646h1ea8_750x500.jpg_999x999.v1c0.webp',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_16jcb6bhli85k3c43925b1838ieif_750x500.jpg_999x999.v1c0.webp',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_4f11e4l8k187ikhicbi0ii266kajj_750x311.jpg_999x999.v1c0.webp'
          ]
        }, {
          'icon': 'https://s10.mogucdn.com/mlcdn/c45406/190318_04bc557gjlhjd3648e3ge6dh2c3e5_150x150.png',
          'detail': [
            'https://s10.mogucdn.com/mlcdn/c45406/190318_7hc9dagcl12854ldc6cdbd279lje9_750x440.jpg_999x999.v1c0.webp',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_3b9h6ca1bkacal4bh0ldg2jjkc4c4_750x320.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_6l9ddijcdd5b03lh17bakkj66cj37_750x500.jpg_999x999.v1c0.webp',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_7d1kgb422djkj72ibdg33bagh347k_750x500.jpg_999x999.v1c0.webp',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_3c650f4ie0ef4bfbhdi3dg2g434l3_750x311.jpg_999x999.v1c0.webp'
          ]
        }, {
          'icon': 'https://s10.mogucdn.com/mlcdn/c45406/190318_54f614g4kl7904d0ll02l05a1aa7k_150x150.png',
          'detail': [
            'https://s10.mogucdn.com/mlcdn/c45406/190318_8eg8cbl11k250klk8881606f6jaic_750x405.jpg_999x999.v1c0.webp',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_0d15aheic32g2kbddk6f7lebhl2c8_750x320.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_5g8c8j8c183jbdjhfc1el3gkg630h_750x500.jpg_999x999.v1c0.webp'
          ]
        }, {
          'icon': 'https://s10.mogucdn.com/mlcdn/c45406/190318_58ad88bedb3114cbjcj6aj02e6l9l_150x150.png',
          'detail': [
            'https://s10.mogucdn.com/mlcdn/c45406/190318_617hib3de1ga33bafaichlf936l00_750x380.jpg_999x999.v1c0.webp',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_6gjah9bc3fg3fk6d910kj1445lc7a_750x320.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_6f1bf4gff53137i2d62kec75a74aa_750x500.jpg_999x999.v1c0.webp'
          ]
        }, {
          'icon': 'https://s10.mogucdn.com/mlcdn/c45406/190318_62e9eldfe6584e6lfkjkeecfhlc2b_150x150.png',
          'detail': [
            'https://s10.mogucdn.com/mlcdn/c45406/190318_767ba8553djga606ihg3c368adg5f_750x415.jpg_999x999.v1c0.webp',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_7ifj8a9kcdbdh592eab67g8g1i233_750x320.jpg',
            'https://s10.mogucdn.com/mlcdn/c45406/190318_8b8l7i8khbgk6kegkjkkaakaibfll_750x594.jpg_999x999.v1c0.webp'
          ]
        }, {
          'icon': 'https://s10.mogucdn.com/mlcdn/c45406/190225_1g4jf881hbcallj8edj9826gk34a8_150x150.png'
        }
      ],
      nextTheme: 'https://s10.mogucdn.com/mlcdn/c45406/190318_8a07l48099ae1f1a7226ckk9bie5i_750x365.jpg_999x999.v1c0.webp',
      huaxu: {
        title: 'https://s10.mogucdn.com/mlcdn/c45406/190318_5a6l1bclc5i27dac6h7b1jj7e8b67_750x157.jpg_999x999.v1c0.webp',
        vedio: 'https://s10.mogucdn.com/mlcdn/c45406/190318_01475da79hl4b9j4563jed805af5i_750x320.jpg'
      },
      review: {
        title: 'https://s10.mogucdn.com/mlcdn/c45406/190318_7b6ff8gdhkebj2ce2e35g4di4cjja_750x180.jpg_999x999.v1c0.webp',
        content: {
          bg: 'https://s10.mogucdn.com/mlcdn/c45406/190121_4hdcbkhe03c2hja65c9183j0c3el0_750x224.jpg',
          list: [
            'https://s2.mogucdn.com/mlcdn/c45406/190121_5chcjh06g2i9l55k5gga1lk8290ag_421x226.png_999x999.v1c0.webp',
            'https://s2.mogucdn.com/mlcdn/c45406/190121_1fcf4hdf204dhf586ki8j8g3fe296_421x226.png_999x999.v1c0.webp',
            'https://s2.mogucdn.com/mlcdn/c45406/190128_4bc24k59d3cl7f0d8f8k36k77ll91_421x226.png_999x999.v1c0.webp',
            'https://s11.mogucdn.com/mlcdn/c45406/190121_192hglikbde8f9kcljc683f5jc471_421x226.png_999x999.v1c0.webp',
            'https://s17.mogucdn.com/mlcdn/c45406/190314_4430cifk01afd409be6je86hfb3ed_421x226.png_999x999.v1c0.webp'
          ]
        }
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
.banner-detail
  .bgImg
    padding-bottom 49.73%
    background-size cover
  img
    width 100%
  .sticky li
    width 72px
    height 72px
    float left
    margin-left 10px
</style>
