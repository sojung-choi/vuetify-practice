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
        component: () => import(/* webpackChunkName: "about" */ '../pages/Csj'),
        children: [ 
            {
                path: '/csj/table',
                name: 'table',
                component: () => import(/* webpackChunkName: "about" */ '../components/container/DefaultTable')
            },
            {
                path: '/csj/list',
                name: 'List',
                component: () => import(/* webpackChunkName: "about" */ '../components/container/DefaultList')
            },
            {
                path: '/csj/photo',
                name: 'Photo',
                component: () => import(/* webpackChunkName: "about" */ '../components/container/DefaultImageGrid')
            },
            {
                path: '/csj/btable',
                name: 'Btable',
                component: () => import(/* webpackChunkName: "about" */ '../components/container/DefaultBuefyTable')
            },
            {
                path: '/csj/like',
                name: 'Like',
                component: () => import(/* webpackChunkName: "about" */ '../components/presentational/Like')
            }
        ]
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
