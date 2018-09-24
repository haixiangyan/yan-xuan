<template>
    <div class="choose-num">
        <!-- 减一件 -->
        <div @click="sub" class="sub">
            <img src="/static/icons/subtract.png" alt="sub">
        </div>
    
        <div class="num">
            <input disabled v-model="num" type="text">
        </div>
    
        <!-- 加一件 -->
        <div @click="add" class="add">
            <img src="/static/icons/add.png" alt="add">
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        num() {
            return this.$store.getters.selection.num;
        }
    },
    methods: {
        add() {
            this.$store.commit('addNum');
        },
        sub() {
            this.$store.commit('subNum');
        }
    }
}
</script>

<style scoped>
img {
    max-width: 50px;
}

.choose-num {
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.num {
    flex-grow: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #666;
    height: 90px;
}

.num input {
    width: 50px;
    outline: none;
    border: none;
    background: #fff;
}

.sub,
.add {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #666;
    height: 90px;
}

.sub {
    border-radius: 7px 0 0 7px;
}

.add {
    border-radius: 0 7px 7px 0;
}
</style>
