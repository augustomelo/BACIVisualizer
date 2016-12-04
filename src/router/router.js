import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '../views/HomeView';
import UploadView from '../views/UploadView';
import ListQuestionnaireView from '../views/ListQuestionnaireView';
import QuestionnaireView from '../views/QuestionnaireView';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', component: HomeView },
        { path: '/upload', component: UploadView },
        { path: '/list', component: ListQuestionnaireView },
        { path: '/questionnaire', component: QuestionnaireView },
    ],
});

