<template>
  <div class="yan-hot-search">
      <!-- 标题 -->
      <div class="yan-hot-header">
        <h3 class="yan-hot-title">
            热门搜索
        </h3>
      </div>

      <!-- 热门搜索标签 -->
      <div class="yan-hot-label">
        <yan-hot-search-item class="yan-hot-search-item" v-for="(hotLabel, index) in hotLabels" :key="index" :hotLabel="hotLabel"></yan-hot-search-item>
      </div>
  </div>
</template>

<script>
// 引入热门搜索标;签
import YanHotSearchItem from '@/components/pages/Search/HotSearch/HotSearchItem/HotSearchItem'

export default {
    data() {
        return {
            hotLabels: [
                {
                    title: '领220元全场满减券',
                    type: 0
                },
                {
                    title: '10大明星商品限时买...',
                    type: 0
                },
                {
                    title: 'APP下单享特惠',
                    type: 0
                },
                {
                    title: 'T恤',
                    type: 1
                },
                {
                    title: '小龙虾',
                    type: 1
                },
                {
                    title: '牙刷',
                    type: 1
                },
                {
                    title: '输入口令领8折和券礼...',
                    type: 0
                },
                {
                    title: '收纳',
                    type: 1
                },
                {
                    title: '凉拖',
                    type: 1
                }
            ]
        }
    },
    components: {
        YanHotSearchItem
    }
}
</script>

<style scoped>
.yan-hot-search {
    background: #fff;
}

/* 热门搜索的头部 */
.yan-hot-header {
    height: 120px;
    display: flex; 
    align-items: center; 
}

/* 标题 */
.yan-hot-title {
    color: #666
}

/* 热门搜索的标签 */
.yan-hot-search-item {
    margin: 0 40px 40px 0;
}
</style>
