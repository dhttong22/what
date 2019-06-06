<template>
    <div>
        这里是登录页面
        <div class="block">
            <span class="demonstration">默认</span>
        <el-slider v-model="value1"></el-slider>
        </div>
    </div>
</template>

<script>
export default {
 data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
}
</script>

<style>

</style>
