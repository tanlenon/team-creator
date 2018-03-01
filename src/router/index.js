import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
	{
	    path: '/',
	    name: 'HomePage',
	    component: HomePage
	},
	{
	    path: '/profile',
	    name: 'Profile',
	    component: Profile
	}
  ]
})
