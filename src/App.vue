<template>
  <div id="app">
    <h1>
      这里是主页面
    </h1>

    <router-view></router-view>
    
<el-calendar v-model="value">
</el-calendar>

  </div>
</template>

<script>
  // import axios from 'axios'

 export default {
   mounted(){
    this.$axios({
    url: "https://api.github.com/users",
    method: "GET",
   }).then(res => {
      console.log(res)
    })
   },

    data() {
      return {
        value: new Date()
      }
    }
  }

</script>

<style>


</style>
