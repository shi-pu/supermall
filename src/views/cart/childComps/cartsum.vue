<template>
  <div class="cartsum">
    <span style="width: 55px;padding-left:5px">全选:</span>
    <img v-if= "isShow" src="~assets/img/cart/xuanzhong.svg"
    class="svg" @click="_btnclick">
    <img v-else src="~assets/img/cart/xuanzhong1.svg"
    class="svg" @click="_btnclick">
    <div class="countsum">合计: {{sum}}</div>
    <div class="buysum">去结算({{cartList.length}})</div>
  </div>
</template>

<script>
export default {
  name: 'cartsum',
  props: {
    cartList: {
      type: Array
    }
  },
  data() {
    return{
      isShow: true
    }
  },
  methods: {
    _btnclick(){
      if(this.cartList.length > 0){
        this.isShow = !this.isShow
        for(let item of this.cartList) {
          item.show = !item.show
        }
      }
    }
  },
  computed: {
    sum() {
      let sums = 0
      if(this.cartList.length === 0){
        return 0
      }
      for(let item of this.cartList) {
        if(item.show) {
          sums += item.price * item.count
        }
      }
      return parseFloat(sums).toFixed(2)
    }
  }
}
</script>

<style scoped>
.cartsum {
  height: 41px;
  background-color: #ddd;
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  display: flex;
  line-height: 41px
}
.cartsum img {
  padding-left: 3px;
  width: 25px;
}
.countsum {
  width: 70%;
  padding-left: 4%
}
.buysum {
  width: 30%;
  text-align: center;
  background-color: orange;
  color: #fff
}
</style>
