import VueRouter from 'vue-router';
import home from './components/Home';
import about from './components/About';
let routes =[
    {
        path: '/',
        component: home,
    },
    {
        path: '/about',
        component: about,
    }
];

export  default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});
