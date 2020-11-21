<template>
  <div v-if="Object.keys(shop)!==0" class="detail-shop">
    <div class="t-detail-shop">
      <img :src='shop.logo' class="shop-icon">
      <div>{{shop.name}}</div>
    </div>
    <div class="b-detail-shop">
      <div class="Left">
        <div class="Left-item">
          {{shop.sells}}
          <div class="text">总销量</div>
        </div>
        <div class="Left-item">
          {{shop.goodsCount}}
          <div class="text">全部宝贝</div>
        </div>
        <div class="Left-item">
          {{shop.fans}}
          <div class="text">粉丝数量</div>
        </div>
      </div>
      <div class="Right" v-if="shop.score" >
        <div v-for="index in shop.score.length">
          <span class="rtitem">
            <span>{{shop.score[index-1].name}}</span>
            <span v-if="!shop.score[index-1].isBetter"
            style="color:green">{{shop.score[index-1].score}}</span>
            <span v-else style="color:red">{{shop.score[index-1].score}}</span>
            <span v-if="!shop.score[index-1].isBetter"
            style="color: white;background:green">低</span>
            <span v-else style="color: white;background:red">高</span>
          </span>
        </div>
        <span class="goin">进店逛逛</span>
      </div>
    </div>
    <div class="bottom-line"></div>
  </div>
</template>

<script>
export default {
  name: 'detailshop',
  props: {
    shop: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
  .detail-shop{
    height: 200px;
    padding-top: 15px;
    background-color: #fff
  }
  .t-detail-shop{
    padding-top: 5px;
    display: flex;
    height: 50px;
    line-height: 50px
  }
  .shop-icon{
    margin-top: 5px;
    margin-right: 8px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
  .b-detail-shop{
    height: 120px;
    display: flex;
  }
  .Left{
    width: 50%;
    display: flex;
  }
  .Left-item{
    flex: 1;
    margin-top: 20px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 30px;
    text-align: center;
    white-space: nowrap;
    font-size: 15px
  }
  .text{
    line-height: 12px;
    font-size: 12px;
  }
  .Right{
    width: 50%;
    margin-top: 2%;
    margin-left: 3%;
  }
  .rtitem{
    width: 90%;
    display: flex;
  }
  .rtitem span{
    flex: 1;
    white-space: nowrap;
    font-size: 14px;
    margin-left: 5px;
    text-align: center;
    margin-top: 8px
  }
  .goin{
    width: 130px;
    text-align: center;
    position: relative;
    line-height: 30px;
    left: -70px;
    top: 15px;
    background-color: #F0F0F0;
    display: inline-block;
    border-radius: 15px
  }
  .bottom-line{
    height: 5px;
    background-color: #F0F0F0;
    margin-top: 8px
  }
</style>
