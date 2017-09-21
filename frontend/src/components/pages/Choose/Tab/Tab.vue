<template>
  <div :class="['choose-tab', {'is-active': selectedType === index}]" @click="select">
    {{title}}
  </div>
</template>

<script>
export default {
    props: ['title', 'index'],
    computed: {
        selectedType() {
            return this.$store.getters.selection.type;
        }
    },
    methods: {
        select() {
            this.$store.commit('changeType', {
                type: this.index
            });
        }
    }
}
</script>

<style scoped>
.choose-tab {
    display: inline-flex;
    height: 80px;
    justify-content: center;
    align-items: center;
    padding: 0 45px;
    border: 1px solid #666;
    border-radius: 6px;
}

.is-active {
    color: rgb(180, 40, 45);
    border: 1px solid rgb(180, 40, 45);
}
</style>
