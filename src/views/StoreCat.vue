<template>
  <div class="div-body">
    <span>送货至
      <Select style="width: 80px; margin: 0px 12px">
        <Option :value="item" v-for="item in cityList">{{ item }}</Option>
      </Select>
    </span>
    <span v-show="isShow"> 现在 <Button type="warning">登录</Button> ，您的商品将被永久保存，并可查看之前加入的商品</span><br>
    <cat-table :data="data" ref="catTable"></cat-table>

    <div class="bar">
      <div style="margin: 0px">
        <checkbox style="margin-left: 12px" @on-change="selectAll">全选</checkbox>
        <span class="delete-span">删除选中商品</span>
      </div>

      <div style="margin: 0px">
        <span>已选商品{{}}件</span>
        <span>总价（含运费）</span>
        <span style="color: #FF6600">￥ </span>
<!--        <b class="p_price">{{$refs.catTable.total}}</b>-->
        <b class="text-button">去结算</b>
      </div>
    </div>
  </div>
</template>

<script>
import CatTable from "@/components/CatTable";
import {selectUserCat} from "@/network/cat";
export default {
  name: "StoreCat",
  components: {CatTable},
  data () {
    return {
      cityList: ['武汉', '荆州', '宜昌', '天门'],
      isShow: true,
      data: []
    }
  },
  methods: {
    selectAll(status) {
      this.$refs.catTable.$refs.selection.selectAll(status)
    }
  },
  filters: {
    showPrice(price) {
      return price.toFixed(2)
    }
  },
  created() {
    this.data = selectUserCat()
    console.log(this.$refs.catTable);
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

.bar{
  display: flex;
  margin: 0px;
  height: 60px;
  justify-content: space-between;
  border: 1px solid #BDBDBD;
  align-items: center;
}

.text-button{
  font-size: 18px;
  color: white;
  background-color: #FF8000;
  width: 120px;
  height: 100%;
  text-align: center;
  line-height: 60px;
}

.text-button:hover {
  background-color: #EF2724;
}

.p_price{
  color: #FF8000;
  font-size: 20px;
}

.delete-span{
  align-self: flex-start;
}
</style>
