// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入路由
import VueRouter from  'vue-router'
// 引入网路请求插件
import VueResource from 'vue-resource'


import App from './App'
import Home from './pages/home'
import Quick from './pages/quick'
import Shopcar from './pages/shopcar'
import Myself from './pages/myself'
import ScoreShop from './pages/scoreshop'




// 安装
Vue.use(VueRouter)
Vue.use(VueResource)


// 定义路由规则
const routes = [
	{path: '',component: Home },
	{path: '/home',component: Home },
	{path: '/quick',component: Quick },
	{path: '/shopcar',component: Shopcar },
	// {path: '/myself',component: Myself ,children:[
	// 	{path:'scoreshop',component: ScoreShop}
	// ]},
	{path: '/myself',component: Myself },
	{path: '/scoreshop' , component: ScoreShop}
]
// 创建路由实例
const router = new VueRouter({
	routes
})
// 创建中英VUE
var CommonVM = new Vue();
window.CommonVM = CommonVM;
/* eslint-disable no-new */
// 将路由实例添加到vue实例中
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
