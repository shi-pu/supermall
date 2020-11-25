<template>
  <div id="home">
    <nav-bar class="sty">
      <div slot = "center">购物街</div>
    </nav-bar>
    <TypeControl
      :title = "['流行', '新款', '精选']"
      @itemclick = "cpnclick"
      class="fiexed"
      style="padding-top: 44px"
      v-show = "fixed"
      ref="tabcontorl1">
    </TypeControl>
    <scroll class="content" ref = "scroll"
    :probe-type="3"
    @scroll = "contentScroll"
    :pullUpLoad="true"
    @moreLoad="moreload">
      <home-swiper :banner = "banners" @swiperload="swiperload"/>
      <HomeRecommendView :recommend = "recommends" @recomload="recomload"/>
      <Home-feature/>
      <TypeControl
      :title = "['流行', '新款', '精选']"
      @itemclick = "cpnclick"
      ref="tabcontorl2"></TypeControl>
      <goodList :goods = "showGoods"/>
    </scroll>
    <backtop @click.native = "backClick" v-show = 'backTopisShow'/>
    <div class="bottomtext">上拉加载更多...</div>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommendView from './childComps/HomeRecommendView'
  import HomeFeature from './childComps/HomeFeature'

  import navBar from 'components/common/navbar/navBar'
  import TypeControl from 'components/content/typeControl/TypeControl'
  import goodList from 'components/content/goods/goodsList'
  import scroll from 'components/common/scroll/Scroll'
  import backtop from 'components/content/backTop/BackTop'

  import {getHomeMultidata, getHomeGoods} from '@/network/home'
  import {debounce} from '@/common/utils.js'

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        type: 'pop',
        backTopisShow: false,
        tabTop: 0,
        fixed: false,
        swiperLoad: false,
        recomLoad: true,
        leftposition: 0
      }
    },
    components: {
      navBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFeature,
      TypeControl,
      goodList,
      scroll,
      backtop
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.leftposition, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.leftposition = this.$refs.scroll.gety()

    },
    destroyed(){
      console.log("destroyed");
    },
    created() {
      // this.$refs.scroll.refresh()
      this.GetHomeMultidata()
      // 请求商品数据
      this.GetHomeGoods('pop')
      this.GetHomeGoods('new')
      this.GetHomeGoods('sell')
    },
    mounted() {
      //监听图片加载完成
      const refresh = debounce(this.$refs.scroll.refresh,30)
      this.$bus.$on('itemimgload', () => {
        refresh()
      })
    },
    computed: {
      showGoods() {
        return this.goods[this.type].list
      }
    },
    methods: {
      // 网络请求
      GetHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
          // console.log(res);
        })
      },
      GetHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
        })
      },

      //点击事件
      cpnclick(index) {
        this.type = Object.keys(this.goods)[index]
        this.$refs.tabcontorl1.currentIndex = index
        this.$refs.tabcontorl2.currentIndex = index
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        this.backTopisShow = (-position.y) > 1000
        this.fixed = (-position.y) > this.tabTop - 44
      },
      moreload() {
        this.GetHomeGoods(this.type)
        this.showbottomtext = true
      },
      swiperload() {
        this.swiperLoad = true
      },
      recomload(){
        this.recomLoad = true
        if (this.swiperLoad&&this.recomLoad) {
          if(this.$refs.tabcontorl2.$el.offsetTop > -10){
            this.tabTop = this.$refs.tabcontorl2.$el.offsetTop
          }
        }
      }
    }
  }
</script>

<style scoped>
  .sty {
    background-color: var(--color-tint);
    color: white;
    width: 100%;
    font-size: 20px;
    position: fixed;
    z-index: 2;
    margin-bottom: 500px
  }
  .content{
    position: fixed;
    top: 0;
    bottom: 49px;
    left: 0;
    right: 0;
    /* overflow: hidden; */
  }
  .fiexed{
    position: relative;
    z-index: 1;
    padding-bottom: 3px
  }
  .bottomtext{
    position: fixed;
    bottom: 75px;
    width: 100%;
    text-align: center;
    z-index: -1;
    font-size: 13px
  }
</style>
