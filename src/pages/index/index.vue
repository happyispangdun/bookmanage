<!--
 * @Author: your name
 * @Date: 2020-03-31 16:08:57
 * @LastEditTime: 2020-04-01 10:14:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bookmanage\src\pages\index\index.vue
 -->

<template>
  <div class="main">
    <div id="mycharts" :style="{width:'99%',height:'500px'}"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myCharts = this.$echarts.init(document.getElementById('mycharts'))
      myCharts.setOption({
        title: {text: ''},
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10]
        }]
      })
    }
  }
}
</script>

<style scoped>

</style>
