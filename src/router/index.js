import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue';
import HomePage from '../components/Home.vue';
import BlogPage from '../components/Blog.vue';
import Lab1PY00008 from '../components/Lab1.vue';
import Bai1Lab2 from '../components/Bai1Lab2.vue';
import Bai2Lab2 from '../components/Bai2Lab2.vue';
import Bai3Lab2 from '../components/Bai3Lab2.vue';
import Bai4Lab2 from '../components/Bai4Lab2.vue'



const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: About },
    { path: '/blog', component: BlogPage },
    { path: '/lab1', component: Lab1PY00008},
    { path: '/bai1lab2', component: Bai1Lab2},
    { path: '/bai2lab2', component: Bai2Lab2},
    { path: '/bai3lab2', component: Bai3Lab2},
    { path: '/bai4lab2', component: Bai4Lab2}

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;