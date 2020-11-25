<template>
  <Table
      :columns="columns"
      :data="data"
      style="margin: 14px 0px"
      disabled-hover
      ref="selection"
      @on-select="selectedData"
      @on-select-cancel="selectedCancelData"
      @on-select-all="selectedAllData"
      @on-select-all-cancel="selectedAllCancelData">
    <template slot-scope="{ row }" slot="img">
      <router-link to="/detailed">
        <img src="../assets/Login.jpg"/>
      </router-link>
    </template>
    <template slot-scope="{ row }" slot="model">
      <p>64GB</p>
      <p>官方标配</p>
    </template>
    <template slot-scope="{ row }" slot="price">
      {{row.price | showPrice}}
    </template>
    <template slot-scope="{ row }" slot="count">
      <div>
        <Button size="small" :disabled="row.count <= 1" @click="decrement(row)">-</Button>
        <input type="text" v-model:value=row.count />
        <Button size="small" :disabled="row.count >= 99" @click="increment(row)">+</Button>
        <p>最多可以买99件</p>
      </div>
    </template>
    <template slot-scope="{ row }" slot="sub">
      {{row.price * row.count | showPrice}}
    </template>
    <template slot-scope="{ row }" slot="operation">
      <span @click="deleteRowCat(row.count)">删除</span>
    </template>
  </Table>
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
      selectedIndex: [
        {
          state: 0
          //0 - 未选择
          //1- 全选
          //2 - 选择部分
        }
      ]
    }
  },
  props: {
    data: Array
  },
  methods: {
    decrement(row) {
      row.count--
    },
    increment(row) {
      row.count++
    },
    deleteRowCat(id) {
      //根据id查找需要删除的商品
      const index = this.data.findIndex(item => item.count === id);
      //在数据中删除该商品
      this.data.splice(index, 1)
    },
    //选中某一项时触发
    selectedData(selection, row) {
      this.selectedIndex[0].state = 2
      this.total += row.price * row.count
      //记录此条数据的id
      this.selectedIndex.push(row.count)
    },
    // 取消选中某一项时触发
    selectedCancelData(selection, row) {
      this.selectedIndex[0].state = 2
      this.total -= row.price * row.count
      //移除此条数据的id
      for(let i = 1; i in this.selectedIndex; i++) {
        if (row.count === this.selectedIndex[i]) {
          this.selectedIndex.splice(i, 1)
        }
      }
    },
    //全选时触发
    selectedAllData(selection) {
      //将商品总价重置为0
      //将下标数组清空
      this.selectedIndex[0].state = 1
      this.total = 0
      //重新对所有商品进行求和
      for(let item of selection) {
        this.total += item.price
      }
    },
    //取消全选时触发
    selectedAllCancelData(selection) {
      this.total = 0
      this.selectedIndex[0].state = 0
    },
    //删除选中
    deleteSelectedData() {
      if (this.selectedIndex[0].state == 0) {
        this.$Message.info('无删除项')
        return
      } else if (his.selectedIndex[0].state == 1) {
        this.data = []
      } else {
        for(let index of this.selectedIndex) {
          this.data.splice(index, 1)
        }
      }
      this.$Message.info("删除成功")
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
  img {
    width: 100px;
    height: 100px;
    margin: 16px;
  }

  input{
    width: 25px;
    text-align: center;
    margin: 0px 3px;
    border: 0px;
  }

  span:hover{
    color: #2238c8;
    cursor: pointer;
  }
</style>
