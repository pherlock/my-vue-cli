import Vue from 'vue';
import Router from 'vue-router';
import { demoRoutes } from '@/pages/containers/demo/app.js';

Vue.use(Router);

export default new Router({
	routes: [
		...demoRoutes
		// {
		// 	path: '/',
		// 	name: 'HelloWorld',
		// 	component: HelloWorld
		// }
	]
});
