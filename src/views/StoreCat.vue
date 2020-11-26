<template>
  <div class="div-body">
    <span>送货至
      <Select style="width: 80px; margin: 0px 12px">
        <Option :value="item" v-for="item in cityList">{{ item }}</Option>
      </Select>
    </span>
    <span v-show="isShow"> 现在 <Button type="warning">登录</Button> ，您的商品将被永久保存，并可查看之前加入的商品</span><br>
    <cat-table :catdata="catdata" ref="catTable"></cat-table>
  </div>
</template>

<script>
import CatTable from "@/components/CatTable";
import {getCookie} from "@/js/cookie";
export default {
  name: "StoreCat",
  components: {CatTable},
  data () {
    return {
      cityList: ['武汉', '荆州', '宜昌', '天门'],
      isShow: true,
      catdata: [],
      price: 0
    }
  },
  created() {
    this.catdata = JSON.parse(getCookie('catList')).data
  }
}
</script>

<style scoped>
.div-body {
  margin: 0px 10% auto;
  margin-top: 14px;
}

span {
  color: black;
}
</style>
