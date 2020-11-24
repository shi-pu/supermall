<template>
  <div class="leftmenu">
    <div v-for="(item, index) in category_name"
     @click="btnclick(index)"
     :class="{_active: index == currentindex}">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'leftmenu',
  data() {
    return{
      currentindex: 0,
      category_name: ['正在流行', '火爆新款', '精心选制']
    }
  },
  methods: {
    btnclick(index) {
      this.currentindex = index
      this.$emit('c_menuclick', index)
    }
  }
}
</script>

<style>
  .leftmenu {
    position: fixed;
    top: 44px;
    width: 30%;
    background-color: #F0F0F0;
    line-height: 40px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: auto;
    text-align: center;
    font-size: 15px;
  }
  ._active{
    color: #ff5777;
    border-left: 5px solid #ff5777;
    font-size: 17px
  }
</style>
