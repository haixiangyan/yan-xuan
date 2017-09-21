<template>
    <div class="yan-ver-label">
        <div v-for="(character, index) in title" :key="index" class="yan-babel-title">
            {{character}}
        </div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
.yan-ver-label {
    display: inline-block;
    padding: 7px;
    border-radius: 7px;
    border: 2px solid rgb(184, 159, 122);
}

.yan-babel-title {
    text-align: center;
    font-size: 30px;
    color: rgb(184, 159, 122);
}
</style>
