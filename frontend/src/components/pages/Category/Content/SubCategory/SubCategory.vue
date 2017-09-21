<template>
  <router-link tag="div" to="/search" class="yan-sub-category-item">
      <!-- 图片 -->
      <div class="yan-item-img">
           <img :src="subCategory.photo" alt=""> 
      </div>

      <!-- 标题 -->
      <div class="yan-iten-name">
          {{subCategory.name}}
      </div>
  </router-link>
</template>

<script>
export default {
    props: ['subCategory']
}
</script>

<style scoped>
.yan-sub-category-item {
    width: 200px;
}

/* 图片 */
.yan-item-img img {
    min-width: 100%;
}

/* 分类的名字 */
.yan-iten-name {
    height: 100px;
    text-align: center;
    font-size: 32px;
}
</style>

