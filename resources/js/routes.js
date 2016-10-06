const Home   = { template: '<p> vai Home</p>'}
const Upload = { template: '<p> vai </p>'}

const routes = [
    { path: '/',       component: Home },
    { path: '/upload', component: Upload }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')
