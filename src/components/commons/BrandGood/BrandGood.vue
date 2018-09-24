<template>
    <div class="yan-brand-good-wrapper">
        <div class="yan-brand-good-intro">
            <h2>{{good.name}}</h2>
            <div>
                <span>{{good.price}}元起</span>
            </div>
            <yan-horizontal-gold-label class="yan-label" v-if="good.label" :title="good.label"></yan-horizontal-gold-label>
        </div>

        <img class="yan-brand-good-avatar" :src="good.img" alt="">
    </div>
</template>

<script>
// 引入标签
import YanHorizontalGoldLabel from '@/components/commons/HorizontalGoldLabel/HorizontalGoldLabel';

export default {
    props: ['good'],
    components: {
        YanHorizontalGoldLabel
    }
}
</script>

<style scoped>
.yan-brand-good-wrapper {
    display: inline-block;
    position: relative;
    height: 300px;
    background: rgb(244, 244, 244);
}

/*制造商的简介*/
.yan-brand-good-intro {
    position: absolute;
    top: 30px;
    left: 30px;
}

.yan-brand-good-intro h2 {
    margin-bottom: 10px;
}

.yan-brand-good-intro span {
    font-size: 32px;
}

/*制造商的图片*/
.yan-brand-good-avatar {
    max-height: 100%;
}

/*标签样式*/
.yan-label {
    margin-top: 10px;
}
</style>
