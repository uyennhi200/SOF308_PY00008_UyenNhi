import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue';
import HomePage from '../components/Home.vue';
import BlogPage from '../components/Blog.vue';
import Lab1PY00008 from '../components/Lab1.vue';
import Bai1Lab2 from '../components/Bai1Lab2.vue';
import Bai2Lab2 from '../components/Bai2Lab2.vue';
import Bai3Lab2 from '../components/Bai3Lab2.vue';
import Bai4Lab2 from '../components/Bai4Lab2.vue';
import Lab3Page from '../components/Lab3.vue';
import Bai3Lab3 from '../components/Bai3Lab3.vue';
import Bai4Lab3 from '../components/Bai4Lab3.vue';
import Bai1Lab5 from '../components/Lab5/Bai1.vue';
import Bai2Lab5 from '../components/Lab5/Bai2.vue';
import Bai3Lab5 from '../components/Lab5/Bai3.vue';
import Bai4Lab5 from '../components/Lab5/Bai4.vue';
import Bai1Lab6 from '../components/Lab6/Bai1.vue';
import Bai2Lab6 from '../components/Lab6/Bai2.vue';
import Bai3Lab6 from '../components/Lab6/Bai3.vue';
import Bai4Lab6 from '../components/Lab6/Bai4.vue'





const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: About },
    { path: '/blog', component: BlogPage },
    { path: '/lab1', component: Lab1PY00008},
    { path: '/bai1lab2', component: Bai1Lab2},
    { path: '/bai2lab2', component: Bai2Lab2},
    { path: '/bai3lab2', component: Bai3Lab2},
    { path: '/bai4lab2', component: Bai4Lab2},
    { path: '/lab3', component: Lab3Page},
    { path: '/lab3bai3', component: Bai3Lab3},
    { path: '/lab3bai4', component: Bai4Lab3},
    { path: '/lab5bai1', component: Bai1Lab5},
    { path: '/lab5bai2', component: Bai2Lab5},
    { path: '/lab5bai3', component: Bai3Lab5},
    { path: '/lab5bai4', component: Bai4Lab5},
    { path: '/lab6bai1', component: Bai1Lab6},
    { path: '/lab6bai2', component: Bai2Lab6},
    { path: '/lab6bai3', component: Bai3Lab6},
    { path: '/lab6bai4', component: Bai4Lab6}


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;