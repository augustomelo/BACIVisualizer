import Vue from 'vue';
import App from './App.vue';

import router from './router/router';
import store from './store/store';

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});

export { app, router };
