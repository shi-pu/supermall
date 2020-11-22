<template>
  <div class="detailparams"  v-if="goodsparam.sizes">
    <h4 class="takeShow">尺寸参数</h4>
    <table v-for="table in goodsparam.sizes[0]" class="sizeslabel">
      <tr v-for="(item, index) in table" class="sizes">
        <td v-if="index===0" class="sizestag">{{item}}</td>
        <td v-else class="sizeitem">{{item}}</td>
      </tr>
    </table>
    <table class="info-params">
      <tr v-for="info in goodsparam.info">
        <td class = "info-params-key">{{info.key}}</td>
        <td class="params-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="bottom-line"></div>
  </div>
</template>

<script>
export default {
  name: 'detailparams',
  props: {
    goodsparam:{
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
  .sizeslabel{
    border-top: 1px solid #F0F0F0;
    width: 100%
  }
  .sizes{
    display: inline-block;
  }
  .sizestag {
    width: 50px;
    padding-left: 3px;
    font-size: 14px;
    line-height: 40px;
  }
  .sizeitem{
    width: 60px;
    text-align: center;
    font-size: 14px;
    line-height: 40px
  }
  .info-params-key{
    padding-left: 5px;
    font-size: 14px;
    width: 95px;
    border-top: 1px solid #F0F0F0;
    line-height: 40px
  }
  .info-params{
    width: 100%;
  }
  .params-value{
    color: #eb4868;
    border-top: 1px solid #F0F0F0;
    font-size: 14px
  }
  .bottom-line{
    height: 5px;
    background-color: #F0F0F0;
    margin-top: 8px;
  }
</style>
