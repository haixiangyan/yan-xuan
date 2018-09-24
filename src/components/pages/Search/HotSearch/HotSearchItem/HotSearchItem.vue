<template>
  <div :class="['yan-hot-search-item', {'very-hot': hotLabel.type === 0}]">
    {{hotLabel.title}}
  </div>
</template>

<script>
export default {
    props: ['hotLabel']
}
</script>

<style scoped>
div {
    border: 1px solid rgb(153, 153, 153);
    color: rgb(153, 153, 153);
}

.yan-hot-search-item {
    display: inline-block;
    padding: 15px 20px;
    font-size: 32px;
    border-radius: 7px;
}

.very-hot {
    border: 1px solid rgb(180, 40, 45);
    color: rgb(180, 40, 45);
}
</style>
