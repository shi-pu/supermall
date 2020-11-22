<template>
  <div class="commentinfo" v-if="Object.keys(comment).length!==0">
    <h4 class="takeShow">用户评价</h4>
    <div class="comment-t">
      <img :src="comment.user.avatar" alt="">
      <span>{{comment.user.uname}}</span>
    </div>
    <div class="comment-c">
      <div class="content">{{comment.content}}</div>
      <div class="inform">
        <span>{{comment.created | formatDate}}</span>
        <span>{{comment.style}}</span>
      </div>
    </div>
    <div class="comment-b" v-if="comment.images">
      <div v-for="img in comment.images">
        <img :src="img" alt="">
      </div>
    </div>
    <div class="bottom-line"></div>
  </div>
</template>

<script>
import {formatDate} from '@/common/utils.js';
export default {
  name: 'commentinfo',
  props: {
    comment: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time * 1000);
      return formatDate(date, 'yyyy-MM-dd hh:mm ');
    }
  }
}
</script>

<style>
  .commentinfo {
    /* background-color: pink; */
  }
  .comment-t {
    line-height: 50px;
    margin-left: 5px;
  }
  .comment-t img {
    height: 40px;
    border-radius: 20px;
    position: relative;
    top: 10px;
  }
  .comment-t span {
    margin-left: 10px;
    font-size: 15px;
    color: #000
  }
  .comment-c {
    line-height: 18px
  }
  .comment-c .content{
    padding: 0 8px 0px 5px;
    font-size: 14px
  }
  .inform {
    padding-top: 6px;
    padding-left:5px;
    font-size: 12px;
    color: 	#909090
  }
  .comment-b{
    padding-top: 6px;
    padding-left:5px;
    display: flex;
  }
  .comment-b img{
    height: 80px;
    margin-left: 3px;
  }
</style>
