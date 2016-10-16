import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});

export { app, router };
