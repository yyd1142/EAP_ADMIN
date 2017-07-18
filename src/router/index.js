import Vue from 'vue'
import Router from 'vue-router'
const Login = resolve => require(['@/views/Login.vue'], resolve)
const Activity = resolve => require(['@/views/Activity.vue'], resolve)
const AddActivity = resolve => require(['@/views/AddActivity.vue'], resolve)
const EditActivity = resolve => require(['@/views/EditActivity.vue'], resolve)
const ActivityDetail = resolve => require(['@/views/ActivityDetail.vue'], resolve)
const User = resolve => require(['@/views/User.vue'], resolve)
const UserDetail = resolve => require(['@/views/UserDetail.vue'], resolve)
const Statistics = resolve => require(['@/views/Statistics.vue'], resolve)
const Config = resolve => require(['@/views/Config.vue'], resolve)
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
    },
    {
      path: '/add_activity',
      component: AddActivity
    },
    {
      path: '/edit_activity',
      component: EditActivity
    },
    {
      path: '/info_activity',
      component: ActivityDetail
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/user/:id',
      component: UserDetail
    },
    {
      path: '/statistics',
      component: Statistics
    },
    {
      path: '/config',
      component: Config
    }
  ]
})
