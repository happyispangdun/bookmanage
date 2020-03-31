<template>
  <div id="app">
    <el-container class="box1">
      <el-header class="header-box"></el-header>
      <el-container>
        <el-aside
          width="220px"
          class="box"
        >
          <Menu></Menu>
        </el-aside>
        <el-main class="box">
          <div class="title-box">
            <span>您的位置：</span>
            <el-breadcrumb separator-class="el-icon-arrow-right" style="padding:4px">
              <el-breadcrumb-item v-for="(item,index) in this.$route.meta" :key="index">{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from '@/components/menu'
import './App.less'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    Menu
  },
  methods: {
  }
}
</script>

<style>
.title-box span{
  display: inline-block;
  float: left;
  margin-right: 10px;
}
</style>
