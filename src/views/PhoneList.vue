<template>
  <div>
    <Row :gutter="0" type="flex" justify="center">
      <i-col >
        <phone-card></phone-card>
      </i-col>
      <i-col >
        <phone-card></phone-card>
      </i-col>
      <i-col >
        <phone-card></phone-card>
      </i-col>
      <i-col >
        <phone-card></phone-card>
      </i-col>
      <i-col >
        <phone-card></phone-card>
      </i-col>
    </Row>
    <Row :gutter="0" type="flex" justify="center">
      <i-col >
        <phone-card></phone-card>
      </i-col>
      <i-col >
        <phone-card></phone-card>
      </i-col>
      <i-col >
        <phone-card></phone-card>
      </i-col>
      <i-col >
        <phone-card></phone-card>
      </i-col>
      <i-col >
        <phone-card></phone-card>
      </i-col>
    </Row>
  </div>
</template>

<script>
import PhoneCard from "@/components/PhoneCard";
export default {
name: "PhoneList",
  components: {PhoneCard},
  data () {
    return {
      span: 4
    }
  }
}
</script>

<style scoped>

</style>
