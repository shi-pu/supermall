<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style>
  #tab-bar{
    display: flex;
    position: fixed;

    background-color: #f6f6f6;
    box-shadow: 0 -1px 8px rgba(100,100,100,.3);
    height: 49px;

    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
