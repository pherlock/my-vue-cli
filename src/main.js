import Vue from 'vue';
import App from './App';
import router from './router';
import './css/index.scss';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#pages',
	router,
	render: h => h(App)
});
