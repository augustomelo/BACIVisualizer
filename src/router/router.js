import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';
import Upload from '../components/Upload.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/upload', component: Upload }
    ]
});

