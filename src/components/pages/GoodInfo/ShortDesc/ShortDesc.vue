<template>
  <div class="yan-good-short-desc">
    <!-- 图片 -->
    <div class="yan-desc-avatar">
        <img :src="img" alt="avatar">
    </div>

    <!-- 文字描术 -->
    <div class="yan-desc-content">
        <div class="yan-desc-first">{{firstTitle}}</div>
        <div>{{secondTitle}}</div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['img', 'firstTitle', 'secondTitle']
}
</script>

<style scoped>
.yan-good-short-desc {
    display: flex;
    align-items: center;
}

/* 图片部分 */
.yan-desc-avatar img {
    margin-right: 20px;
    border-radius: 50%;
    width: 80px;
    height: 80px;
}

/* 文字部分 */
.yan-desc-first {
    margin-bottom: 30px;
}
</style>
