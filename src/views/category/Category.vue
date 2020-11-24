<template>
  <div class = "category">
    <navBar class="styy">
      <div slot = "center">商品分类</div>
    </navBar>
    <leftmenu @c_menuclick='c_menuclick'/>
    <scroll id="rightgoods" ref="scroll"
    :pullUpLoad="true"
    @moreLoad="moreload">
      <rightgoods :categorygoods="showGoods"
      @c_img_load="c_img_load"/>
    </scroll>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/navBar'
import leftmenu from './childComps/leftmenu'
import rightgoods from './childComps/rightgoods'
import scroll from 'components/common/scroll/Scroll'


import {getCategoryGoods} from '@/network/category'
export default {
  name: 'Category',
  data() {
    return {
      category_name: [],
      page: 0,
      kind: 'pop',
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      kind_list: ['pop', 'new', 'sell']
    }
  },
  components: {
    navBar,
    leftmenu,
    rightgoods,
    scroll
  },
  created() {
    this.GetCategoryGoods('pop')
    this.GetCategoryGoods('new')
    this.GetCategoryGoods('sell')
  },
  computed: {
    showGoods() {
      return this.goods[this.kind].list
    }
  },
  methods: {
    GetCategoryGoods(kind){
      this.goods[kind].page += 1
      getCategoryGoods(kind,this.goods[kind].page).then(res => {
        this.goods[kind].list.push(...res.data.data.list)
      })
    },
    c_img_load() {
      this.$refs.scroll.refresh()
    },
    moreload() {
      this.GetCategoryGoods(this.kind)
    },
    c_menuclick(index) {
      this.kind = this.kind_list[index]
    }
  }
}
</script>

<style scoped>
  .styy {
    background-color: var(--color-tint);
    color: white;
    width: 100%;
    font-size: 20px;
    position: fixed;
    z-index: 2;
    margin-bottom: 500px
  }
  #rightgoods{
    position: fixed;
    left: 30%;
    bottom: 49px;
    top: 44px;
    right: 0;
  }
</style>
