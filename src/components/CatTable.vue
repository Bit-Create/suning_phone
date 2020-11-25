<template>
  <Table :columns="columns" :data="data" style="margin: 14px 0px"  disabled-hover>
    <template slot-scope="{ row }" slot="img">
      <img src="../assets/Login.jpg"/>
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
          className: 'title-style',
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
      ]
    }
  },
  props: {
    data: Array
  },
  methods: {
    rowClassName (row, index) {
        return 'row-style';
    },
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
