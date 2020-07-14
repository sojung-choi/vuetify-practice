import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../pages/Home";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/csj',
        name: 'Csj',
        component: () => import(/* webpackChunkName: "about" */ '../pages/Csj')
    },
    {
        path: '/cyj',
        name: 'Cyj',
        component: () => import(/* webpackChunkName: "about" */ '../pages/Cyj')
    },
    { path: '*', redirect: '/' }
]

const router = new VueRouter({
    mode: 'history', // 주소/# 을 막기위해 필요하다
    routes
})

export default router
