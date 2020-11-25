<template>
  <div class="rightgoods">
      <div v-for="item in categorygoods" class="r-item" @click="c_btnclick(item)">
        <img :src="item.show.img" @load="c_img_load">
        <div class="c_title">{{item.title}}</div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'rightgoods',
  props: {
    categorygoods: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {

  },
  methods: {
    c_img_load() {
        this.$emit('c_img_load')

    },
    c_btnclick(item) {
      this.$router.push('/detail/' + item.iid)
    }
  }
}
</script>

<style>
  .rightgoods .r-item{
    margin-top: 20px;
    font-size: 15px;
    width: 50%;
    text-align: center;
    display: inline-block;
  }
  .rightgoods .r-item img{
    position: relative;
    width: 80%;
    border: 1px solid #F0F0F0;
    border-radius: 60px;
    margin-left: 8%
  }
  .c_title{
      margin-top: 2px;
      /* 不换行 */
      white-space: nowrap;
      /* 隐藏超出 */
      overflow: hidden;
      /* 溢出文本用'...'代替 */
      text-overflow: ellipsis;
      margin-bottom: 3px;
  }
</style>
