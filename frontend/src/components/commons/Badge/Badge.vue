<template>
  <div class="yan-badge">
    {{num}}
  </div>
</template>

<script>
export default {
    props: ['num']
}
</script>

<style scoped>
.yan-badge {
    position: absolute;
    right: -15px;
    top: -10px;
    color: #fff;
    background: rgb(180, 40, 45);
    width: 40px;
    height: 40px;
    font-size: 28px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
