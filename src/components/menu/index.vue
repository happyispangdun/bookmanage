<!--
 * @Author: your name
 * @Date: 2020-03-27 15:02:59
 * @LastEditTime: 2020-04-03 11:07:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bookmanage\src\components\menu\Menu.vue
 -->
<template>
  <div class="menuBox">
    <div class="iconBox">
      <i :class="iconClass" @click="handleCollapse"></i>
    </div>
    <el-menu
      default-active="2"
      :collapse="isCollapse"
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
              <i :class="item.icon"></i>
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
            <i :class="item.icon"></i>
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
      iconClass: 'iconfont icon-caidanshouqi',
      isCollapse: false,
      uniqueOpened: true,
      menuList: [
        {
          index: '/',
          title: '首页',
          icon: 'el-icon-s-home'
        },
        {
          index: '/test-1',
          title: '测试',
          icon: 'el-icon-s-tools',
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
    handleCollapse () {
      this.isCollapse = !this.isCollapse
      this.iconClass = this.isCollapse ? 'iconfont icon-caidanzhankai' : 'iconfont icon-caidanshouqi'
    }
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
.el-menu--collapse{
  padding-top: 40px;
  min-height: 400px;
  height: calc(~"100% - 30px");
}
.el-menu-item [class^=el-icon-]{
  font-size: 22px;
}
.menuBox {
  height: 100%;
}
.iconBox {
  margin-left: 10px;
  float: right;
  z-index: 99999;
  color: #ffffff;
  position: relative;
  // top: 45%;
  right: 0px;
}
</style>
