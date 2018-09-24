<template>
  <span class="yan-good-label">
    {{label.title}}
  </span>
</template>

<script>
export default {
    props: ['label']
}
</script>

<style scoped>
.yan-good-label {
    display: inline-flex;
    padding: 7px 10px;
    justify-content: center;
    align-items: center;
    font-size: 34px;
    border: 1px solid rgb(244, 143, 24);
    color: rgb(244, 143, 24);
    border-radius: 6px;
}
</style>

