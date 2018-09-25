<template>
  <div class="yan-display-header-wrapper" v-bind:style="{ background: `url(${bg})`}">
    <div :class="['yan-display-title', textClass]">{{title[index]}}</div>
    <a :class="['yan-display-more-btn', bgClass]" href="/">
      <span :class="textClass">查看全部</span>
      <i :class="['fa fa-chevron-right', textClass]" aria-hidden="true"></i>
    </a>
  </div>
</template>

<script>
export default {
  props: ['index'],
  data() {
    return {
      title: ['周一周四 · 新品首发', '人气推荐 · 好物精选',]
    }
  },
  computed: {
    textClass() {
      let className = '';
      switch (this.index) {
        case 0:
          return 'yellow-text'
        case 1:
          return 'blue-text';
      }
    },
    bgClass() {
      let className = '';
      switch (this.index) {
        case 0:
          return 'yellow-bg'
        case 1:
          return 'blue-bg';
      }
    },
    bg() {
      switch (this.index) {
        case 0:
          return 'static/img/header/header-1.png';
        case 1:
          return 'static/img/header/header-2.png'
      }
    }
  }
}    
</script>

<style scoped>
.yan-display-header-wrapper {
  display: flex;
  height: 350px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}


/*标题*/

.yan-display-title {
  text-align: center;
  font-size: 50px;
}


/*查看全部按钮*/

.yan-display-more-btn {
  display: inline-block;
  margin-top: 30px;
  height: 70px;
  width: 270px;
  line-height: 70px;
  text-align: center;
}


/*颜色样式*/

.blue-text {
  color: rgb(139, 160, 182);
}

.blue-bg {
  background: rgb(216, 229, 241);
}

.yellow-bg {
  background: rgb(244, 233, 203);
}

.yellow-text {
  color: rgb(180, 160, 120);
}
</style>
