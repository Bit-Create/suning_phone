<template>
    <card :padding=padding :bordered=borderShow to="/detailed">
      <div @click="commitID">
        <img :src='item.img_src'/>
        <span>
          <span style="color: #FF6600">￥ </span>
          <b class="p_price">{{item.price | showPrice}}</b>
        </span>
        <p class="p_title" :title="item.title">{{item.i_title}}</p>
        <p class="p_count"><b style="color: #2272C8">{{item.evaluation}}</b> 评价</p>
        <p>苏宁自营</p>
      </div>
    </card>
</template>

<script>
import {setCookie} from "@/js/cookie";

export default {
  name: "PhoneCard",
  props: {
    item: Object
  },
  data () {
    return {
      padding: 10,
      borderShow: false
    }
  },
  methods: {
    commitID() {
      setCookie("id", this.item.id)
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
 img{
   width: 240px;
   height: 240px;
 }
 img:hover{
   cursor: pointer;
 }

 div{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 440px;
   width: 260px;
 }

 .p_price{
   color: #FF8000;
   font-size: 20px;
 }

 .p_title:hover{
   color: #FF8000;
   cursor: pointer;
 }

 .p_count {
   color: #BDBDBD;
 }

 p{
   margin-top: 5px;
   color: black;
 }

</style>
