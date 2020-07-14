import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
    },
    { path: '*', redirect: '/' }
]

const router = new VueRouter({
    mode: 'history', // 주소/# 을 막기위해 필요하다
    routes
})

export default router
