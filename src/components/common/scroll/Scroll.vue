<template>
  <div class = "content" ref = "wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  data() {
    return{
      scroll: null
    }
  },
  methods: {
    // 将自身的scrollTo转化为scrollTo方式
    scrollTo(x, y, time = 500) {
      // 先检查scroll是否存在，若存在就执行this.scroll.scrollTo(x, y ,time)
      this.scroll && this.scroll.scrollTo(x, y ,time)
    },
    // 将自身的refresh转化为refresh方法
    refresh() {
      this.scroll && this.scroll.refresh()
    },

    gety() {
      return this.scroll ? this.scroll.y : 0
    }
  },
  props: {
    probeType: {
      type: Number
    },
    pullUpLoad: {
      type: Boolean
    }
  },
  mounted() {
    //默认下不能监听位置
    //probe侦测,当probeType为0和1时不侦测，
    //为2时，在手指滚动过程中检测，而在惯性 下不侦测
    //为3时，只要滚动都侦测
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    })

    //监听位置
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })

    //监听是否到底部
    this.scroll.on('pullingUp', () => {
      this.$emit('moreLoad')
      setTimeout(() => {
        this.scroll.finishPullUp()
      },3000)
    })
  }
}
</script>

<style>
/* .content{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
} */
</style>
