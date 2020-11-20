<template>
  <swiper>
    <swiper-item v-for = "item in banner" style="padding-top:44px">
      <a :href="item.link">
        <img :src="item.image" @load="imageload"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper/index'
export default {
  name: 'HomeSwiper',
  props: {
    banner: {
      type: Array
    }
  },
  data() {
    return{
      loadComp: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageload() {
      if(!this.loadComp){
        this.$emit('swiperload')
        this.loadComp = true
      }
    }
  }
}
</script>

<style>

</style>
