<template>
  <div class="yan-category-content-wrapper">
    <!-- 商品分类的内容 -->
    <div class="yan-category-content">
      <!-- 商品的头图片 -->
      <div class="yan-category-img">
        <img :src="category.picture" alt="category picture">
      </div>

      <!-- 商品的标题 -->
      <div class="yan-category-title">
        <div></div>
        <span>{{category.name}}分类</span>
        <div></div>
      </div>

      <!-- 商品的展示 -->
      <div class="yan-category-goods">
        <yan-sub-category class="yan-sub-category" v-for="(subCategory, index) in category.subCategory" :key="index" :subCategory="subCategory"></yan-sub-category>
      </div>
    </div>
  </div>
</template>

<script>
// 引入子分类
import YanSubCategory from '@/components/pages/Category/Content/SubCategory/SubCategory';

export default {
  props: ['category'],
  components: {
    YanSubCategory
  }
}
</script>

<style scoped>
.yan-category-content-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: auto;
}

.yan-category-content {
  padding: 20px;
}

/* 分类图片 */
.yan-category-img img {
  max-width: 100%;
}

/* 商品分类的标题 */
.yan-category-title {
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.yan-category-title div {
  display: inline-block;
  width: 50px;
  border-bottom: 1px solid rgb(200, 200, 200);
}

.yan-category-title span {
  font-size: 34px;
  margin: 0 20px;
}

/* 商品的子分类 */
.yan-category-goods {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.yan-sub-category {
  display: inline-block;
  margin-left: 23px;
}
</style>
