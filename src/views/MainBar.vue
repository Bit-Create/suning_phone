<template>
  <i-menu mode="horizontal" theme="light" active-name="store" style="margin-bottom: 12px">
    <menu-item name="store" to="/store">
      <icon type="ios-phone-portrait"/>
      商品列表
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
