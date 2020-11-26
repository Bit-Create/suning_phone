<template>
  <div>
    <main-bar></main-bar>
    <keep-alive include="PhoneList">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style>
</style>

<script>
import MainBar from "@/views/MainBar";
export default {
  components: {MainBar}
}
</script>
