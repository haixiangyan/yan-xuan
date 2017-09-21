<template>
  <div class="yan-good-spec">
    <!-- 商品参数的头部 -->
    <div class="info-title">
      商品参数
    </div>

    <!-- 商品的参数 -->
    <div class="info-wrapper">
      <!-- 每个参数 -->
      <div v-for="(info, index) in info" :key="index" class="info">
        <!-- 参数的键 -->
        <div class="info-attr">{{info.attrName}}</div>
        <!-- 参数的值 -->
        <div class="info-value">{{info.attrValue}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info']
}
</script>

<style scoped>
.yan-good-spec {
  padding: 35px;
  background: #fff;
}

/* 标题 */
.info-title {
  padding: 45px 0 30px;
  font-size: 38px;
  font-size: 14px; /*小 bug*/
}

/* 每个参数的样式 */
.info {
  padding: 15px 35px 15px 0;
  display: flex;
  align-items: center;
  border-top: 1px dashed rgb(153, 153, 153);
}

.info-attr {
  width: 200px;
  color: rgb(153, 153, 153);
}

.info-attr,
.info-attr {
  display: inline-flex;
  line-height: 50px;
}
</style>
