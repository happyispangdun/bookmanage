<!--
 * @Author: your name
 * @Date: 2020-03-27 15:02:59
 * @LastEditTime: 2020-03-31 15:51:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bookmanage\src\components\menu\Menu.vue
 -->
<template>
  <div class="menuBox">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      :unique-opened='uniqueOpened'
      router
      active-text-color="#ffd04b"
    >
      <template v-for="item in menuList">
        <template v-if="item.sub">
          <el-submenu
            :index="item.index"
            :key="item.index"
          >
            <template slot="title">
              <i></i>
              <span>{{item.title}}</span>
            </template>
            <template v-for="subItem in item.sub">
              <el-menu-item
                :index="subItem.index"
                :key="subItem.index"
              >{{subItem.title}}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item
            :index="item.index"
            :key="item.index"
          >
            <i></i>
            <span>{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      uniqueOpened: true,
      menuList: [
        {
          index: '/',
          title: '首页'
        },
        {
          index: '/test-1',
          title: '测试',
          sub: [
            {
              index: '/test-11',
              title: '测试-12'
            }
          ]
        },
        {
          index: '/test-2',
          title: '测试-21',
          sub: []
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  padding-top: 40px;
  width: 210px;
  min-height: 400px;
  height: calc(~"100% - 30px");
}
.menuBox {
  height: 100%;
}
</style>
