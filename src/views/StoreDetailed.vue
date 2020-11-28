<template>
  <div class="rowStyle">
    <Row :gutter="1">
      <i-col span="8">
        <img :src=data.img_src>
      </i-col>

      <i-col span="10" class-name="col-style">
        <b style="font-size: 18px">{{data.i_title}}</b>
        <p style="color: #FF6600; margin: 12px 0px">{{data.title}}</p>

        <div class="p_margin">
          <span class="item-span">价格</span>
          <span style="color: #EF2724"> ￥ </span>
          <b class="p_price">{{data.price + '.00'}}</b><br>
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
          <RadioGroup v-model="size" type="button" @on-change="setSize">
            <Radio label="8 + 64GB"></Radio>
            <Radio label="8 + 128GB"></Radio>
            <Radio label="16 + 256GB"></Radio>
          </RadioGroup>
        </div>

        <div class="p_margin">
          <span class="item-span" >规格</span>
          <RadioGroup v-model="model" type="button">
            <Radio label="官方标配"></Radio>
          </RadioGroup>
        </div>

        <div class="p_margin">
          <span class="item-span">数量</span>
          <Button size="small" :disabled="this.count <= 1" @click="decrement()">-</Button>
          <input type="text" v-model:value=count @change="changeCount"/>
          <Button size="small" :disabled="this.count >= 99" @click="increment()">+</Button>
          每人限购99件
          <div style="margin-left: 84px; margin-top: 12px">
            <Button type="error" style="margin-right: 24px" size="large">立即购买</Button>
            <Button type="warning" size="large" @click="addCat">
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
import {selectPhoneDetailed} from "@/network/phone";
import {checkCookie, getCookie, setCookie} from "@/js/cookie";
export default {
name: "StoreDetailed",
  components: {TextBroder},
  data() {
    return {
      cityList: ['武汉', '荆州', '宜昌', '天门'],
      count: 1,
      size: '8 + 64GB',
      model: '官方标配',
      data: {}
    }
  },
  methods: {
    decrement() {
      this.count--
      this.data.count  = this.count
    },
    setSize(){
      this.data.size = this.size
    },
    changeCount() {
      if(this.count < 1 || this.count > 99) {
        this.$Message.error("请输入1-99之间的数")
        this.count = 1
      }
        this.data.count = this.count
    },
    increment() {
      this.count++
      this.data.count  = this.count
    },
    addCat() {
      let catList = checkCookie("catList")
      let flag = 1
      catList = JSON.parse(catList)
      if (catList.data.length == 0) {
        catList.data.push(this.data)
      } else {
        for(let item of catList.data) {
          if (item.id == this.data.id && item.size == this.data.size) {
            if (item.count + this.data.count > 99) {
              this.$Message.error("购物车里已有" + this.count + "件该商品， 无法将此数量的商品加入购物车")
              return
            }
            item.count++
            flag = 0
            break
          }
        }
        if (flag) {
          catList.data.push(this.data)
        }
      }
      setCookie('catList', JSON.stringify(catList))
      this.$Message.success("加入购物车成功")
    }
  },
  created() {
    selectPhoneDetailed(getCookie('id')).then(res => {
      // console.log(res.data);
      this.data = res.data
      this.data.size = this.size
      this.data.model = this.model
      this.data.count = this.count
      document.title = this.data.i_title
    }).catch(res => {
      this.$Message.error("请求数据超时")
    })
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
