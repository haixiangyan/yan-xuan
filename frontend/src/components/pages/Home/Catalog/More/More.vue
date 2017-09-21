<template>
    <router-link to="/search"  class="yan-catalog-more">
        <div class="yan-catalog-text">更多{{title}}好物</div>
        <div>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ['name', 'title'],
    methods: {
        
    }
}
</script>

<style scoped>
.yan-catalog-more {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;;
    align-items: center;
    width: 450px;
    height: 540px;
    background: #f4f4f4;
}

.yan-catalog-text {
    margin-bottom: 80px;
    font-size: 40px;
}
</style>
