<template>
    <div class="choose-num">
        <!-- 减一件 -->
        <div @click="sub" class="sub">
            <img src="/static/icons/subtract.png" alt="sub">
        </div>
    
        <div class="num">
            <div>{{num}}</div>
        </div>
    
        <!-- 加一件 -->
        <div @click="add" class="add">
            <img src="/static/icons/add.png" alt="add">
        </div>
    </div>
</template>

<script>
export default {
    props: ['index'],
    computed: {
        num() {
            return this.$store.getters.cart[this.index].number;
        }
    },
    methods: {
        add() {
            this.$store.commit('addCartItemNum', {
                index: this.index
            });
        },
        sub() {
            this.$store.commit('subCartItemNum', {
                index: this.index
            });
        }
    }
}
</script>

<style scoped>
img {
    max-width: 50px;
}

.choose-num {
    width: 270px;
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
    height: 60px;
}

.num input {
    width: 50px;
    outline: none;
}

.sub,
.add {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #666;
    height: 60px;
}

.sub {
    border-radius: 7px 0 0 7px;
}

.add {
    border-radius: 0 7px 7px 0;
}
</style>
