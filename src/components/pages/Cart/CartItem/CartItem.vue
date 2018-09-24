<template>
  <div class="yan-cart-item">
    <!-- 勾选框 -->
    <div v-if="isShowCheck" @click="select" class="yan-item-check">
      <i v-show="cartItem.select === 0" class="fa fa-circle-o" aria-hidden="true"></i>
      <i v-show="cartItem.select === 1" class="fa fa-check-circle-o" aria-hidden="true"></i>
    </div>

    <!-- 商品的介绍 -->
    <div class="yan-item-intro">
      <!-- 商品的图片 -->
      <router-link tag="div" :to="`/good-info/${cartItem.ID}`" class="yan-item-pic">
        <img :src="cartItem.picture" alt="cart item">
      </router-link>

      <!-- 商品的描术 -->
      <div class="yan-item-spec">
          <!-- 商品的名字 -->
          <div class="yan-item-name">
            {{cartItem.name}}
            <span class="yan-iten-num">x{{cartItem.number}}</span>
          </div>

          <!-- 商品的类型 -->
          <div class="yan-item-type">
            {{cartItem.type}}
          </div>

          <!-- 数字选笃 -->
          <div class="yan-item-price">
            <span>&yen;{{cartItem.price}}</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cartItem', 'index', 'isShowCheck'],
  methods: {
    select() {
      this.$store.commit('selectCart', {
        index: this.index,
        state: this.cartItem.select === 0 ? 1 : 0
      })
    }
  }
}
</script>

<style scoped>
.yan-cart-item {
  display: flex;
  align-items: center;
  padding: 0 0 0 35px; 
  background: #fff;
}

/* 勾选框 */
.fa-circle-o {
  color: rgb(200, 200, 200);
  font-size: 50px;
}

.fa-check-circle-o {
  color: rgb(180, 40, 45);
  font-size: 50px;
}

/* 商品的介绍 */
.yan-item-intro {
  padding: 30px 0;
  margin-left: 25px;
  display: flex;
  align-items: center;
  flex-grow: 1;
  border-bottom: 1px solid rgb(200, 200, 200);
}

/* 商品的图片 */
.yan-item-pic {
  background: rgb(242, 242, 242);
  border-radius: 8px;
}

.yan-item-pic img {
  width: 180px;
}

/* 商品的详情 */
.yan-item-spec {
  padding: 25px 35px;
  display: inline-flex;
  flex-direction: column;
  flex-grow: 1;
  align-self: flex-start;
}

/* 商品的名字 */
.yan-item-name {
  margin-bottom: 15px;
  display: inline-flex;
  justify-content: space-between;
  font-size: 38px;
}

/* 商品的类型 */
.yan-item-type {
  margin-bottom: 15px;
  font-size: 32px;
  color: rgb(102, 102, 102);
}

/* 商品的价格 */
.yan-item-price {
  font-size: 38px;
}
</style>
