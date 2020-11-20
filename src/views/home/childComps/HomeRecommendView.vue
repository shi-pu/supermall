<template>
  <div class="recommend">
    <div v-for = "item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" @load="imageload"/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return{
      loadComp: false
    }
  },
  methods: {
    imageload() {
      if(!this.loadComp){
        this.$emit('recomload')
        this.loadComp = true
      }
    }
  }
}
</script>

<style>
  .recommend {
    display: flex;
    font-size: 12px;
    padding:10px 0 20px 0;
    border-bottom: 8px solid #eee;
  }
  .recommend-item {
    flex: 1;
    text-align: center
  }
  .recommend-item img{
    width: 70px;
    margin-bottom: 10px
  }
</style>
