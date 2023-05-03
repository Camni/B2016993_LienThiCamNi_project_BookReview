import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import ListReview from '../views/ListReview.vue'
import AddReview from '../views/AddReview.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import DetailReview from '../views/DetailReview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        Header,
        Footer
      }
    },
    {
      path: '/admin/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin/list-review',
      name: 'list-review',
      components: {
        default: ListReview,
        Header,
        Footer
      }
    },
    {
      path: '/admin/add-review',
      name: 'add-review',
      components: {
        default: AddReview,
        Header,
        Footer
      }
    },
    {
      path: '/reviews/:id',
      name: 'detail-review',
      components: {
        default: DetailReview,
        Header,
        Footer
      }
    },
  ]
})

export default router
