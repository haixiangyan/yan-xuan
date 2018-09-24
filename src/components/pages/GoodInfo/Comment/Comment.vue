<template>
  <div class="yan-good-comment">
    <!-- 头部 -->
    <div class="yan-good-comment-header">
      <!-- 用户信息 -->
      <div class="user">
        <!-- 用户的头像 -->
        <img :src="author.customerPicture" alt="avatar">
  
        <!-- 用户的名字 -->
        <span>{{author.customerName}}</span>
      </div>
  
      <!-- 发表的时间 -->
      <div class="date">
        {{getDate}}
      </div>
    </div>
  
    <!-- 内容 -->
    <div class="yan-good-comment-content">
      <p>
        {{comment.content}}
      </p>
    </div>

    <!-- 图片区 -->
    <div class="yan-good-comment-pics">
      <img v-for="(pic, index) in comment.picture" :key="index" :src="pic" alt="comment">
    </div>
  </div>
</template>

<script>
export default {
  props: ['comment', 'author'],
  computed: {
    getDate() {
      let date = new Date(Number.parseInt(this.comment.commentDate));
      let result = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getMilliseconds()}`;
      return result;
    }
  }
}
</script>

<style scoped>
/* 评论头部 */
.yan-good-comment-header {
  padding: 35px 0 20px;
}

/* 用户信息 */
.user {
  display: flex;
  align-items: center;
}

.user img {
  margin-right: 20px;
  max-width: 80px;
  border-radius: 50%;
}

/* 日期 */
.date {
  padding-top: 25px;
  color: rgb(127, 127, 127);
  font-size: 32px;
  /*小 bug*/
  /*font-size: 12px; */
}

/* 评论内容区 */
.yan-good-comment-content {
  width: 90%;
  word-break: break-all;
  word-wrap: break-word;
  line-height: 45px;
}

.yan-good-comment-content p {
    /*小 bug*/
    /*font-size: 14px; */
}

/* 图片 */
.yan-good-comment-pics {
  margin-top: 15px;
  padding-bottom: 37px;
}

.yan-good-comment-pics img {
  max-height: 200px;
  margin-right: 20px;
}
</style>
