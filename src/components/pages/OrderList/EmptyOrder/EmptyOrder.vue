<template>
  <div class="yan-empty-order">
    <img src="static/icons/empty-order.png" alt="empty">
    <div>还没有任何订单呢</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.yan-empty-order {
    position: fixed;
    top: 218px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.yan-empty-order div {
    color: #666;
}
</style>

