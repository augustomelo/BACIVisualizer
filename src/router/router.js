import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '../views/HomeView.vue';
import UploadView from '../views/UploadView.vue';
import ListQuestionnaireView from '../views/ListQuestionnaireView.vue';
import QuestionnaireView from '../views/QuestionnaireView.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', component: HomeView },
        { path: '/upload', component: UploadView },
        { path: '/list', component: ListQuestionnaireView },
        { path: '/questionnaireView', component: QuestionnaireView },
    ],
});

