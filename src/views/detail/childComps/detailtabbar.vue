<template>
  <div class="detailtabbar">
    <div v-show = "isShow" class="model">添加购物车成功</div>
    <div class="_Left">
      <div class="kefu">
        <img src="~assets/img/detail/kefu.svg" alt="">
        <div>客服</div>
      </div>
      <div class="kefu">
        <img src="~assets/img/detail/dianpu.svg" alt="">
        <div>店铺</div>
      </div>
      <div class="kefu">
        <img src="~assets/img/detail/shoucang.svg" alt="">
        <div>收藏</div>
      </div>
    </div>
    <div class="_Right">
      <span class="_R_L" @click="add_to_cart">加入购物车</span>
      <span class="_R_R">购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailtabbar',
  data() {
    return{
      isShow: false
    }
  },
  methods: {
    add_to_cart() {
      this.$emit('add_cart')
      this.isShow = true
      let model1 = setTimeout(() => {
        this.isShow = false
      }, 1000)
    }
  }
}
</script>

<style>
  .detailtabbar {
    height: 53px;
    position: fixed;
    background-color: white;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
  }
  ._Left {
    flex: 1;
    text-align: center;
  }
  ._Left .kefu {
    margin-left: 10px;
    margin-right: 10px;
    display: inline-block;
    font-size: 16;
    margin-top: 5px
  }
  ._Left img {
    width: 25px
  }
  ._Right {
    flex: 1;
    text-align: center;
  }
  ._R_L {
    display: inline-block;
    line-height: 53px;
    background-color: yellow;
    font-size: 16;
    width: 50%
  }
  ._R_R {
    line-height: 53px;
    display: inline-block;
    line-height: 53px;
    font-size: 16;
    width: 50%;
    background-color: deeppink;
    color: white
  }
  .model{
    width: 140px;
    height: 35px;
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: black;
    color: white;
    opacity: 0.5;
    margin-left: -60px;
    line-height: 35px;
    text-align: center;
    border-radius: 20px;
    animation: dialogSlipToUP 500ms ease 1 forwards
  }
</style>
