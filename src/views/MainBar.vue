<template>
  <i-menu mode="horizontal" theme="light" active-name="store">
    <menu-item name="store" to="/phone">
      <icon type="ios-phone-portrait"/>
      手机
    </menu-item>
    <menu-item name="cat" to="/cat">
      <icon type="ios-cart-outline"/>
      购物车
    </menu-item>
  </i-menu>
</template>

<script>
export default {
name: "MainBar",
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
