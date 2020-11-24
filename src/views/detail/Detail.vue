<template>
  <div id = "detail">
    <detailnavbar class="detailnavba"
    @clicknavbar="clicknavbar"
    ref="detailnavba"></detailnavbar>
    <scroll class="de-scroll"
    ref="scroll"
    :probeType = "3"
    @scroll="getpositionY">
      <detailswiper :banner = "banners"></detailswiper>
      <detailbasicdata :goods="goods"></detailbasicdata>
      <detailshop :shop="shop"></detailshop>
      <detailshow :takeshow = "takeshow" @showImgLoad="showImgLoad">
      </detailshow>
      <detailparams :goodsparam="goodsparam" ref="params"></detailparams>
      <commentinfo :comment="comment" ref="comment"></commentinfo>
      <h4 class="takeShow" id="haowu">好物推荐</h4>
      <goodList :goods='recommends'></goodList>
      <div class="bottom-line"></div>
    </scroll>
    <backtop @click.native = 'backClick' v-show = 'backTopisShow'></backtop>
    <detailtabbar @add_cart="add_cart"></detailtabbar>

  </div>
</template>
<script>
import detailnavbar from './childComps/detailNavbar'
import detailswiper from './childComps/detailSwiper'
import detailbasicdata from './childComps/detailbasicdata'
import detailshop from './childComps/detailshop'
import detailshow from './childComps/detailshow'
import detailparams from './childComps/detailparams'
import detailtabbar from './childComps/detailtabbar'
import commentinfo from './childComps/commentinfo'
import scroll from 'components/common/scroll/Scroll'
import goodList from 'components/content/goods/goodsList'

import {getDetail, Goods, shop, GoodsParam, getRecommend} from '@/network/detail'
import {debounce} from '@/common/utils.js'

import {backTopMixin} from "@/common/mixin"
export default {
  name: 'Detail',
  mixins:[backTopMixin],
  data() {
    return{
      iid: 0,
      banners: [],
      dtil: '',
      goods: {},
      shop: {},
      takeshow: [],
      goodsparam: {},
      comment: {},
      recommends: [],
      themeTopY:[0, 0, 0, 0],
      getThemeTopY: null,
      newrefresh: null
    }
  },
  created() {
    this.iid = this.$route.params.iid
    this.GetDetail(this.iid)
    this.GetRecommend()
    this.newrefresh = debounce(() => {
      this.$refs.scroll.refresh()
    }, 100)
    this.getThemeTopY = debounce(() => {
      this.themeTopY = [0, 0, 0, 0]
      //根据最新的数据，对应的dom已经渲染完
      //但图片数据依然没有加载完成
      this.themeTopY[1] = -this.$refs.params.$el.offsetTop
      this.themeTopY[2] = -this.$refs.comment.$el.offsetTop
      this.themeTopY[3] = -document.getElementById('haowu').offsetTop
    }, 100)
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,30)
    this.$bus.$on('detailitemimgload', () => {
      refresh()
    })
  },
  components: {
    detailnavbar,
    detailswiper,
    detailbasicdata,
    detailshop,
    detailshow,
    scroll,
    detailparams,
    commentinfo,
    goodList,
    detailtabbar,
  },
  methods: {
    GetDetail(type) {
      getDetail(type).then(res => {
        const data = res.data.result
        //获取轮播图
        this.banners = data.itemInfo.topImages
        //获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // 获取商品详情数据
        this.shop = new shop(data.shopInfo)
        // 获取穿着展示信息
        this.takeshow = data.detailInfo.detailImage[0].list
        //获取商品参数
        this.goodsparam = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        //获取评论信息
        if (data.rate.cRate&&data.rate.cRate != 0){
          this.comment = data.rate.list[0]
        }

        // this.$nextTick(() => {
        //   this.themeTopY = [0, 0, 0, 0]
        //   //根据最新的数据，对应的dom已经渲染完
        //   //但图片数据依然没有加载完成
        //   this.themeTopY[1] = -this.$refs.params.$el.offsetTop
        //   this.themeTopY[2] = -this.$refs.comment.$el.offsetTop
        //   this.themeTopY[3] = -document.getElementById('haowu').offsetTop
        //   console.log(this.themeTopY);
        // })
      })
    },
    GetRecommend() {
      getRecommend().then(res => {
        this.recommends = res.data.data.list
      })
    },

    showImgLoad() {
      this.newrefresh()
      // this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    getpositionY(position) {
      const positiony = position.y
      // console.log(positiony);
      if (this.themeTopY[2] < positiony && positiony <= this.themeTopY[1]) {
        this.$refs.detailnavba.currentindex = 1
      }else if (this.themeTopY[3] < positiony && positiony <= this.themeTopY[2]) {
        this.$refs.detailnavba.currentindex = 2
      }else if (positiony <= this.themeTopY[3]+10) {
        this.$refs.detailnavba.currentindex = 3
      }else if (positiony > this.themeTopY[1]){
        this.$refs.detailnavba.currentindex = 0
      }
      this.backTopisShow = (-positiony) > 1000
      this.fixed = (-positiony) > this.tabTop - 44
    },
    clicknavbar(index) {
      switch (index) {
        case 0:
          this.$refs.scroll.scrollTo(0, this.themeTopY[0], 0)
          break;
        case 1:
          this.$refs.scroll.scrollTo(0, this.themeTopY[1], 0)
          break;
        case 2:
          this.$refs.scroll.scrollTo(0, this.themeTopY[2], 0)
          break;
        case 3:
          this.$refs.scroll.scrollTo(0, this.themeTopY[3], 0)
          break;
      }
    },
    add_cart() {
      const product = {}
      product.image = this.banners[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      this.$store.commit('addCart', product)
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
    bottom: 53px;
    left: 0;
    right: 0;
    background-color: white
  }
  .detailnavba{
    position: relative;
    z-index: 3;
    background-color: #fff
  }
</style>
