<template>
  <swiper>
    <swiper-item v-for = "item in banner" style="padding-top:44px">
      <a :href="item.link">
        <img :src="item.image" />
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
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style>

</style>
