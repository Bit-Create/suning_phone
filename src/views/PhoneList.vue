<template>
  <div style="margin: 12px 10%">

<!--    循环创建商品卡片-->
    <row :gutter="1" type="flex" justify="center" style="margin-top: 12px" v-for="row in data">
      <i-col v-for="item in row"><phone-card :item="item"></phone-card></i-col>
    </row>

<!--    翻页组件-->
    <row justify="center" type="flex">
      <page :total="page" show-elevator show-sizer></page>
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
