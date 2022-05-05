import {createRouter, createWebHistory} from 'vue-router'
import Home1 from '../views/Home1.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home1
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
    {
        path: '/reccomended',
        name: 'Reccomended',
        component: () => import("../views/Reccomended.vue")
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

