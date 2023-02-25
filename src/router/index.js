import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/client/RegisterView.vue'
import DetailView from '../views/DetailView.vue'
import AddView from '../views/AddView.vue'
import ProfileView from '../views/ProfileView.vue'
import FilterView from '../views/FilterView.vue'
import SearchView from '../views/SearchView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: DetailView
  },
  {
    path: '/add',
    name: 'Add',
    component: AddView
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: ProfileView
  },
  {
    path: '/filter',
    name: 'Filter',
    component: FilterView
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
