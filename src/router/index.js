import Vue from 'vue'
import Router from 'vue-router'
const Login = resolve => require(['@/views/Login.vue'], resolve)
const Activity = resolve => require(['@/views/Activity.vue'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/activity',
      component: Activity
    }
  ]
})
