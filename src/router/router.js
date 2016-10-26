import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';
import Upload from '../components/Upload.vue';
import ListQuestionnaire from '../components/ListQuestionnaire.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/upload', component: Upload },
        { path: '/list', component: ListQuestionnaire }
    ]
});

