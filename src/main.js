import Vue from 'vue'
import Vonic from 'vonic'
import routes from './router'


Vue.use(Vonic.app, {
	routes,
})