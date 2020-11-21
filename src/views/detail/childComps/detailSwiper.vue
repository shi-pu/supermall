<template>
  <div class = "detail-swiper">
    <Swiper  class="banner">
      <SwiperItem  v-for="item in banner">
        <img :src='item'/>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper/index'
export default {
  name: 'detailSwiper',
  props: {
    banner: {
      type: Array,
      default: []
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style>
  .banner{
    height: 320px;
  }
</style>
