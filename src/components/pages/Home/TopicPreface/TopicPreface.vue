<template>
    <div class="yan-topic-preface-wrapper">
        <!--专题标题-->
        <div class="yan-preface-header">
            <a class="yan-preface-title" href="/">
                <span>专题精选</span>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
        </div>
    
        <!--封面-->
        <div class="yan-preface">
            <img :src="prefaceInfo.img" alt="preface">
        </div>
    
        <!--商品的介绍-->
        <div class="yan-preface-content">
            <div class="yan-preface-intro">
                <div class="yan-preface-name">{{prefaceInfo.name}}</div>
    
                <div class="yan-preface-desc">{{prefaceInfo.desc}}</div>
            </div>

            <div class="yan-preface-price">
                <span>{{prefaceInfo.price}}元起</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['prefaceInfo']
}
</script>

<style scoped>
.yan-topic-preface-wrapper {
    background: #fff;
}

/*标题*/
.yan-preface-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130px;
}

.yan-preface-title span {
    font-size: 40px;
}

.yan-preface-title i {
    color: rgb(132, 132, 132);
}

/*封面*/
.yan-preface img {
    min-width: 100%;
}

/*商品介绍*/
.yan-preface-content {
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}

.yan-preface-name {
    margin-bottom: 15px;
    font-size: 40px;
}

.yan-preface-desc {
    color: rgb(127, 127, 127);
}

.yan-preface-price span {
    color: rgb(180, 40, 45);
    font-size: 40px;
}
</style>
