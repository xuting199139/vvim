import Vue from 'vue'
import Vonic from 'vonic'
// Page Components
import App from '../App.vue'
import Home from '../page/Home'
import Pay from '../page/pay'
import Mine from '../page/mine'


// Routes
const routes = [
	{ 
		path: '/', 
		component: App,
		children: [
			{ path: 'home', component: Home },
			{ path: 'pay', component: Pay },
			{ path: 'mine', component: Mine },
		]
	}
]

Vue.use(Vonic.app, {
	routes: routes
})
  