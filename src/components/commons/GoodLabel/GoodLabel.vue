<template>
    <div :class="['yan-good-label-wrapper', labelInfo.type === 1 ? redClass: yelloClass]">
       {{labelInfo.title}}
    </div>
</template>

<script>
export default {
    props: ['labelInfo'],
    data() {
        return {
            redClass: 'red',
            yelloClass: 'yellow'
        }
    }
}
</script>

<style scoped>
.yan-good-label-wrapper {
    padding: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 25px;
    text-align: center;
    color: #fff;
}

.red {
    background: rgb(229, 104, 109);
}

.yellow {
    background: rgb(244, 143, 24);
}
</style>
