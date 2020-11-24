<template>
  <div class="rightgoods">
    {{comp}}
    <div v-for="item in goods[kind_list[currentindex]].list" class="r-item"> <!--@click="c_btnclick(item)"    @load="c_img_load"-->
      <img :src="item.show.img" >
      <div class="c_title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
import {getCategoryGoods} from '@/network/category'
export default {
  name: 'pop',
  data() {
    return{
      currentindex: 0,
      kind_list: ['pop', 'new', 'sell'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
    }
  },
  created() {
    this.GetCategoryGoods(this.kind_list[this.currentindex])
  },
  computed: {
    comp() {
      if(this.$route.query.index){
        this.currentindex = this.$route.query.index
        this.GetCategoryGoods(this.kind_list[this.currentindex])
      }
      // this.currentindex = this.$route.query.index
    }
  },

  methods: {

    GetCategoryGoods(currentindex){
      this.goods[currentindex].page += 1
      getCategoryGoods(currentindex,this.goods[currentindex].page).then(res => {
        this.goods[currentindex].list.push(...res.data.data.list)
      })
    },
    // c_img_load() {
    //   this.$refs.scroll.refresh()
    // },
    // moreload() {
    //   this.GetCategoryGoods(kind_list[this.currentindex])
    // }
  }
}
</script>

<style>
.rightgoods .r-item{
  margin-top: 20px;
  font-size: 15px;
  width: 50%;
  text-align: center;
  display: inline-block;
}
.rightgoods .r-item img{
  width: 80%;
  border: 1px solid #F0F0F0;
  border-radius: 60px;
  margin-left: 8%
}
.c_title{
    margin-top: 2px;
    /* 不换行 */
    white-space: nowrap;
    /* 隐藏超出 */
    overflow: hidden;
    /* 溢出文本用'...'代替 */
    text-overflow: ellipsis;
    margin-bottom: 3px;
}
</style>
