<template>
  <div id = "detail">
    <detailnavbar class="detailnavba"></detailnavbar>
    <scroll class="de-scroll">
      <detailswiper :banner = "banners"></detailswiper>
      <detailbasicdata :goods="goods"></detailbasicdata>
      <detailshop :shop="shop"></detailshop>
    </scroll>
  </div>
</template>
<script>
import detailnavbar from './childComps/detailNavbar'
import detailswiper from './childComps/detailSwiper'
import detailbasicdata from './childComps/detailbasicdata'
import detailshop from './childComps/detailshop'
import scroll from 'components/common/scroll/Scroll'

import {getDetail, Goods, shop} from '@/network/detail'
export default {
  name: 'Detail',
  data() {
    return{
      iid: 0,
      banners: [],
      dtil: '',
      goods: {},
      shop: {}
    }
  },
  created() {
    this.iid = this.$route.params.iid
    this.GetDetail(this.iid)
  },
  components: {
    detailnavbar,
    detailswiper,
    detailbasicdata,
    detailshop,
    scroll
  },
  methods: {
    GetDetail(type) {
      getDetail(type).then(res => {
        console.log(res);
        const data = res.data.result
        this.banners = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop = new shop(data.shopInfo)
      })
    }
  }

}
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 2;
  }
  .de-scroll{
    position: fixed;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    background-color: white
  }
</style>
