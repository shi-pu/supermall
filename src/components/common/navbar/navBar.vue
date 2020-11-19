<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'navBar'
}
</script>

<style>
  .nav-bar {
    height: 44px;
    display: flex;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 -1px 8px rgba(100,100,100,.3);
  }
  .left, .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>
