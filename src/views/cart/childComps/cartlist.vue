<template>
  <div id="cartlist">
    <!-- <div>{{cartList}}</div> -->
    <div v-for="(item,index) in cartList" class="cart_item">
      <img v-if= "item.show" src="~assets/img/cart/xuanzhong.svg"
      class="svg" @click="_btnclick(index)">
      <img v-else src="~assets/img/cart/xuanzhong1.svg"
      class="svg" @click="_btnclick(index)">
      <img :src="item.image" class="img">
      <div class="_title">
        <div class="_title _title_t">{{item.title}}</div>
        <div class="_title _title_d">{{item.desc}}</div>
        <div class="_price">
          ￥{{item.price}}
        </div>
        <div class="jiajian">
          <span class="span" @click="_count(index)">-</span>
          <span>x{{item.count}}</span>
          <span @click="item.count++">+</span>
        </div>
      </div>
    </div>
    <cartsum ref="cartsum" :cartList="cartList"/>
  </div>
</template>

<script>
import cartsum from './cartsum'

export default {
  name: 'cartlist',
  data() {
    return{
      cartList: this.$store.state.cartList
    }
  },
  components: {
    cartsum
  },
  methods: {
    _btnclick(index) {
      this.cartList[index].show = !this.cartList[index].show
    },
    _count(index) {
      if(this.cartList[index].count > 1){
        this.cartList[index].count--
      }
    }
  }
}
</script>

<style>
  #cartlist{
    margin-top: 44px;
    margin-bottom: 90px
  }
  .cart_item{
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ddd;
  }
  .cart_item .svg {
    width: 15px;
    margin-left: 3px;
    margin-right: 3px
  }
  .cart_item .img {
    margin-top: 3px;
    margin-bottom: 3px;
    width: 20%;
    border-radius: 5px
  }
  .cart_item ._title {
    margin-top: 2px;
    /* 不换行 */
    white-space: nowrap;
    /* 隐藏超出 */
    overflow-x: hidden;
    /* 溢出文本用'...'代替 */
    text-overflow: ellipsis;
    margin-bottom: 3px;
    margin-left: 5px;
  }
  ._title_t{
    color: black;
    font-size: 15px;
  }
  ._title_d{
    font-size: 13px;
    padding-top: 5%;
  }
  ._price{
    padding-top: 8%;
    margin-left: 5px;
    color: orange
  }

  .jiajian{
    color: black;
    position: relative;
    left: 60%;
    padding-bottom: 0px;
    height: 20px;
    width: 70px;
    text-align: center;
    line-height: 20px
  }
  .jiajian span {
    margin-left: 8px
  }
</style>
