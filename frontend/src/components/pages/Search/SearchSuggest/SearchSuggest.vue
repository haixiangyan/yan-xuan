<template>
  <div @click="search" class="yan-search-suggest">
    {{suggest.title}}
  </div>
</template>

<script>
export default {
  props: ['suggest'],
  methods: {
    search() {
      let keyword = this.suggest.title;
      let result = {
        data: []
      };

      // 发送请求获取搜索内容
      this.$http({
        method: 'post',
        url: `/goods/search`,
        body: {
          key: keyword
        }
      })
        .then((res) => {
          result.data = res.body.data;
        })
        .catch((err) => {
          console.log('vue-resource err', err);
        });
      
      // 将建议返回到父组件
      this.$emit('getResult', result);
    }
  }
}
</script>

<style scoped>
.yan-search-suggest {
  height: 120px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(200, 200, 200);
}
</style>
