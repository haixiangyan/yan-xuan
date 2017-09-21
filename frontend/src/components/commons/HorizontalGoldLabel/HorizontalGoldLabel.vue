<template>
  <div>
      <span>{{title}}</span>
  </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
div {
    display: inline-block;
    padding: 7px;
    border-radius: 7px;
    border: 2px solid rgb(184, 159, 122);
}

span {
    text-align: center;
    font-size: 30px;
    color: rgb(184, 159, 122);
}
</style>
