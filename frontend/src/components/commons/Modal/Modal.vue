<template>
  <div class="yan-modal">
    <div class="yan-modal-content">
        {{title}}
    </div>
  </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style>
.yan-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 6;
}

/* 模态框的内容 */
.yan-modal-content {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    background: black;
    opacity: 0.8;
    color: #fff;
    border-radius: 15px;
}
</style>
