<template>
  <div style="margin: 12px 10%">

<!--    循环创建商品卡片-->
    <row :gutter="1" type="flex" justify="center" style="margin-top: 12px" v-for="row in data">
      <i-col v-for="item in row"><phone-card :item="item"></phone-card></i-col>
    </row>

<!--    翻页组件-->
    <row justify="center" type="flex" v-show="isShow" style="margin: 24px 0px">
      <page :total=pageTotal
            show-elevator
            show-sizer
            show-total
            @on-change="setPageNum"
            @on-page-size-change="setPageSize"
            :page-size-opts=opt
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
      pageTotal: 0,
      pageNum: 1,
      pageSize: 10,
      isShow: false,
      opt: [10, 15, 20, 25]
    }
  },
  methods: {
    //当页码发生改变时，向数据库请求该页码的数据（点击页面）
    setPageNum(num) {
      this.pageNum = num
      this.requestData()
    },
    //当页面商品显示数量改变时，向数据库重新请求数据（选择页面显示数量）
    setPageSize(size) {
      this.pageSize = size
      this.requestData()
    },
    requestData() {
      selectPhonePage(this.pageNum, this.pageSize).then(res => {
        // console.log(res.data);
        this.data = []
        let col = []
        for (let index = 0; index < res.data.data.length; index++) {
          col.push(res.data.data[index])
          if((index + 1) % 5 == 0) {
            this.data.push(col)
            col = []
          }
        }
        this.isShow = true
        this.pageTotal = res.data.totalCount
      }).catch(res => {
        this.$Message.error("请求数据超时")
      })
    }
  },
  //创建组件时向服务器请求数据，第一次请求数据
  created() {
    this.requestData()
  }
}
</script>

<style scoped>
</style>
