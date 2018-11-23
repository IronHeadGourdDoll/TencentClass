import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import Class from '@/pages/class/Class'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/class',
      name: 'Class',
      component: Class
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
