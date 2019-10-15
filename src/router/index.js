

// Routes
const routes = [
	{ 
		path: '/', 
		component: () => import('../App.vue'),
		redirect: 'home',
		children: [
			{ path: 'home', component: () => import('../page/home') },
			{ path: 'pay', component: () => import('../page/pay') },
			{ path: 'mine', component: () => import('../page/mine') },
		]
	}
]

export default routes