<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
  </el-aside>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
