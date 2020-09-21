import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Admin from '../views/admin/index.vue'
import UserAd from '../views/admin/User/index.vue'
import AboutAd from  '../views/About.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
	redirect:'/login'
  },
  //默认跳到login
  {
    path: '/login',
  	name: 'Login',
	component:Login
  },
  {
    path: '/admin',
  	name: 'Admin',
  	component:Admin,
	children:[
		{path:'user',component:UserAd},
		{path:'about',component:AboutAd},
		{path:'',redirect:'user'},
	]
  },
 
]

const router = new VueRouter({
  routes
})

export default router