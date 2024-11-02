import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue';
import HomePage from '../components/Home.vue';
import BlogPage from '../components/Blog.vue';
import Lab1PY00008 from '../components/Lab1.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: About },
    { path: '/blog', component: BlogPage },
    { path: '/lab1', component: Lab1PY00008}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;