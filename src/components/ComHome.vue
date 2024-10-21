<template>
  <div>
    <Products v-for="item in products" :key="item.id" :product="item"/>
  </div>
</template>

<script>
import Items from "../database/items"
import Products from "./ComProduct.vue"
export default {
name:'ComHome',
components:{
Products
},
data(){
  return{
    products:Items
  }
}

}
</script>

<style>

</style>