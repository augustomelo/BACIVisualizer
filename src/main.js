import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';

var a = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});

console.log(a);

