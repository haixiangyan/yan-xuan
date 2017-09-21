<template>
    <div @click="gotoTop" :class="['yan-scroll-top']">
        <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
    </div>
</template>

<script>
export default {
    methods: {
        // 返回顶部
        gotoTop() {
            let self = this, sdelay = 0;
            window.scrollBy(0, -100);//Only for y vertical-axis
            if (document.body.scrollTop > 0) {
                sdelay = setTimeout(self.gotoTop, 1);
            }
        }
    }
}
</script>

<style scoped>
.yan-scroll-top {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    position: fixed;
    right: 20px;
    bottom: 150px;
    border-radius: 50%;
    background: #fff;
    border: 4px solid #D3DCE6;
    opacity: 0.5;
}

i {
    color: #8492A6;
}
</style>
