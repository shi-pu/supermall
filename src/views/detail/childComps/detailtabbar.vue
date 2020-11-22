<template>
  <div class="detailtabbar">
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
      <span class="_R_L">加入购物车</span>
      <span class="_R_R">购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailtabbar'
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
</style>
