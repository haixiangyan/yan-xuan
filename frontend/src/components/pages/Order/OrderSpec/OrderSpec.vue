<template>
  <div class="yan-order-spec">
    <!-- 总价 -->
    <div class="yan-order-total spec-item">
        <span>商品合计</span>
        <span>&yen;{{totalPrice}}</span>
    </div>

    <!-- 优惠券 -->
    <div class="yan-order-total spec-item">
        <span>优惠券</span>
        <span>-&yen;{{discount}}</span>
    </div>

    <!-- 运费 -->
    <div class="yan-order-total spec-item">
        <span>运费</span>
        <span>&yen;{{deliver}}</span>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        totalPrice() {
            return this.$store.getters.totalPrice;
        },
        limitDeliver() {
            return this.$store.getters.limitDeliver;
        },
        deliver() {
            return this.$store.getters.totalPrice > this.$store.getters.limitDeliver ? 0 : this.$store.getters.deliver ;
        },
        discount() {
            return this.$store.getters.discount;
        }
    }
}
</script>

<style scoped>
.spec-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 45px 35px 45px 0;
    border-bottom: 1px solid rgb(200, 200, 200);
}

.spec-item span {
    font-size: 38px;
}
</style>
