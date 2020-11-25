<template>
  <div>
    <card :padding=padding :bordered=borderShow to="/detailed">
      <img src='../assets/Login.jpg'/>
      <span style="color: #FF6600">￥ </span>
      <b class="p_price">{{item.price | showPrice}}</b>
      <p class="p_title" :title="item.describe">{{item.title}}</p>

      <p class="p_count"><b style="color: #2272C8">{{item.count}}</b> 评价</p>
      <p>{{item.storeName}}</p>
    </card>
  </div>
</template>

<script>
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
   height: 480px;
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
