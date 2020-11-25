<template>
  <div style="margin: 12px 10%">
    <row :gutter="1" type="flex" justify="center" style="margin-top: 12px" v-for="row in data">
      <i-col v-for="item in row"><phone-card :item="item"></phone-card></i-col>
    </row>
    <row justify="center" type="flex">
      <page :total="page" show-elevator></page>
    </row>
  </div>
</template>

<script>
import PhoneCard from "@/components/PhoneCard";
import {selectPhonePage} from "@/network/phone";
export default {
name: "PhoneList",
  components: {PhoneCard},
  data () {
    return {
      data: [],
      page: 100
    }
  },
  created() {
    this.data = selectPhonePage()
  }
}
</script>

<style scoped>
</style>
