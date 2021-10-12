import {createRouter, createWebHistory} from 'vue-router'
import ComingSoon from '../views/ComingSoon.vue'

const routes = [
    {
        path: '/',
        name: 'ComingSoon.vue',
        component: ComingSoon
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import("../views/Home1.vue")
    },
    {
        path: '/airport-transfers',
        name: 'AirportTransfers',
        component: () => import("../views/AirportTransfers.vue")
    },
    {
        path: '/weddings',
        name: 'Wedding',
        component: () => import("../views/Weddings.vue")
    },
    {
        path: '/private-hire',
        name: 'Private Hire',
        component: () => import("../views/PrivateHire.vue")
    },
    {
        path: '/executive',
        name: 'Executive',
        component: () => import("../views/Executive.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return  {
   
                      el: to.hash,
                      behavior: 'smooth',
                    }
              
            } else {
          return {left: 0, top: 0, behavior: 'smooth'}
        }
    
    }
})

export default router

