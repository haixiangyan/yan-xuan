<template>
    <div class="yan-title">
        <div class="line"></div>

        <div class="text">
            {{title}}
        </div>
    
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
.yan-title {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 文字部分 */
.text {
    margin: 20px;
    font-size: 40px;
}

/* 线段部分 */
.line {
    display: inline-flex;
    width: 100px;
    border-top: 1px solid rgb(127, 127, 127);
}
</style>
