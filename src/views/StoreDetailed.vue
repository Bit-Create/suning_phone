<template>
  <div class="rowStyle">
    <Row :gutter="1">
      <i-col span="8">
        <img src="../assets/1000865.jpg">
      </i-col>

      <i-col span="10" class-name="col-style">
        <b style="font-size: 18px">华为/HUAWEI 畅享20 Pro 5G 8GB+128GB 深海蓝 超清全视屏 超广角AI三摄 移动联通电信5G全面屏全网通手机</b>
        <p style="color: #FF6600; margin: 12px 0px">60倍变焦60倍变焦60倍变焦60倍变焦60倍变焦60倍变焦</p>

        <div class="p_margin">
          <span class="item-span">价格</span>
          <span style="color: #EF2724"> ￥ </span>
          <b class="p_price">{{3000 | showPrice}}</b><br>
        </div>

        <div class="p_margin">
          <span class="item-span">送至</span>
          <Select style="width: 80px; margin: 0px 12px">
            <Option :value="item" v-for="item in cityList">{{ item }}</Option>
          </Select>
          有货 免运费，实际已提交订单页为准
        </div>

        <hr>

        <div class="p_margin" ref="model">
          <span class="item-span">型号</span>
          <model-text text="64GB"  :is-click=$store.state.models[0] :index=0></model-text>
          <model-text text="128GB" :is-click=$store.state.models[1] :index=1></model-text>
          <model-text text="256GB" :is-click=$store.state.models[2] :index=2></model-text>
        </div>

        <div class="p_margin">
          <span class="item-span">规格</span>
          <model-text text="官方标配" :is-click=true></model-text>
        </div>

        <div class="p_margin">
          <span class="item-span">数量</span>
          <Button size="small" :disabled="this.count <= 1" @click="decrement()">-</Button>
          <input type="text" v-model:value=count />
          <Button size="small" :disabled="this.count >= 99" @click="increment()">+</Button>
          每人限购99件
          <div style="margin-left: 84px; margin-top: 12px">
            <Button type="error" style="margin-right: 24px" size="large">立即购买</Button>
            <Button type="warning" size="large">
              <icon type="ios-cart-outline"/>
              加入购物车
            </Button>
          </div>

        </div>

        <hr>

        <div class="p_margin">
          <span class="item-span">服务</span>
          <text-broder text="换"/> 30天换新无忧
          <text-broder text="免"/> 免举证退换货
          <text-broder text="急"/> 急速退
          <text-broder text="延"/> 配用延时赔
          <text-broder text="退"/> 7天无理由退货
          <text-broder text="价"/> 贵就赔
          <text-broder text="取" style="margin-left: 84px"/> 退货取件-0元取件
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
import TextBroder from "@/components/TextBroder";
import ModelText from "@/components/ModelText";
export default {
name: "StoreDetailed",
  components: {ModelText, TextBroder},
  data() {
    return {
      cityList: ['武汉', '荆州', '宜昌', '天门'],
      count: 1,
      models: []
    }
  },
  methods: {
    decrement() {
      this.count--
    },
    increment() {
      this.count++
    },
    setModels(index) {
      return this.$store.state.models[index]
    }
  },
  filters: {
    showPrice(price) {
      return price.toFixed(2)
    }
  }
}
</script>

<style scoped>
  img {
    width: 400px;
    height: 400px;
  }
  .rowStyle {
    margin: 12px 10% auto;
  }

  .p_price{
    color: #EF2724;
    font-size: 24px;
  }

  .p_margin{
    margin: 22px 0px;
  }

  input{
    width: 30px;
    text-align: center;
    margin: 0px 3px;
  }

  .item-span{
    letter-spacing: 2em;
  }
</style>
