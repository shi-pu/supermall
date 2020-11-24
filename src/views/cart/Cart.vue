<template>
  <div class="_cart">
    <navBar class="navBar">
      <div slot="center">购物车({{cartLength}})</div>
    </navBar>
    <cartlist/>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/navBar'
import cartlist from './childComps/cartlist'
export default {
  name: 'Cart',
  components: {
    navBar,
    cartlist,

  },
  computed: {
    cartLength() {
      return this.$store.state.cartList.length
    }
  }
}
</script>

<style>
  .navBar{
    background-color:  var(--color-tint);
    color: #fff;
    font-size: 20px;
    position: fixed;
    right: 0;
    left: 0;
    top: 0
  }

</style>
