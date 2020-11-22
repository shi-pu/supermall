<template>
    <navbar>
      <div slot = "left" @click="btnback">
        <img src="~assets/img/common/back.svg" class="backicon" alt="">
      </div>
      <div slot = "center" class="title">
        <div v-for="(item, index) in titles"
        class="title-item"
        :class="{active: index===currentindex}"
        @click="btnclick(index)">{{item}}</div>
      </div>
    </navbar>
</template>

<script>
import navbar from 'components/common/navbar/navBar'
export default {
  name: 'detailNavbar',
  data() {
    return {
      titles: ['商品', '参数', '评价', '推荐'],
      currentindex: 0
    }
  },
  components: {
    navbar
  },
  methods: {
    btnclick(index) {
      this.currentindex = index;
      this.$emit('clicknavbar', index)
    },
    btnback() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .title{
    display: flex;
  }
  .title-item{
    font-size: 15px;
    flex: 1
  }
  .active{
    color: var(--color-high-text)
  }
  .backicon{
    margin-top: 12px;
    margin-right: 10px;
    width: 20px
  }
</style>
