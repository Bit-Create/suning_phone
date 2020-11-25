<template>
  <div style="margin: 12px 10%">

<!--    循环创建商品卡片-->
    <row :gutter="1" type="flex" justify="center" style="margin-top: 12px" v-for="row in data">
      <i-col v-for="item in row"><phone-card :item="item"></phone-card></i-col>
    </row>

<!--    翻页组件-->
    <row justify="center" type="flex">
      <page :total="pageTotal"
            show-elevator
            show-sizer
            @on-change="setPageNum"
            @on-page-size-change="setPageSize"
      >
      </page>
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
      pageTotal: 100,
      pageNum: 1,
      pageSize: 10,
    }
  },
  methods: {
    setPageNum(num) {
      console.log(num);
      this.pageNum = num
    },
    setPageSize(size) {
      console.log(size);
      this.pageSize = size
    }
  },
  created() {
    this.data = selectPhonePage()
  }
}
</script>

<style scoped>
</style>
