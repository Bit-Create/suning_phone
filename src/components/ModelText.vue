<template>
  <span :class="{clicked: isClick}" @click="setClicked">{{text}}</span>
</template>

<script>
export default {
name: "ModelText",
  props: {
    text: String,
    index: Number,
    isClick: Boolean
  },
  methods: {
    setClicked() {
      this.$store.commit('setmodels', this.index)
    }
  }
}
</script>

<style scoped>
  span {
    padding: 8px 8px;
    border: 1px solid #BDBDBD;
    margin-left: 14px;
  }

  .clicked {
    border:2px solid #FF8000;
  }

  span:hover {
    border:2px solid #FF8000;
    cursor: pointer;
  }
</style>
