<template>
    <tabbar>
      <tbitem path = '/home'>
        <img src="@/assets/img/tabbar/首页.svg" slot = "item-icon">
        <img src="@/assets/img/tabbar/首页1.svg" slot = "item-icon1">
        <div slot = "item-text">首页</div>
      </tbitem>
      <tbitem path = '/category'>
        <img src="@/assets/img/tabbar/分类.svg" slot = "item-icon">
        <img src="@/assets/img/tabbar/分类1.svg" slot = "item-icon1">
        <div slot = "item-text">分类</div>
      </tbitem>
      <tbitem path = '/cart'>
        <img src="@/assets/img/tabbar/购物车.svg" slot = "item-icon">
        <img src="@/assets/img/tabbar/购物车1.svg" slot = "item-icon1">
        <div slot = "item-text">购物车</div>
      </tbitem>
      <tbitem path = '/profile'>
        <img src="@/assets/img/tabbar/我的.svg" slot = "item-icon">
        <img src="@/assets/img/tabbar/我的1.svg" slot = "item-icon1">
        <div slot = "item-text">我的</div>
      </tbitem>
    </tabbar>
</template>

<script>
import tabbar from 'components/common/tabbar/Tabbar'
import tbitem from 'components/common/tabbar/TabbarItem'
export default {
  name: 'mainTabbar',
  components: {
    tabbar,
    tbitem
  }
}
</script>

<style>

</style>
