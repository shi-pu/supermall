<template>
  <div class="detailshow">
    <h4 class="takeShow">穿着效果</h4>
    <div v-for="item in takeshow">
      <img :src="item" class="show-item" @load="btnload">
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailshow',
  props: {
    takeshow: {
      type: Array,
      default: []
    }
  },
  methods: {
    btnload() {
      this.$emit('showImgLoad')
    }
  }
}
</script>

<style>
  .takeShow{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px
  }
  .takeShow::after, .takeShow::before {
     content: "--------------------";
     flex: 1;
     margin: auto;
     color: pink
   }
  .show-item{
    width: 100%;
  }
</style>
