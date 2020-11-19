<template>
  <div class="good-list-item">
    <!-- <img :src="goodsItem['show']['img']" alt=""> -->
      <img :src="goodsItem.show.img" alt="">
      <div>
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="cfav">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'goodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
  .good-list-item {
    /* position: relative; */
    width: 50%;
    text-align: center;
    font-size: 12px;
    display: inline-block;
  }
  .good-list-item img{
    margin-top: 6px;
    width: 95%;
    height: 250px;
    border-radius: 5px;
  }
  .good-list-item p {
    margin-top: 2px;
    /* 不换行 */
    white-space: nowrap;
    /* 隐藏超出 */
    overflow: hidden;
    /* 溢出文本用'...'代替 */
    text-overflow: ellipsis;
    margin-bottom: 3px;
  }
  .good-list-item .price{
    color: var(--color-high-text);
    padding-right: 2px
  }
  .good-list-item .cfav{
    background-image: url('~assets/img/common/collect.svg');
    background-size: 15px 15px;
    background-repeat:no-repeat;
    padding-left: 15px;
    padding-top: 2px;
  }
</style>
