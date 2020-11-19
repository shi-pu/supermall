<template>
  <div id="home">
    <nav-bar class="sty">
      <div slot = "center">购物街</div>
    </nav-bar>
    <scroll class="content" ref = "scroll"
    :probe-type="3"
    @scroll = "contentScroll"
    :pullUpLoad="true"
    @moreLoad="moreload">
      <home-swiper :banner = "banners"/>
      <HomeRecommendView :recommend = "recommends"/>
      <Home-feature/>
      <TypeControl class="type-control"
      :title = "['流行', '新款', '精选']"
      @itemclick = "cpnclick"></TypeControl>
      <goodList :goods = "showGoods"/>
    </scroll>
    <backtop @click.native = "backClick" v-show = 'backTopisShow'/>
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
        backTopisShow: false
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
    created() {
      this.GetHomeMultidata(),
      this.GetHomeGoods('pop')
      this.GetHomeGoods('new')
      this.GetHomeGoods('sell')
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
          console.log(res);
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
        })
      },

      //点击事件
      cpnclick(index) {
        this.type = Object.keys(this.goods)[index]
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        this.backTopisShow = (-position.y) > 1000
      },
      moreload() {
        this.GetHomeGoods(this.type)
        //刷新
        this.$refs.scroll.scroll.refresh()
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
    z-index: 100;
  }
  .content{
    position: fixed;
    top: 0;
    bottom: 49px;
    left: 0;
    right: 0;
    /* overflow: hidden; */
  }
</style>
