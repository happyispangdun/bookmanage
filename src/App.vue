<template>
  <div id="app">
    <el-container class="box1">
      <el-aside
        width="200px"
        class="box"
      >
      </el-aside>
      <el-container>
        <el-header class="header-box"></el-header>
        <el-main class="box">
          <div class="title-box">
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
