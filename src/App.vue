<template>
  <div id="app">
    <el-container class="box1">
      <el-aside
        width="200px"
        style="background-color: rgb(238, 241, 246)"
      ></el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px;background-color:rgb(238, 241, 246);"></el-header>
        <el-main style="background-color:rgb(238, 241, 246);">
          <div style="background-color:#ffffff;height:30px;margin: 0 auto; padding:20px 10px 0px 0px;">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import './App.less'
export default {
  name: 'App'
}
</script>

<style>

</style>
