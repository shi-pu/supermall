<template>
  <div class="cartsum">
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
