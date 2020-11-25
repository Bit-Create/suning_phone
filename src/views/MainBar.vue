<template>
  <i-menu mode="horizontal" theme="light" :active-name='activeName' :on-select="setActive">
    <menu-item name="phone" to="/phone">
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
      activeName: window.location.pathname.substring(1,)
    }
  },
  methods: {
    setActive(name) {
      this.activeName =  window.location.pathname.substring(1,)
      console.log(this.activeName);
    }
  }
}
</script>

<style scoped>
</style>
