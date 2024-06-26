import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RoomsView from '@/views/RoomsView.vue'
import SpaView from '@/views/SpaView.vue'
import BookingView from '@/views/BookingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/rooms',
      name: 'Rooms',
      component: RoomsView
    },
    {
      path: '/spa',
      name: 'Spa',
      component: SpaView
    },
    {
      path: '/booking',
      name: 'Booking',
      component: BookingView
    }
  ]
})

export default router
