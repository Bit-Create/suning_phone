<template>
  <div>
    <main-bar></main-bar>
    <router-view></router-view>
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
