<template>
  <div>
    <row :gutter="1" type="flex" justify="center" style="margin-top: 14px" v-for="row in data">
      <i-col v-for="item in row"><phone-card :item="item"></phone-card></i-col>
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
      data: []
    }
  },
  created() {
    this.data = selectPhonePage()
  }
}
</script>

<style scoped>
</style>
