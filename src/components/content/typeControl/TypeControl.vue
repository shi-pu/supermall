<template>
  <div class="type-control">
    <div v-for = "(item,index) in title" class = "tab-control-item"
    @click = "btnIndex(index)" :class="{active: index === currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypeControl',
  data() {
    return{
      currentIndex: 0
    }
  },
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    btnIndex(index) {
      this.currentIndex = index
      this.$emit('itemclick',index)
    }
  },
  components: {

  }
}
</script>

<style>
  .type-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    background-color: #fff
  }
  .tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-high-text);
    padding-bottom: 5px
  }
  .active span {
    border-bottom: 3px solid var(--color-high-text);
    padding-bottom: 5px
  }
</style>
