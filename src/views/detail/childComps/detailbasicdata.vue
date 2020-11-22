<template>
  <div class="basic-detail" v-if="Object.keys(goods) !== 0">
    <div class="detail">
      <div class="t-detail">
        <div>{{goods.title}}</div>
        <span class="nprice">{{goods.newPrice}}</span>
        <span class="oprice">
          <span>{{goods.oldPrice}}</span>
          <span v-if="goods.discount" class="discount" style="color: white">
            {{goods.discount}}
          </span>
        </span>
        <div class="columns">
            <div v-if="goods.columns" class="Left">
              {{goods.columns[0]}}
            </div>
            <div v-if="goods.columns" class="Center">
              {{goods.columns[1]}}
            </div>
            <div class="Right" v-if="goods.services">
              <div v-if="goods.services[3]">
                {{goods.services[3].name}}
              </div>
            </div>
        </div>
      </div>
      <div class="b-detail" v-if="goods.services">
        <div class="Left">
          <img src="~assets/img/detail/对号.svg" alt="">
          {{goods.services[0].name}}
        </div>
        <div class="Center">
          <img src="~assets/img/detail/对号.svg" alt="">
          {{goods.services[1].name}}
        </div>
        <div class="Center">
          <img src="~assets/img/detail/对号.svg" alt="">
          {{goods.services[2].name}}
        </div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'detailbasicdata',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .detail{
    height: 150px;
    margin-top: 8px;
    background-color: white
  }
  .t-detail{
    height: 100px;
    padding-top: 8px;
    /* background-color: red; */
    font-size: 14px;
    font-weight: 500;
    color: black;
    padding-left: 8px;
    padding-right: 2px;

  }
  .nprice{
    padding-top: 5px;
    font-size: 18px;
    color: var(--color-high-text);
  }
  .oprice{
    padding-left: 4px;
    font-size: 10px;
    color: #D0D0D0;
    position: relative;
    text-decoration:line-through
  }
  .discount{
    position: absolute;
    left: 45px;
    background-color: var(--color-high-text);
    border-radius: 3px;
    white-space: nowrap;
  }
  .columns{
    margin-top: 23px;
    color: 	#D0D0D0;
    display: flex;
    white-space: nowrap;
    font-size: 13px;
  }
  .Left{
    flex: 1;
  }
  .Center{
    flex: 1;
    text-align: center;
  }
  .Right{
    flex: 1;
    text-align: center;
  }
  .b-detail{
    font-size: 13px;
    margin-top: 3px;
    padding-left: 4px;
    padding-right: 4px;
    white-space: nowrap;
    height:45px;
    display: flex;
    line-height: 45px;
    color: #88888888
  }
  .b-detail img{
    width: 11px;
  }
  .bottom{
    height: 5px;
    background-color: #F0F0F0
  }
</style>
