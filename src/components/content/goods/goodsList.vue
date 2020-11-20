<template>
  <div class="goods" style="background-color: white">
    <goodsListItem v-for = "item in goods" :goodsItem="item"/>
  </div>
</template>

<script>
import goodsListItem from './goodsListItem'
export default {
  name: 'goodList',
  components: {
    goodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>

</style>
