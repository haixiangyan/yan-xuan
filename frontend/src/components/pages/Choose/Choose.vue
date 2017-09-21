<template>
  <div class="yan-good-choose">
    <!-- 头部 -->
    <yan-header></yan-header>
  
    <!-- 内容 -->
    <div class="yan-choose-wrapper">
      <!-- 内容的头部 -->
      <div class="yan-choose-header">
        <!-- 商品的图片 -->
        <div class="good-img">
          <img :src="goodInfo.headImage[0]" alt="choose">
        </div>
  
        <div class="choose-hint">
          <div class="choosen-price">
            价格：&yen;{{goodInfo.price * selection.num}}
          </div>
          <div class="choosen-type">
            已选择：
            <span v-show="isShowHint">请选择规格数量</span>
          </div>
        </div>
      </div>

      <!-- 类别 -->
      <div class="yan-choose-type-wrapper">
        <div class="yan-choose-type-title">类别</div>

        <div class="yan-choose-type-wrapper">
          <yan-choose-tab class="choose-tab" 
              v-for="(type, index) in goodInfo.type" 
              :key="index" 
              :selectedType="selection.type"
              :index="index"
              :title="type">
          </yan-choose-tab>
        </div>
      </div>

      <!-- 数量 -->
      <div>
        <div class="yan-choose-num-title">数量</div>

        <yan-choose-num :num="selection.num"></yan-choose-num>
      </div>
    </div>

    <!-- 脚注 -->
    <yan-choose-footer :isBack="true"></yan-choose-footer>
  </div>
</template>

<script>
// 引入头部
import YanHeader from '@/components/commons/Header/Header';
// 引入标签
import YanChooseTab from '@/components/pages/Choose/Tab/Tab';
// 引入数字选择器
import YanChooseNum from '@/components/pages/Choose/Num/Num';
// 引入脚注部分
import YanChooseFooter from '@/components/pages/GoodInfo/Footer/Footer';

export default {
  data() {
    return {
      isShowHint: true,
    }
  },
  computed: {
    goodInfo() {
      return this.$store.getters.good;
    },
    selection() {
      return this.$store.getters.selection;
    },
  },
  components: {
    YanHeader,
    YanChooseTab,
    YanChooseNum,
    YanChooseFooter
  },
  mounted() {
    let id = this.$route.params.goodId;

    // 发送请求获取商品的全部数据
    this.$http({
      method: 'get',
      url: `/goods/goods/${id}`,
    })
      .then((res) => {
        // 初始化商品
        this.$store.commit('initGood', {
          good: res.body.data[0]
        });
      })
      .catch((err) => {
        console.log('vue-resource err', err);
      });
  }
}
</script>

<style scoped>
/* 商品的内容 */
.yan-choose-wrapper {
  margin-top: 116px;
  padding: 35px;
}

/* 选择商品的头部 */
.yan-choose-header {
  padding-bottom: 45px;
  display: flex;
  align-items: center;
}

/* 商品图片 */
.good-img {
  margin-right: 30px;
}

.good-img img {
  width: 220px;
}

/* 选中商品的提示 */
.choose-hint div,
.choose-hint span {
  font-size: 40px;
}

.choosen-price {
  padding-bottom: 15px;
}

/* 商品类别 */
.yan-choose-type-wrapper {
  padding-bottom: 20px;
}

.yan-choose-type-title {
  padding: 30px 0;
}

.choose-tab {
  margin: 0 30px 20px 0;
}

/* 商品的数量 */
.yan-choose-num-title {
  padding-bottom: 30px;
}
</style>
