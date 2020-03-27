import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: ['首页']
    },
    {
      path: '/test-1',
      meta: ['测试']
    },
    {
      path: '/test-11',
      meta: ['测试', '测试-12']
    }
  ]
})
