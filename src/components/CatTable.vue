<template>
  <div>
    <Table
        :columns="columns"
        :data="catdata"
        style="margin: 14px 0px"
        disabled-hover
        ref="selection"
        @on-select="selectedData"
        @on-select-cancel="selectedCancelData"
        @on-select-all="selectedAllData"
        @on-select-all-cancel="selectedAllCancelData">
      <template slot-scope="{ row }" slot="img">
        <router-link to="/detailed">
          <Poptip trigger="hover" placement="right">
            <img src="../assets/Login.jpg" class="img-small"/>
            <div slot="content">
              <img src="../assets/Login.jpg" class="img-large"/>
            </div>
          </Poptip>
        </router-link>
      </template>
      <template slot-scope="{ row }" slot="model">
        <p>{{row.size}}</p>
        <p>{{ row.model }}</p>
      </template>
      <template slot-scope="{ row }" slot="price">
        {{row.price | showPrice}}
      </template>
      <template slot-scope="{ row }" slot="count">
        <div>
          <Button size="small" :disabled="row.count <= 1" @click="decrement(row)">-</Button>
          <input type="text" @change="changeCount(row)" v-model:value="row.count" />
          <Button size="small" :disabled="row.count >= 99" @click="increment(row)">+</Button>
          <p>最多可以买99件</p>
        </div>
      </template>
      <template slot-scope="{ row }" slot="sub">
        {{row.price * row.count | showPrice}}
      </template>
      <template slot-scope="{ row }" slot="operation">
        <span class="delete-span" @click="deleteRowCat(row.id)">删除</span>
      </template>
    </Table>

    <div class="bar">
      <div>
        <checkbox style="margin-left: 12px" @on-change="selectAll" v-model:value="checked">全选</checkbox>
        <span class="delete-span" @click="deleteSelectedData">删除选中商品</span>
      </div>

      <div style="display: flex; height: 60px">
        <span class="selected-span">已选商品 {{selectedIndex.length}} 件</span>
        <span class="price-span">
          <span>总价（含运费）：</span>
          <span style="color: #FF6600">￥ </span>
          <span class="p_price">{{total.toFixed(2)}}</span>
        </span>
        <b class="text-button">去结算</b>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "CatTable",
  data() {
    return {
      columns: [
        {
          type: 'selection',
          title: '全选',
          width: 40,
          align: "center"
        },
        {
          title: ' ',
          slot: 'img',
          align: "center",
        },
        {
          title: '商品信息',
          key: 'title',
          tooltip: 'true',
          align: "center",
          width: 360
        },
        {
          title: '规格',
          align: "center",
          slot: 'model'
        },
        {
          title: '单价（元）',
          align: "center",
          slot: 'price'
        },
        {
          title: '数量',
          align: "center",
          slot: 'count',
        },
        {
          title: '小计（元）',
          align: "center",
          slot: 'sub'
        },
        {
          title: '操作',
          align: "center",
          slot: 'operation'
        }
      ],
      total: 0,
      selectedIndex: [],
      checked: false
    }
  },
  props: {
    catdata: Array
  },
  methods: {
    decrement(row) {
      const item = this.catdata.find(item => item.id === row.id);
      item.count--
      this.selectedAllCancelData()
    },
    increment(row) {
      const item = this.catdata.find(item => item.id === row.id);
      item.count++
      this.selectedAllCancelData()
    },
    changeCount(row) {
      const item = this.catdata.find(item => item.id === row.id);
      if(row.count < 1 || row.count >99 ) {
        this.$Message.error("输入的数值必须在0~99之间")
        row.count = item.count
      } else {
        item.count = row.count
        this.selectedAllCancelData()
      }
    },
    deleteRowCat(id) {
      //根据id查找需要删除的商品
      this.selectedAllCancelData()
      const index = this.catdata.findIndex(item => item.id === id);
      //在数据中删除该商品
      this.catdata.splice(index, 1)
    },
    //选中某一项时触发
    selectedData(selection, row) {
      this.total += row.price * row.count
      //记录此条数据的id
      this.selectedIndex.push(row.id)
    },
    // 取消选中某一项时触发
    selectedCancelData(selection, row) {
      this.checked = false
      this.total -= row.price * row.count
      //移除此条数据的id
      for(let i = 0; i in this.selectedIndex; i++) {
        if (row.count === this.selectedIndex[i]) {
          this.selectedIndex.splice(i, 1)
        }
      }
    },
    //全选时触发
    selectedAllData(selection) {
      this.checked = true
      //将商品总价重置为0
      //将下标数组清空
      this.selectedIndex = []
      this.total = 0
      //重新对所有商品进行求和并将所有被选中的商品ID记录
      for(let item of this.catdata) {
        this.total += item.price * item.count
        this.selectedIndex.push(item.id)
      }
    },
    //取消全选时触发
    selectedAllCancelData(selection) {
      this.checked = false
      this.total = 0
      this.selectedIndex = []
    },
    //删除选中
    deleteSelectedData() {
      if (this.selectedIndex.length == 0) {
        this.$Message.info("未选中要删除的项")
      } else {
        for(let index of this.selectedIndex) {
          const i = this.catdata.findIndex(item => item.id === index)
          this.total -= this.catdata[i].count * this.catdata[i].price
          this.catdata.splice(i, 1)
        }
        this.$Message.info("删除成功")
      }
    },
    selectAll(status) {
      this.checked = true
      this.$refs.selection.selectAll(status)
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
}
</script>

<style scoped>
  .img-small {
    width: 100px;
    height: 100px;
    margin: 16px;
  }

  .img-large {
    width: 160px;
    height: 160px;
  }

  input{
    width: 25px;
    text-align: center;
    margin: 0px 3px;
    border: 0px;
  }

  .delete-span:hover{
    color: #2238c8;
    cursor: pointer;
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

  .selected-span{
    padding-right: 12px;
    border-right: 1px solid #BDBDBD;
    margin-right: 12px;
    margin-top: 12px;
    margin-bottom: 12px;
    line-height: 36px;
  }

  .price-span{
    line-height: 60px;
    margin-right: 12px;
  }
</style>
