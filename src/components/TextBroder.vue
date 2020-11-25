<template>
  <span>{{text}}</span>
</template>

<script>
export default {
  name: "TextBroder",
  props: {
    text: String
  }
}
</script>

<style scoped>
  span {
    border: 1px #BDBDBD solid;
    color: #FF8000;
    font-size: 12px;
  }
</style>
