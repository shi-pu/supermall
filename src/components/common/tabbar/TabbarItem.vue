<template>
  <div class="tab-bar-item" @click = "btnclick()">
    <slot v-if = "!isShow" name="item-icon"></slot>
    <slot v-else name="item-icon1"></slot>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isShow(){
      return this.$route.path == this.path
    },
    activeStyle(){
      return this.isShow ? {color: this.activeColor} : {}
    }
  },
  // data(){
  //   return{
  //     isShow: true
  //   }
  // },
  methods: {
    btnclick(){
      this.$router.replace(this.path).catch(err => err)
    }
  }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  font-size: 15px;
  display: inline-block;
}
.tab-bar-item img{
  margin-top: 5px;
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
</style>
