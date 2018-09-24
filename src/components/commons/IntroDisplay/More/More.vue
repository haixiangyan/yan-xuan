<template>
    <div class="yan-display-more">
        <div class="yan-display-text-wrapper">
            <div>
                查看全部
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['url']
}
</script>

<style scoped>
.yan-display-more {
    display: inline-block;
    width: 330px;
    height: 330px;
}

/*查看更多内容*/
.yan-display-text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 330px;
    height: 330px;
    background: #ddd;
}

.yan-display-text-wrapper>div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 95%;
    width: 95%;
    background: #fff;
    color: rgb(102, 102, 102);    
}
</style>

